import React from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { LuShield } from 'react-icons/lu';
import { MdOutlineEventNote } from 'react-icons/md';
import { PiHouseLineDuotone, PiUsersThreeBold } from 'react-icons/pi';

interface OverviewCardProps {
  title: string;
  value: string;
  status?: string;
  statusColor?: string;
  subtext?: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  value,
  status,
  statusColor,
  subtext,
}) => {
  return (
    <div className="bg-white border border-[#E5E8EB] rounded-[8.9px] p-4 w-full max-w-[290px]">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center justify-center gap-4">
          {title === 'Verification Status' && (
            <div className="flex items-center justify-center w-6 h-6  rounded-[8.9px] bg-[#2BBA4F1A]">
              <LuShield color="#5EC069" />
            </div>
          )}
          {title === 'Active Applications' && (
            <div className="flex items-center justify-center w-6 h-6  rounded-[8.9px] bg-[#E5A23C1A]">
              <PiHouseLineDuotone color="#E5A23C" />
            </div>
          )}
          {title === 'Co-Space Requests' && (
            <div className="flex items-center justify-center w-6 h-6  rounded-[8.9px] bg-[#0673EF1A]">
              <PiUsersThreeBold color="#232AAB" />
            </div>
          )}
          {title === 'Next Payment' && (
            <div className="flex items-center justify-center w-6 h-6  rounded-[8.9px] bg-[#E5A23C1A]">
              <MdOutlineEventNote color="#E5A23C" />
            </div>
          )}

          <h4 className="text-[12px] text-[#2F3639] font-light">{title}</h4>
        </div>
        {status && (
          <div
            className={`flex items-center gap-1 text-[8px] font-medium px-2 py-1 rounded-full ${statusColor}`}
          >
            {status === 'Pending' && <IoCheckmarkSharp size={8} />}
            {status === 'active' && <IoCheckmarkSharp />}
            {status === 'pending' && <IoCheckmarkSharp />}
            {status}
          </div>
        )}
      </div>
      <h2 className="font-medium texxt-[#2F3639]">{value}</h2>
      {subtext && (
        <p className="text-[10px] text-[#676C6C] font-light mt-1">{subtext}</p>
      )}
    </div>
  );
};

export default OverviewCard;
