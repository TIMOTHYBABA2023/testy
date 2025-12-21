import React from 'react';
import { maintenanceRequests } from '../data';
import { Button } from '../Button';
import { PriorityBadge } from '../PriorityBadge';
import { CiLocationOn } from 'react-icons/ci';
import { FaRegClock } from 'react-icons/fa';

export const MaintenanceRequestsCard: React.FC = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Maintenance Requests
      </h2>
      <div className="space-y-4">
        {maintenanceRequests.map((request) => (
          <div
            key={request.id}
            className="border border-gray-100 p-4 bg-white rounded-[9px]"
          >
            <div className="w-full flex items-center justify-between mb-1">
              <div className="flex gap-3 items-center">
                <h3 className="font-medium text-[#2F3639] text-xs">{request.title}</h3>
                <div className="font-medium text-white bg-[#232AAB] px-2 py-1 rounded-full text-[10px]">
                  {request.urgencyType}
                </div>
              </div>
              {request.priority && (
                <div className="flex justify-between items-start  mb-2">
                  <PriorityBadge priority={request.priority} />
                </div>
              )}
            </div>
            <div className='flex flex-col gap-1'>
              <span className="text-[10px] text-[#676C6C]">{request.id}</span>

            <div className="flex items-center  gap-1">
              <CiLocationOn className="w-3 h-3" />
              <p className="text-[10px] text-[#676C6C]">{request.address}</p>
            </div>

            <div className="flex items-center gap-1">
              <FaRegClock className="w-3 h-3" />
              <div className="text-[10px] text-[#676C6C]">
                {request.requestDate}, {request.requestTime}
              </div>
            </div>
            <span
              className={`px-3 py-1 w-fit rounded-full text-[10px] font-bold text-[#2F3639] border border-[#E5E7EB]`}
            >
              {request.type}
            </span>
            </div>

            <div className="flex gap-2 mt-2">
              <Button size="sm" className="flex-1 bg-[#232AAB]">
                View Details
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                Accept Request
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
