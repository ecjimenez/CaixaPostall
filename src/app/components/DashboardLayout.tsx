import React, { useState } from "react";
import { Button } from "./ui/button";
import { RefreshCcw, Settings, ChevronDown, MessageSquare } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {cn} from "./ui/utils";

export function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
            {/* Logo placeholder - using a simple icon */}
            <MessageSquare className="text-white w-6 h-6" />
        </div>
        <h1 className="text-xl font-bold tracking-tight flex flex-col">
          <span>Dashboard</span>
          <span className="text-sm font-normal text-slate-500">Caixa Postal</span>
        </h1>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {/* Removed "Próxima: 12:00" clock element */}

        <Button className="gap-2 bg-[#030213] text-white hover:bg-[#030213]/90 shadow-sm font-medium">
          <RefreshCcw className="w-4 h-4" />
          Próxima atualização: TERÇA-FEIRA 11h
        </Button>
        
        {/* Removed Ferramentas de Sync button */}
      </div>
    </div>
  );
}

export function EditionSelector({ editions = [], selectedEdition, onEditionChange }: { 
  editions?: string[];
  selectedEdition?: string;
  onEditionChange?: (edition: string) => void;
}) {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const defaultEdition = selectedEdition || (editions.length > 0 ? editions[0] : "");

  // Group editions by month
  const groupedEditions = React.useMemo(() => {
    const groups: { [key: string]: string[] } = {};
    
    editions.forEach((edition) => {
      // Extract date from edition string (format: "Edição DD/MM/YYYY")
      const match = edition.match(/(\d{2})\/(\d{2})\/(\d{4})/);
      if (match) {
        const [_, day, month, year] = match;
        const monthKey = `${year}-${month}`;
        
        if (!groups[monthKey]) {
          groups[monthKey] = [];
        }
        groups[monthKey].push(edition);
      }
    });
    
    // Get current month/year
    const now = new Date();
    const currentMonthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    
    // Sort groups by date (newest first)
    return Object.entries(groups)
      .sort(([a], [b]) => b.localeCompare(a))
      .map(([key, items]) => {
        const [year, month] = key.split('-');
        const monthNames = [
          'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
          'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
        ];
        const monthName = monthNames[parseInt(month) - 1];
        const isCurrentMonth = key === currentMonthKey;
        
        return {
          monthKey: key,
          monthName: monthName,
          year,
          count: items.length,
          isCurrentMonth,
          editions: items.sort((a, b) => {
            // Sort editions within month by date (newest first)
            const dateA = a.match(/(\d{2})\/(\d{2})\/(\d{4})/);
            const dateB = b.match(/(\d{2})\/(\d{2})\/(\d{4})/);
            if (dateA && dateB) {
              const [_, dayA, monthA, yearA] = dateA;
              const [__, dayB, monthB, yearB] = dateB;
              return `${yearB}-${monthB}-${dayB}`.localeCompare(`${yearA}-${monthA}-${dayA}`);
            }
            return 0;
          })
        };
      });
  }, [editions]);

  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-sm font-medium text-slate-500">Selecionar Edição</label>
      
      {/* Month boxes - horizontal scroll */}
      <div className="relative">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
          {groupedEditions.map((group) => (
            <button
              key={group.monthKey}
              onClick={() => setSelectedMonth(selectedMonth === group.monthKey ? null : group.monthKey)}
              className={cn(
                "flex-shrink-0 px-3 py-2 rounded-lg border transition-all duration-200",
                "hover:shadow-sm",
                group.isCurrentMonth
                  ? "border-blue-200 bg-blue-50/50"
                  : "border-slate-200 bg-white",
                selectedMonth === group.monthKey && "ring-2 ring-blue-400 ring-offset-1"
              )}
            >
              <div className="flex items-center gap-1.5">
                <span className={cn(
                  "text-xs font-semibold",
                  group.isCurrentMonth ? "text-blue-700" : "text-slate-700"
                )}>
                  {group.monthName}
                </span>
                <span className={cn(
                  "text-[10px] px-1.5 py-0.5 rounded-full font-medium",
                  group.isCurrentMonth 
                    ? "bg-blue-200 text-blue-700"
                    : "bg-slate-100 text-slate-600"
                )}>
                  {group.count}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Edition dropdown - shows when month is selected */}
      {selectedMonth && (
        <Select 
          value={defaultEdition} 
          onValueChange={(value) => onEditionChange?.(value)}
        >
          <SelectTrigger className="w-full h-11 bg-slate-50 border-slate-200 text-slate-900 font-medium">
            <SelectValue placeholder={defaultEdition || "Carregando edições..."} />
          </SelectTrigger>
          <SelectContent>
            {groupedEditions
              .find(g => g.monthKey === selectedMonth)
              ?.editions.map((edition, index) => (
                <SelectItem key={index} value={edition}>
                  {edition}
                </SelectItem>
              )) || null}
          </SelectContent>
        </Select>
      )}
      
      {/* Show all editions if no month selected */}
      {!selectedMonth && (
        <Select 
          value={defaultEdition} 
          onValueChange={(value) => onEditionChange?.(value)}
        >
          <SelectTrigger className="w-full h-11 bg-slate-50 border-slate-200 text-slate-900 font-medium">
            <SelectValue placeholder={defaultEdition || "Carregando edições..."} />
          </SelectTrigger>
          <SelectContent>
            {editions.map((edition, index) => (
              <SelectItem key={index} value={edition}>
                {edition}
              </SelectItem>
            ))}
            {editions.length === 0 && <div className="p-2 text-sm text-slate-500">Nenhuma edição encontrada</div>}
          </SelectContent>
        </Select>
      )}
    </div>
  );
}