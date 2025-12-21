import React from 'react';
import { notices, properties } from '../data';
import { PropertyCard } from './PropertyCard';

export const NoticeBoardCard: React.FC = () => {
  return (
    <div>
      <div className="space-y-6">
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 space-y-4">
            <h2 className="text-[16px] font-medium text-[#2F3639] mb-6">
              Notice Board
            </h2>
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="border border-gray-100 rounded-[10px] p-4"
              >
                <div className="flex justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0950C31A]"></div>
                    <div>
                      <h4 className="font-light text-[#2F3639] text-sm mb-1">
                        {notice.title}
                      </h4>
                      <p className="text-[#676C6C] font-light text-[10px]">
                        {notice.content}
                      </p>
                    </div>
                  </div>
                  <div className="text-[10px] text-[#2F3639] font-medium border border-[#E5E7EB] flex items-center justify-center px-2 h-5 rounded-full">
                    {notice.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-4 border-gray-200">
            <h3 className="font-medium text-gray-900 mb-4">
              Active Properties
            </h3>
            <div className="space-y-4">
              {properties.map((property) => (
                <PropertyCard key={property.name} property={property} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
