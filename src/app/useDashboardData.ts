import { useEffect, useState } from 'react';
import { supabase } from './supabase-client';
import { Metric } from './mockData';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

export function useDashboardData(selectedEdition?: string) {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [evolutionData, setEvolutionData] = useState<any[]>([]);
  const [conversionData, setConversionData] = useState<any[]>([]);
  const [editions, setEditions] = useState<string[]>([]);
  const [broadcastId, setBroadcastId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [youtubeSubscribers, setYoutubeSubscribers] = useState<string>('...');
  const [youtubeLastUpdate, setYoutubeLastUpdate] = useState<string | null>(null);
  const [youtubeCached, setYoutubeCached] = useState<boolean>(false);

  // Fetch YouTube subscribers
  const fetchYoutubeData = async () => {
    try {
      const url = `https://${projectId}.supabase.co/functions/v1/make-server-04c842af/youtube-subscribers`;
      console.log('Fetching YouTube data:', url);
      
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('YouTube data received:', data);
        setYoutubeSubscribers(data.formattedCount);
        setYoutubeLastUpdate(data.lastUpdate);
        setYoutubeCached(data.cached || false);
      } else {
        console.error('Failed to fetch YouTube subscribers');
        setYoutubeSubscribers('N/A');
      }
    } catch (err) {
      console.error('Error fetching YouTube subscribers:', err);
      setYoutubeSubscribers('N/A');
    }
  };

  useEffect(() => {
    fetchYoutubeData();
  }, []);

  const refreshYoutubeData = async (count: number) => {
    // Manual update only
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-04c842af/youtube-subscribers/update`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ count }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setYoutubeSubscribers(data.formattedCount);
        setYoutubeLastUpdate(new Date().toISOString());
        setYoutubeCached(false);
      }
    } catch (err) {
      console.error('Error updating YouTube subscribers:', err);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from('view_broadcasts_domingo_real')
          .select('*')
          .order('ultimo_disparo', { ascending: false });

        if (error) throw error;

        if (data && data.length > 0) {
          // Find the selected edition or use the latest
          let latest = data[0];
          if (selectedEdition) {
            const selected = data.find((item: any) => 
              `${item.subject} - ${new Date(item.ultimo_disparo).toLocaleDateString('pt-BR')}` === selectedEdition
            );
            if (selected) latest = selected;
          }
          
          // Fetch click rate from matview_broadcasts_domingo_real
          const { data: matviewData, error: matviewError } = await supabase
            .from('matview_broadcasts_domingo_real')
            .select('click_rate, subject, ultimo_disparo')
            .order('ultimo_disparo', { ascending: false });

          if (matviewError) {
            console.error('Error fetching matview data:', matviewError);
          }

          // Find matching record in matview for click rate
          let clickRateFromMatview = latest.click_rate || 0;
          if (matviewData && matviewData.length > 0) {
            const matchingMatview = matviewData.find((item: any) => 
              item.subject === latest.subject && 
              new Date(item.ultimo_disparo).getTime() === new Date(latest.ultimo_disparo).getTime()
            );
            if (matchingMatview) {
              clickRateFromMatview = matchingMatview.click_rate || 0;
            }
          }
          
          // Both rates already come as percentages (2.63 = 2.63%), don't multiply
          const openRate = latest.open_rate || 0;
          const clickRate = clickRateFromMatview || 0;
          
          const newMetrics: Metric[] = [
            {
              title: "Total Enviados",
              value: latest.recipients?.toLocaleString() || "0",
              subValue: "Inscritos que receberam",
              color: "#155dfc",
              bgColor: "#dbeafe",
              iconName: "Send"
            },
            {
              title: "Aberturas",
              value: latest.total_opens?.toLocaleString() || "0",
              subValue: `Taxa: ${openRate.toFixed(2)}%`,
              color: "#00a63e",
              bgColor: "#dcfce7",
              iconName: "MailOpen"
            },
            {
              title: "Cliques",
              value: latest.total_clicks?.toLocaleString() || "0",
              subValue: `Taxa: ${clickRate.toFixed(2)}%`,
              color: "#9810fa",
              bgColor: "#f3e8ff",
              iconName: "MousePointerClick"
            },
            {
              title: "Taxa de Cliques",
              value: `${clickRate.toFixed(2)}%`,
              subValue: "Cliques por abertura",
              color: "#f54900",
              bgColor: "#ffedd4",
              iconName: "Percent"
            },
            {
              title: "Taxa de Abertura",
              value: `${openRate.toFixed(2)}%`,
              subValue: "Aberturas por envio",
              color: "#0092b8",
              bgColor: "#cefafe",
              iconName: "Percent"
            },
            {
              title: "Inscritos YouTube",
              value: youtubeSubscribers,
              subValue: "Canal da Joyce",
              color: "#FF0000",
              bgColor: "#ffe5e5",
              iconName: "Youtube"
            }
          ];
          setMetrics(newMetrics);

          const recentEditions = [...data].slice(0, 5).reverse();
          
          const newEvolution = recentEditions.map(item => {
            return {
              date: new Date(item.ultimo_disparo).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }),
              sent: item.recipients,
              opens: item.total_opens,
              clicks: item.total_clicks
            };
          });
          setEvolutionData(newEvolution);

          const newConversion = recentEditions.map(item => {
            return {
              date: new Date(item.ultimo_disparo).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }),
              openRate: (item.open_rate || 0).toFixed(1),
              clickRate: (item.click_rate || 0).toFixed(1)
            };
          });
          setConversionData(newConversion);

          setEditions(data.map((item: any) => `${item.subject} - ${new Date(item.ultimo_disparo).toLocaleDateString('pt-BR')}`));
          setBroadcastId(latest.broadcast_id);
          console.log('📡 Broadcast ID selecionado:', latest.broadcast_id, 'para edição:', latest.subject);
        }
      } catch (err: any) {
        console.error('Error fetching dashboard data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [selectedEdition]);

  return { metrics, evolutionData, conversionData, editions, broadcastId, loading, error, youtubeSubscribers, refreshYoutubeData, youtubeLastUpdate, youtubeCached };
}