import React from 'react';
import type { Priority } from './types';

interface PriorityBadgeProps {
  priority: Priority;
}

const priorityColors: Record<Priority, string> = {
  High: 'bg-red-100 text-red-800',
  Medium: 'bg-yellow-100 text-yellow-800',
  Low: 'bg-green-100 text-green-800',
};

export const PriorityBadge: React.FC<PriorityBadgeProps> = ({ priority }) => {
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[priority]}`}>
      {priority}
    </span>
  );
};