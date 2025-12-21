import React, { useState } from 'react';
import { AgencyStatsGrid } from './AgencyStatsGrid';
import { ProjectsOverviewCard } from './ProjectsOverviewCard';
import { RecentLeadsCard } from './RecentLeadsCard';
import { PropertyOwnersCard } from './PropertyOwnersCard';
import { HomeLancerMarketplaceCard } from './HomeLancerMarketplaceCard';
import { PerformanceOverviewCard } from './PerformanceOverviewCard';
import { ReviewsCard } from './ReviewsCard';
import { DocumentsFAQCard } from './DocumentsFAQCard';
import { EarningsSummaryCard } from './EarningsSummary';

export const PropertyAgencyDashboard: React.FC = () => {
  // const [activeTab, setActiveTab] = useState<'overview' | 'sales' | 'projects' | 'investors'>('overview');

  // const tabs = [
  //   { id: 'overview', label: 'Overview' },
  //   { id: 'sales', label: 'Sales' },
  //   { id: 'projects', label: 'Projects' },
  //   { id: 'investors', label: 'Investors' },
  // ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Property Agency Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your real estate projects, leads, and professionals</p>
        </header>

        {/* <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div> */}

        {/* {activeTab === 'overview' && ( */}
          <>
            

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <HomeLancerMarketplaceCard />
              </div>
              <div>
                <PerformanceOverviewCard />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <ReviewsCard />
              </div>
              <div>
                <DocumentsFAQCard />
              </div>
            </div>

            <div className="mb-8">
              <EarningsSummaryCard />
            </div>
          </>
        {/* )} */}
      </div>
    </div>
  );
};