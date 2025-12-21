import React from 'react';
import type { PropertyOwner } from './types';
import { Button } from '../maintenance/Button';
import { Tim } from '../../assets/images';
import { MdOutlineEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { GoProjectRoadmap } from 'react-icons/go';

interface PropertyOwnerCardProps {
  owner: PropertyOwner;
}

export const PropertyOwnerCard: React.FC<PropertyOwnerCardProps> = ({
  owner,
}) => {
  return (
    <div className="flex flex-row flex-wrap gap-3 w-full">
      <div className="flex-1 min-w-[300px] max-w-[384px] border border-gray-200 rounded-lg p-4">
        <div className="flex items-start gap-3 mb-4">
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <img
              src={Tim}
              alt="tim image"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-medium text-xs text-[#2C2E33]">{owner.name}</h4>
            <div
              className={`px-2 py-1 rounded-full text-xs flex items-center w-fit ${
                owner.verified === true
                  ? 'bg-[#232AAB] text-white'
                  : 'bg-[#E7EAEF] text-[#2F3639]'
              }`}
            >
              {owner.verified ? 'Verified' : 'Pending'}
            </div>
          </div>
        </div>

        <div className="space-y-2 text-sm mb-4">
          <div className="flex gap-1 items-center text-[#676C6C] text-[10px] font-light">
            <MdOutlineEmail />
            <p>{owner.email}</p>
          </div>
          <div className="flex items-center gap-1">
            <BsTelephone />
            <span className="text-[#676C6C] text-[10px] font-light">
              {owner.phone}
            </span>
          </div>
          <div className="flex items-center gap-1 text-[#676C6C] text-[10px] font-light">
            <GoProjectRoadmap />
            <span className="text-[#676C6C] text-[10px] font-light">
              {owner.projectCount} Projects
            </span>
          </div>
        </div>

        <Button variant="outline" size="sm" className="w-full">
          View Details
        </Button>
      </div>
    </div>
  );
};
