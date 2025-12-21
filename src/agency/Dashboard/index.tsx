import React from 'react';
import { AgencyStatsGrid } from './AgencyStatsGrid';
import { ProjectsOverviewCard } from './ProjectsOverviewCard';
import { RecentLeadsCard } from './RecentLeadsCard';

const AgencyDashboard: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <AgencyStatsGrid />
      </div>
      <div className="flex justify-between gap-6">
        <div className="w-[49%]">
          <ProjectsOverviewCard />
        </div>
        <div className="w-[49%]">
          <RecentLeadsCard />
        </div>
      </div>
    </div>
  );
};

export default AgencyDashboard;
