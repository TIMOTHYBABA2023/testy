import React from 'react';
import type { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h4 className="font-light text-sm text-[#2F3639] mb-1">{property.name}</h4>
      <p className="text-[10px] text-[#676C6C]">{property.address}</p>
      <div>
        <div className="flex items-center gap-1 text-[#676C6C] text-[10px]">
          <span className="">Manager:</span>
          <span className="font-light">{property.manager}</span>
        </div>
        <div className="flex items-center  gap-1">
          <span className="text-[#676C6C] font-light text-[10px]">Phone:</span>
          <span className="font-light text-[#676C6C] text-[10px]">{property.phone}</span>
        </div>
      </div>
    </div>
  );
};
