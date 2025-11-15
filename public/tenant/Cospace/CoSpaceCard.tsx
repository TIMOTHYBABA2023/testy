import React from 'react';
import type { CoSpace } from '../TenantApartment/types';
import { IoLocationOutline } from 'react-icons/io5';
import { GrGroup } from 'react-icons/gr';
import { LuClock5 } from 'react-icons/lu';

interface CoSpaceCardProps {
  space: CoSpace;
}

const CoSpaceCard: React.FC<CoSpaceCardProps> = ({ space }) => {
  return (
    <div className="w-[374px] bg-white rounded-[9px] border border-[#E5E8EB] shadow-sm overflow-hidden flex flex-col">
      <div className="relative">
        <img
          src={space.image}
          alt={space.name}
          className="h-[120px] w-full object-cover"
        />
      </div>
      <div className="p-8 flex flex-col gap-2 flex-1  border-b border-b-[#9797974D]">
        <div className="flex items-center">
          <h3 className="font-medium text-xs text-[#0D0D12]">{space.name}</h3>
        </div>
        <div className="flex gap-1 items-center">
          <div className="flex gap-1 items-center">
            <IoLocationOutline />
            <p
              className={`text-[10px] text-[#676C6C] font-light 
              `}
            >
              {space.building}
            </p>
          </div>
        </div>
        <div className="text-[10px] text-[#676C6C] font-light flex items-center gap-2">
          <GrGroup />
          <p>Capacity: {space.capacity} people</p>
        </div>
        <div className="text-[10px] text-[#676C6C] font-light flex items-center gap-2">
          <LuClock5 />
          <p>{space.availability}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {space.amenities.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="border border-[#E2E6E9] text-[#2C2E33] px-2 py-1 rounded-full text-[8px]"
            >
              {tag}
            </span>
          ))}

          {space.amenities.length > 3 && (
            <span className="border border-[#E2E6E9] text-[#2C2E33] px-2 py-1 rounded-full text-[8px]">
              +{space.amenities.length - 3} more
            </span>
          )}
        </div>
        <hr className="bg-[#9797974D] my-1" />
        <p className="text-[#676C6C] text-[10px]">
          Hosted by: <span className="text-[#2C2E33]">{space.host}</span>
        </p>
        <div className="flex justify-between mt-auto pt-2">
          <button className="text-white bg-[#232AAB] text-[12px] rounded-[7px] w-[60%] font-light">
            Request Access
          </button>
          <button className="bg-[#FCFCFC] border border-[#E2E6E9] text-[10px] rounded-[7px]  w-[38%] h-[28px]">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoSpaceCard;
