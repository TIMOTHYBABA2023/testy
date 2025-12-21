import React from 'react';
import type { Project } from './types';
import { ProjectStatusBadge } from './ProjectStatusBadge';
import { Button } from '../maintenance/Button';
import { LuEye } from 'react-icons/lu';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors flex justify-between items-center">
      <div>
        <div className="flex flex-col mb-1">
          <div className="flex gap-2">
            <h4 className="font-medium text-[#2F3639] text-sm">
              {project.name}
            </h4>
            <ProjectStatusBadge status={project.status} />
          </div>
          <p className="text-[10px] text-[#676C6C] font-light">
            {project.location}
          </p>
        </div>

        <div className="mb-1">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-[8px] text-[#676C6C] font-light">
              {project.unitsSold}/{project.totalUnits} units sold
            </span>
            <div className="flex gap-1 items-center">
              <LuEye />
              <span className="text-[8px] text-[#676C6C]">
                {project.viewers}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button variant="outline" size="sm" className="w-full">
          View Details
        </Button>
      </div>
    </div>
  );
};
