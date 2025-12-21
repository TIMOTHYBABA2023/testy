import React from 'react';
import { DashboardStatsGrid } from './DashboardStatsGrid';
import { ActiveJobsCard } from '../ActiveJobsCard';
import { AchievementBadgesCard } from '../AchievementBadgesCard';

const MaintenanceDashboard: React.FC = () => {
  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <DashboardStatsGrid />
        </div>

        <div className="my-5">
          <h2 className="text-sm font-semibold text-[#2F3639] mb-6">
            Active Jobs
          </h2>

          <ActiveJobsCard />
        </div>
        <div className="mb-8">
          <AchievementBadgesCard />
        </div>
      </div>
    </div>
  );
};

export default MaintenanceDashboard;
