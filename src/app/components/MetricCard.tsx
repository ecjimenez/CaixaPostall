import React from "react";
import { Card, CardContent } from "./ui/card";
import { Send, MailOpen, MousePointerClick, Percent, UserMinus, Youtube } from "lucide-react";
import { cn } from "./ui/utils";

const iconMap = {
  Send: Send,
  MailOpen: MailOpen,
  MousePointerClick: MousePointerClick,
  Percent: Percent,
  UserMinus: UserMinus,
  Youtube: Youtube,
};

export interface Metric {
  title: string;
  value: string | number;
  subValue: string;
  color: string;
  bgColor: string;
  iconName: keyof typeof iconMap;
}

interface MetricCardProps {
  metric: Metric;
  onClick?: () => void;
}

export function MetricCard({ metric, onClick }: MetricCardProps) {
  const { title, value, subValue, color, bgColor, iconName } = metric;
  const Icon = iconMap[iconName];

  return (
    <Card 
      className={`rounded-[20px] shadow-sm hover:shadow-md transition-shadow duration-200 border-border/50 ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <CardContent className="p-6 flex items-start justify-between">
        <div className="flex flex-col gap-4">
          <p className="font-medium text-[#45556c] text-sm tracking-tight">{title}</p>
          <div className="flex flex-col gap-1">
             <p className="text-3xl font-bold tracking-tight" style={{ color }}>{value}</p>
             <p className="text-xs text-[#62748e]">{subValue}</p>
          </div>
        </div>
        <div 
          className="p-2 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: bgColor }}
        >
          <Icon className="w-5 h-5" style={{ color }} strokeWidth={2} />
        </div>
      </CardContent>
    </Card>
  );
}