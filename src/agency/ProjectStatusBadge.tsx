import React from 'react';
import type { ProjectStatus } from './types';

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
}

const statusColors: Record<ProjectStatus, string> = {
  'Pre Launch': 'bg-[#E7EAEF] text-[#2F3639]',
  'Active': 'bg-[#232AAB] text-white'
};

export const ProjectStatusBadge: React.FC<ProjectStatusBadgeProps> = ({ status }) => {
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
      {status}
    </span>
  );
};