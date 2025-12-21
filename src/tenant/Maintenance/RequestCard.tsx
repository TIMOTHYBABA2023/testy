import React from 'react';
import type { Request } from './types';

interface RequestCardProps {
  request: Request;
}

const RequestCard: React.FC<RequestCardProps> = ({ request }) => {
  return (
    <div className="bg-white border border-[#DEDEE3] rounded-[10px] p-4 mb-4 flex justify-between items-center">
      <div>
        <div className="flex gap-5 items-center">
          <h2 className="text-[12px] text-[#2F3639] font-medium">
            {request.title}
          </h2>
          <span
            className={` text-[12px] font-medium px-3 py-1 rounded-full ${
              request.priority === 'High'
                ? 'bg-[#E80707] text-white'
                : request.priority === 'Medium'
                ? 'bg-[#232AAB] text-white'
                : 'bg-[#E2E6E9] text-[#2C2E33]'
            }`}
          >
            {request.priority}
          </span>
        </div>
        <p className="mt-3 text-[#2F3639] text-[10px] font-light">
          {request.description}
        </p>
        <div className="flex gap-1 mt-1 items-center">
          <div className="text-[#2C2E33] text-[8px] font-medium border border-[#E2E6E9] py-1 px-2 rounded-full">
            {request.category}
          </div>
          <p className="text-[#2F3639] text-[10px] font-light">
            • {request.location}
          </p>
        </div>
        <div className="mt-4 flex items-center gap-3 text-[10px] text-[#676C6C] font-light">
          <span>Created: {request.createdAt}</span>
          <span>Updated: {request.updatedAt}</span>
          <div>
            <span
              className={`px-4 py-2 rounded-full border text-[8px] font-medium  ${
                request.status === 'Escalated'
                  ? 'bg-[#C00F0C1A] border-[#E80707] text-[#E80707]'
                  : request.status === 'In progress'
                  ? 'bg-[#353FFF1A] border-[#232AAB] text-[#232AAB]'
                  : ' bg-[#FBB1421A] border-[#E5A23C] text-[#E5A23C]'
              }`}
            >
              {request.status}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <button className="border border-[#E2E6E9] bg-[#FCFCFC] text-[#2C2E33] text-[10px] py-2 px-4 rounded-[10px]">
          Comment
        </button>
        <button className="border border-[#E2E6E9] bg-[#E80707] text-[#FFFFFF] text-[10px] py-2 px-4 rounded-[10px]">
          Escalate
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
