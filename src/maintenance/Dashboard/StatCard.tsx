import React from 'react';
import { Card } from '../Card';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  iconColor?: string;
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  iconColor,
}) => {
  return (
    <Card padding="md">
      <div className="flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <span className="text-[#2F3639] text-xs font-light">{title}</span>
          {icon && (
            <div
              className={`rounded-[9px] w-6 h-6 flex items-center justify-center ${
                iconColor === '#232AAB1A'
                  ? 'bg-[#232AAB1A] text-[#232AAB]'
                  : iconColor === '#2BBA4F1A'
                  ? 'bg-[#2BBA4F1A] text-[#5EC069]'
                  : ''
              }`}
            >
              {icon}
            </div>
          )}
        </div>
        <div className="text-[16px] text-[#2F3639] font-medium mb-1">
          {value}
        </div>

        {subtitle && (
          <span className="text-[#676C6C] text-[10px] font-light ml-1">
            {subtitle}
          </span>
        )}
      </div>
    </Card>
  );
};
