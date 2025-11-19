import React, { useState } from 'react';
import DropdownButton from './DropDownButton';

const Overview: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleToggle = (key: string) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const sections = [
    { key: 'basicInfo', label: 'Basic Information' },
    { key: 'finOver', label: 'Financial Overview' },
    { key: 'amenFeat', label: 'Amenities & Features' },
  ];
  return (
    <div>
      <div className="flex flex-wrap justify-between">
        <div className="w-[62%] h-[370px] border border-[#DEDEE3] rounded-[10px] px-5 py-[14px]">
          <div>
            <p className="text-[#2C2E33] font-semibold">Property Details</p>
          </div>
          {sections.map(({ key, label }) => (
            <div className="w-full mt-2" key={key}>
              <DropdownButton
                label={label}
                onClick={() => handleToggle(key)}
                isOpen={openDropdown === key}
              />
            </div>
          ))}
        </div>

        <div className="w-[36%] h-[370px] border border-[#DEDEE3] rounded-[10px] px-5 py-[14px] flex flex-col gap-3">
          <div>
            <p className="text-[#2C2E33] font-semibold">Current tenant</p>
          </div>
          <div>
            <p className="text-[#676C6C] font-light text-[12px]">Tenant name</p>
            <p className="text-[#2F3639] font-medium text-[12px]">
              Sarah Johnson
            </p>
          </div>
          <div>
            <p className="text-[#676C6C] font-light text-[12px]">
              Lease End Date
            </p>
            <p className="text-[#2F3639] font-medium text-[12px]">
              Aug 31, 2025
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <p className="text-[#676C6C] font-light text-[12px]">
              Payment status
            </p>
            <div className="w-fit h-[22px] bg-[#5EC069] rounded-[20px] px-[12px] items-center">
              <p className="text-white text-[12px] font-bold">Current</p>
            </div>
          </div>
          <button className="border border-[#E2E6E9] rounded-[10px]">
            <p>View Tenant Profile</p>
          </button>
          <button className="border border-[#E2E6E9] rounded-[10px]">
            <p>View Lease Agreement</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
