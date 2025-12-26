import { useEffect, useState } from 'react';
import { supabase } from './supabase-client';

export interface LinkData {
  broadcast_id: number;
  nome_edicao: string;
  published_at: string;
  url: string;
  cliques: number;
}

export interface FormattedLinkData {
  url: string;
  clicks: number;
  percentage: number;
}

export function useLinksData(broadcastId: number | null) {
  const [links, setLinks] = useState<FormattedLinkData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!broadcastId) {
      setLinks([]);
      return;
    }

    async function fetchLinks() {
      if (!broadcastId) {
        console.log('⚠️ Sem broadcast_id, pulando busca de links');
        setLoading(false);
        return;
      }

      try {
        console.log('🔍 Buscando links para broadcast_id:', broadcastId);
        
        const { data, error } = await supabase
          .from('view_links_por_edicao')
          .select('*')
          .eq('broadcast_id', broadcastId)
          .order('cliques', { ascending: false });

        if (error) {
          console.error('❌ Erro ao buscar links:', error);
          throw error;
        }

        console.log('✅ Links recebidos:', data);
        console.log('📊 Total de links:', data?.length || 0);
        
        if (data && data.length > 0) {
          console.log('📄 Primeiro link:', data[0]);
        }

        // Calculate total clicks for percentage
        const totalClicks = data?.reduce((sum: number, item: any) => sum + (item.cliques || 0), 0) || 0;
        
        // Map the data to the expected format
        const formattedLinks: FormattedLinkData[] = (data || []).map((item: any) => ({
          url: item.url,
          clicks: item.cliques || 0,
          percentage: totalClicks > 0 ? ((item.cliques || 0) / totalClicks) * 100 : 0
        }));

        console.log('🎯 Links formatados:', formattedLinks);
        setLinks(formattedLinks);
      } catch (err: any) {
        console.error('💥 Erro crítico ao buscar links:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchLinks();
  }, [broadcastId]);

  return { links, loading, error };
}