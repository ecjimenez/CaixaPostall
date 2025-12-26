import { useState, useEffect } from "react";
import { DashboardHeader, EditionSelector } from "./components/DashboardLayout";
import { MetricCard } from "./components/MetricCard";
import { MetricsEvolutionChart, ConversionRatesChart, UnsubscribesChart } from "./components/Charts";
import { LinkList } from "./components/LinkList";
import { useDashboardData } from "./useDashboardData";
import { useLinksData } from "./useLinksData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Loader2 } from "lucide-react";
import { projectId, publicAnonKey } from '../../utils/supabase/info';

export default function App() {
  const [filterIguatemi, setFilterIguatemi] = useState(false);
  const [filterYoutube, setFilterYoutube] = useState(false);
  const [filterRedesJoyce, setFilterRedesJoyce] = useState(false);
  const [selectedEdition, setSelectedEdition] = useState<string>("");
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [sending, setSending] = useState(false);
  const [showTestMenu, setShowTestMenu] = useState(false);
  const [showYoutubeUpdateDialog, setShowYoutubeUpdateDialog] = useState(false);
  const [youtubeCount, setYoutubeCount] = useState("");
  const { metrics, evolutionData, conversionData, editions, broadcastId, loading, error, youtubeSubscribers, refreshYoutubeData, youtubeLastUpdate, youtubeCached } = useDashboardData(selectedEdition);
  const { links, loading: linksLoading, error: linksError } = useLinksData(broadcastId);

  // Set default edition when editions are loaded
  useEffect(() => {
    if (editions.length > 0 && !selectedEdition) {
      setSelectedEdition(editions[0]);
    }
  }, [editions]);

  const sendWhatsAppMessage = async (phone: string, message: string) => {
    setSending(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-04c842af/send-whatsapp`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ phone, message }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error('Erro ao enviar mensagem:', data);
        alert('Erro ao enviar mensagem. Verifique o console para mais detalhes.');
        return false;
      }

      alert('Mensagem enviada com sucesso!');
      return true;
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      alert('Erro ao enviar mensagem. Verifique sua conexão.');
      return false;
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
      </div>);
  }
  
  if (error) {
     return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <div className="text-red-500">Erro ao carregar dados: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-6">
        
        <DashboardHeader />
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <EditionSelector 
              editions={editions} 
              selectedEdition={selectedEdition}
              onEditionChange={setSelectedEdition}
            />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 md:gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="relative">
              <MetricCard 
                metric={metric} 
                onClick={metric.title === "Inscritos YouTube" ? () => setShowYoutubeUpdateDialog(true) : undefined}
              />
              {metric.title === "Inscritos YouTube" && youtubeLastUpdate && (
                <div className="absolute top-2 right-2 z-10">
                  <div 
                    className={`px-2 py-1 rounded-md text-[10px] font-medium ${
                      youtubeCached 
                        ? 'bg-amber-100 text-amber-700' 
                        : 'bg-green-100 text-green-700'
                    }`}
                    title={`${youtubeCached ? 'Cache' : 'API'} - Última atualização: ${new Date(youtubeLastUpdate).toLocaleString('pt-BR')}`}
                  >
                    {youtubeCached ? '📦 Cache' : '✨ API'}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white border border-slate-200 rounded-lg px-[33px] py-[3px] pt-[33px] pr-[33px] pb-[22px] pl-[33px]">
            <TabsTrigger value="overview">
              Visão Geral
            </TabsTrigger>
            <TabsTrigger value="links">
              Links Clicados
            </TabsTrigger>
          </TabsList>

          {/* Botões de Envio */}
          <div className="flex flex-col gap-3">
            <div className="relative w-fit">
              <button 
                onClick={() => setShowTestMenu(!showTestMenu)}
                disabled={sending}
                className="bg-[#030213] text-white hover:bg-[#030213]/90 px-5 py-2.5 rounded-xl text-sm font-medium transition-all shadow-sm whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {sending && <Loader2 className="w-4 h-4 animate-spin" />}
                ENVIAR TESTE
              </button>

              {/* Dropdown Menu */}
              {showTestMenu && !sending && (
                <div className="absolute top-full mt-2 left-0 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 min-w-[200px] z-50">
                  <button
                    onClick={async () => {
                      setShowTestMenu(false);
                      const text = `Enrique, segue o resultado do último disparo\n\n📨 ${editions[0] || 'N/A'}\n📅 Data de disparo: Variável (Hoje)\n🔢 Total de envios: ${metrics[0]?.value}\n   Aberturas: ${metrics[1]?.value}\n   Taxa de aberturas: ${metrics[4]?.value}\n↗️ Cliques: ${metrics[2]?.value}\n   Taxa de cliques: ${metrics[3]?.value}\n🔴 Inscritos YouTube: ${youtubeSubscribers}`;
                      await sendWhatsAppMessage('5511992043424', text);
                    }}
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 transition-colors text-sm text-slate-700 font-medium"
                  >
                    📱 Enrique
                  </button>
                  <button
                    onClick={async () => {
                      setShowTestMenu(false);
                      const text = `Dani Barton, segue o resultado do último disparo\n\n📨 ${editions[0] || 'N/A'}\n📅 Data de disparo: Variável (Hoje)\n🔢 Total de envios: ${metrics[0]?.value}\n   Aberturas: ${metrics[1]?.value}\n   Taxa de aberturas: ${metrics[4]?.value}\n↗️ Cliques: ${metrics[2]?.value}\n   Taxa de cliques: ${metrics[3]?.value}\n🔴 Inscritos YouTube: ${youtubeSubscribers}`;
                      await sendWhatsAppMessage('5581987071070', text);
                    }}
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 transition-colors text-sm text-slate-700 font-medium"
                  >
                    📱 Dani Barton
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => setShowConfirmDialog(true)}
              disabled={sending}
              className="bg-emerald-600 text-white hover:bg-emerald-700 px-5 py-2.5 rounded-xl text-sm font-medium transition-all shadow-sm whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed w-fit"
            >
              ENVIAR PARA JOYCE
            </button>
          </div>

          <TabsContent value="overview" className="mt-0 space-y-6">
             <MetricsEvolutionChart data={evolutionData} />
          </TabsContent>

          <TabsContent value="links" className="mt-0 space-y-4">
             <div className="flex items-center gap-3 px-1 flex-wrap">
                <button 
                  onClick={() => setFilterIguatemi(!filterIguatemi)}
                  className={`flex items-center gap-2 px-3 py-1.5 border shadow-sm rounded-lg text-xs font-semibold transition-all uppercase tracking-wide ${
                    filterIguatemi 
                      ? "bg-emerald-50 border-emerald-200 text-emerald-700" 
                      : "bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${filterIguatemi ? "bg-emerald-600" : "bg-emerald-500"}`}></span>
                  Iguatemi
                  <span className={`ml-1 px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                    filterIguatemi 
                      ? "bg-emerald-200 text-emerald-800" 
                      : "bg-emerald-100 text-emerald-700"
                  }`}>
                    {links.filter(link => link.url.toLowerCase().includes("iguatemi")).length}
                  </span>
                </button>

                <button 
                  onClick={() => setFilterYoutube(!filterYoutube)}
                  className={`flex items-center gap-2 px-3 py-1.5 border shadow-sm rounded-lg text-xs font-semibold transition-all uppercase tracking-wide ${
                    filterYoutube 
                      ? "bg-red-50 border-red-200 text-red-700" 
                      : "bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${filterYoutube ? "bg-red-600" : "bg-red-500"}`}></span>
                  YouTube
                  <span className={`ml-1 px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                    filterYoutube 
                      ? "bg-red-200 text-red-800" 
                      : "bg-red-100 text-red-700"
                  }`}>
                    {links.filter(link => link.url.toLowerCase().includes("youtube.com") || link.url.toLowerCase().includes("youtu.be")).length}
                  </span>
                </button>

                <button 
                  onClick={() => setFilterRedesJoyce(!filterRedesJoyce)}
                  className={`flex items-center gap-2 px-3 py-1.5 border shadow-sm rounded-lg text-xs font-semibold transition-all uppercase tracking-wide ${
                    filterRedesJoyce 
                      ? "bg-purple-50 border-purple-200 text-purple-700" 
                      : "bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${filterRedesJoyce ? "bg-purple-600" : "bg-purple-500"}`}></span>
                  Redes Joyce
                  <span className={`ml-1 px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                    filterRedesJoyce 
                      ? "bg-purple-200 text-purple-800" 
                      : "bg-purple-100 text-purple-700"
                  }`}>
                    {links.filter(link => link.url.toLowerCase().includes("/joycepascowitch")).length}
                  </span>
                </button>
             </div>
             <LinkList 
               filterIguatemi={filterIguatemi}
               filterYoutube={filterYoutube}
               filterRedesJoyce={filterRedesJoyce}
               links={links}
               loading={linksLoading}
             />
          </TabsContent>
        </Tabs>
      </div>

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Confirmar Envio</h3>
            <p className="text-slate-600 mb-6">Deseja enviar o relatório para Joyce via WhatsApp?</p>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmDialog(false)}
                className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-xl font-medium transition-all"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  const text = `Joyce, segue o resultado do último disparo

📨 ${editions[0] || 'N/A'}
📅 Data de disparo: Variável (Hoje)
🔢 Total de envios: ${metrics[0]?.value}
   Aberturas: ${metrics[1]?.value}
   Taxa de aberturas: ${metrics[4]?.value}
↗️ Cliques: ${metrics[2]?.value}
   Taxa de cliques: ${metrics[3]?.value}
🔴 Inscritos YouTube: ${youtubeSubscribers}`;
                  sendWhatsAppMessage('5511999814224', text);
                  setShowConfirmDialog(false);
                }}
                className="flex-1 px-4 py-2.5 bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl font-medium transition-all shadow-sm"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* YouTube Update Dialog */}
      {showYoutubeUpdateDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Atualizar Inscritos do YouTube</h3>
            <p className="text-slate-600 mb-4">Insira o número atual de inscritos do canal:</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Número de inscritos:</label>
                <input
                  type="number"
                  value={youtubeCount}
                  onChange={(e) => setYoutubeCount(e.target.value)}
                  placeholder="Ex: 125400"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl mb-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  autoFocus
                />
                <button
                  onClick={() => {
                    if (youtubeCount && !isNaN(parseInt(youtubeCount))) {
                      refreshYoutubeData(parseInt(youtubeCount));
                      setShowYoutubeUpdateDialog(false);
                      setYoutubeCount("");
                    }
                  }}
                  disabled={!youtubeCount || isNaN(parseInt(youtubeCount))}
                  className="w-full px-4 py-2.5 bg-red-600 text-white hover:bg-red-700 rounded-xl font-medium transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Atualizar
                </button>
              </div>

              <button
                onClick={() => {
                  setShowYoutubeUpdateDialog(false);
                  setYoutubeCount("");
                }}
                className="w-full px-4 py-2.5 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-xl font-medium transition-all"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}