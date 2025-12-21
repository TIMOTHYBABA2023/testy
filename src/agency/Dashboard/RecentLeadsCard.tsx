import React from 'react';
import { Card } from '../../maintenance/Card';
import { recentLeads } from '../data';
import { CiCalendar } from 'react-icons/ci';

export const RecentLeadsCard: React.FC = () => {

  return (
    <Card>
      <h2 className="text-[16px] font-semibold text-[#2F3639] mb-4">
        Recent Leads
      </h2>

      <div className="space-y-4">
        {recentLeads.map((lead) => (
          <div
            key={lead.id}
            className="flex flex-col gap-2 items-start justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <div className="flex flex-col gap-1">
                <h4 className="font-medium text-[#2F3639] text-xs">
                  {lead.name}
                </h4>
                <p className="text-[10px] font-light text-[#676C6C]">
                  {lead.project}
                </p>
            </div>

            <div className="flex items-center gap-2 text-[10px] text-[#676C6C] font-light">
              <CiCalendar />
              <span>{lead.date}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
