import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { ExternalLink, MousePointerClick, Loader2 } from "lucide-react";

interface LinkData {
  url: string;
  clicks: number;
  percentage: number;
}

export function LinkList({ 
  filterIguatemi,
  filterYoutube,
  filterRedesJoyce, 
  links, 
  loading 
}: { 
  filterIguatemi?: boolean;
  filterYoutube?: boolean;
  filterRedesJoyce?: boolean;
  links: LinkData[];
  loading?: boolean;
}) {
  // Apply filters
  let filteredData = links;
  let filterTitle = "Links mais clicados";
  let filterDescription = "Performance individual de cada link nesta edição";
  
  if (filterIguatemi) {
    filteredData = links.filter(link => link.url.toLowerCase().includes("iguatemi"));
    filterTitle = "Links Iguatemi";
    filterDescription = "Performance dos links relacionados ao Iguatemi nesta edição";
  } else if (filterYoutube) {
    filteredData = links.filter(link => 
      link.url.toLowerCase().includes("youtube.com") || 
      link.url.toLowerCase().includes("youtu.be")
    );
    filterTitle = "Links YouTube";
    filterDescription = "Performance dos vídeos do YouTube nesta edição";
  } else if (filterRedesJoyce) {
    filteredData = links.filter(link => link.url.toLowerCase().includes("/joycepascowitch"));
    filterTitle = "Redes Joyce";
    filterDescription = "Performance dos links das redes sociais da Joyce nesta edição";
  }

  return (
    <Card className="rounded-[14px] shadow-sm border-border/50">
      <CardHeader>
        <CardTitle className="text-base font-medium text-[#0a0a0a]">
          {filterTitle}
        </CardTitle>
        <CardDescription className="text-[#717182]">
          {filterDescription}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
            <span className="ml-2 text-slate-500">Carregando links...</span>
          </div>
        ) : (
        <div className="space-y-4">
          {filteredData.length === 0 ? (
            <div className="text-center py-8 text-slate-500">
              Nenhum link encontrado com o filtro selecionado.
            </div>
          ) : (
            filteredData.map((link, index) => {
            const isIguatemi = link.url.toLowerCase().includes("iguatemi");
            const isYoutube = link.url.toLowerCase().includes("youtube.com") || link.url.toLowerCase().includes("youtu.be");
            const isRedesJoyce = link.url.toLowerCase().includes("/joycepascowitch");
            
            // Determine background and icon colors based on link type
            let bgClass = "bg-slate-50 hover:bg-slate-100";
            let iconBgClass = "bg-blue-100";
            let iconColorClass = "text-blue-600";
            
            if (isIguatemi) {
              bgClass = "bg-emerald-50 hover:bg-emerald-100";
              iconBgClass = "bg-lime-100";
              iconColorClass = "text-lime-600";
            } else if (isYoutube) {
              bgClass = "bg-red-50 hover:bg-red-100";
              iconBgClass = "bg-red-100";
              iconColorClass = "text-red-600";
            } else if (isRedesJoyce) {
              bgClass = "bg-purple-50 hover:bg-purple-100";
              iconBgClass = "bg-purple-100";
              iconColorClass = "text-purple-600";
            }
            
            return (
            <div 
              key={index} 
              className={`flex items-center justify-between p-3 rounded-lg transition-colors group ${bgClass}`}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${iconBgClass}`}>
                  <ExternalLink className={`w-4 h-4 ${iconColorClass}`} />
                </div>
                <div className="flex flex-col min-w-0">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-900 truncate hover:underline block max-w-[300px] md:max-w-[500px]">
                    {link.url}
                  </a>
                  <span className="text-xs text-slate-500">Link externo</span>
                </div>
              </div>

              <div className="flex items-center gap-6 shrink-0">
                <div className="flex flex-col items-end">
                   <div className="flex items-center gap-1.5">
                      <MousePointerClick className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-sm font-bold text-slate-700">{link.clicks}</span>
                   </div>
                   <span className="text-xs text-slate-500">cliques</span>
                </div>
                
                <div className="w-16 text-right">
                   <span className="text-sm font-bold text-blue-600">{link.percentage.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          )}))}
        </div>
        )}
      </CardContent>
    </Card>
  );
}