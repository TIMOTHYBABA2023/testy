import React from 'react';
import { PriorityBadge } from './PriorityBadge';
import { Button } from './Button';
import { activeJobs } from './data';
import { CiLocationOn } from 'react-icons/ci';
import { FaRegClock } from 'react-icons/fa';

export const ActiveJobsCard: React.FC = () => {
  const jobsByStatus = {
    Pending: activeJobs.filter((job) => job.status === 'Pending'),
    'In Progress': activeJobs.filter((job) => job.status === 'In Progress'),
    Completed: activeJobs.filter((job) => job.status === 'Completed'),
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-between mb-6">
        {Object.entries(jobsByStatus).map(([status, jobs]) => (
          <div key={status} className="w-[32%]">
            <div
              className={`mb-4 border-l-4 ${
                status === 'Pending'
                  ? 'border-[#E5E7EB]'
                  : status === 'In Progress'
                  ? 'border-[#0950C3]'
                  : status === 'Completed'
                  ? 'border-[#16A249]'
                  : ''
              } pl-2`}
            >
              <h3 className="text-xs font-medium text-[#2F3639]">{status}</h3>
              <span className="text-[10px] font-light text-[#676C6C]">
                {jobs.length} jobs
              </span>
            </div>

            <div className="w-full space-y-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="w-full border bg-white border-gray-200 rounded-lg p-4"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-gray-900 mb-2">
                      {job.title}
                    </h4>
                    {job.priority && (
                      <div className="flex justify-between items-start mb-2">
                        <PriorityBadge priority={job.priority} />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center  gap-1">
                    <CiLocationOn className='w-3 h-3' />
                    <p className="text-sm text-gray-600">{job.propertyName}</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <FaRegClock className='w-3 h-3' />
                    <div className="text-sm text-gray-500">
                      {job.scheduledDate}, {job.scheduledTime}
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border border-[#E5E7EB]`}
                  >
                    {job.type}
                  </span>

                  {status === 'Pending' && (
                    <div className="flex gap-2 mt-2">
                         <Button size="sm" className="flex-1 bg-[#232AAB]">
                        Accept
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Decline
                      </Button>
                     
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
