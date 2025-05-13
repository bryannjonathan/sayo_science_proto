import React from 'react';

export interface SectionCardProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  color: 'emerald' | 'amber' | 'sky' | 'rose' | 'indigo' | 'purple';
}

const colorClasses: Record<SectionCardProps['color'], string> = {
  emerald: 'border-emerald-100 bg-emerald-50/50',
  amber:   'border-amber-100   bg-amber-50/50',
  sky:     'border-sky-100     bg-sky-50/50',
  rose:    'border-rose-100    bg-rose-50/50',
  indigo:  'border-indigo-100  bg-indigo-50/50',
  purple:  'border-purple-100  bg-purple-50/50',
};

export default function SectionCard({
  title,
  children,
  icon,
  color,
}: SectionCardProps) {
  return (
    <div className={`border rounded-xl p-5 backdrop-blur-sm ${colorClasses[color]}`}>
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
}
