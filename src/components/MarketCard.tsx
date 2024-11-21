import { Card } from '@/components/ui/card';
import { ReactNode } from 'react';

interface MarketCardProps {
  icon: ReactNode;
  title: string;
  items: string[];
}

export function MarketCard({ icon, title, items }: MarketCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-blue-600">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}