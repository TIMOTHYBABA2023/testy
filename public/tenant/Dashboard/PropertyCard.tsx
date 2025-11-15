import React from 'react';
import type { Property } from './types';
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { LuBath, LuBedDouble } from 'react-icons/lu';
import { MdLock } from 'react-icons/md';

interface PropertyCardProps {
  property: Property;
  onUnlockClick: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onUnlockClick,
}) => {

  return (
    <div className="w-[374px] bg-white rounded-[9px] border border-[#E5E8EB] shadow-sm overflow-hidden flex flex-col">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="h-48 w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-between p-3">
          <div className="flex justify-between">
            <div className="rounded-[7px] w-[28px] h-[28px] flex justify-center items-center bg-[#E5E8EB]">
              {property.like ? (
                <FaHeart color="#EF4343" size={12} />
              ) : (
                <CiHeart size={12} />
              )}
            </div>

            <span
              className={`text-xs px-2 py-1 rounded-full ${
                property.status === 'Available'
                  ? 'bg-[#E7FDF0] text-green-600 border border-[#5EC069]'
                  : property.status === 'Pending'
                  ? 'text-[#F6AD46] bg-[#FEF4E7] border border-[#E5A23C]'
                  : 'bg-gray-300 text-gray-600'
              }`}
            >
              {property.status}
            </span>
          </div>

          {property.verified && (
            <div className="flex justify-start">
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                Verified
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xs text-[#2F3639]">
            {property.title}
          </h3>
          <p className="text-[#0673EF] font-semibold text-xs">
            {property.price}
          </p>
        </div>
        <div className="flex gap-1 items-center justify-between">
          <div className="flex gap-1 items-center">
            <IoLocationOutline />
            <p
              className={`text-sm text-[#7D8A9B] font-light transition ${
                property.locked ? 'blur-sm select-none' : ''
              }`}
            >
              {property.location}
            </p>
            {property.locked && <MdLock />}
          </div>

          {property.locked && (
            <div
              className="bg-[#EDEFF3] rounded-[8px] py-[2px] px-[7px] cursor-pointer"
              onClick={onUnlockClick}
            >
              <p className="text-[#2F3639] font-medium text-[8px]">
                Unlock with tokens
              </p>
            </div>
          )}
        </div>

        <div className="text-xs text-gray-500 flex gap-4">
          <span className="flex gap-1 items-center">
            <LuBedDouble />
            {property.beds} bed
          </span>
          <span className="flex gap-1 items-center">
            <LuBath />
            {property.baths} bath
          </span>
          <span>{property.size}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {property.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}

          {property.tags.length > 3 && (
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
              +{property.tags.length - 3} more
            </span>
          )}
        </div>

        <div className="flex justify-between mt-auto pt-3">
          <button className="text-white bg-[#232AAB] text-[12px] rounded-[7px] w-[48%] font-medium">
            View Details
          </button>
          <button className="bg-[#FAFAFA] border border-[#E5E8EB] text-[9px] rounded-[7px]  w-[48%] h-[28px] text-sm">
            Book Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
