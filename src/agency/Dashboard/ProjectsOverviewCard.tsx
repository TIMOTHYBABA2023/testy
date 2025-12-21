import React from 'react';
// import { SearchIcon } from '@heroicons/react/24/outline';
import { Card } from '../../maintenance/Card';
import { ProjectCard } from '../ProjectCard';
import { projects } from '../data';

export const ProjectsOverviewCard: React.FC = () => {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Projects</h2>
      </div>
      
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Card>
  );
};