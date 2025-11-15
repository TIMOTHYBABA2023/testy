import React, { useState } from 'react';
import { CiFilter } from 'react-icons/ci';
import { FaWandMagicSparkles } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { properties } from '../Dashboard/data';
import PropertyCard from '../Dashboard/PropertyCard';
import UnlockAddressModal from '../Dashboard/UnlockAddressModal';
import type { Property } from '../Dashboard/types';
import ResponseModal from '../Dashboard/ResponseModal';

const FindHome: React.FC = () => {
  const aiPowered = properties.filter((property) => property.aipowered);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [showResponse, setShowResponse] = useState(false);
  const firstThree = properties.slice(0, 3);

  // Called when "Pay Tokens" is clicked in UnlockAddressModal
  const handleConfirm = () => {
    setIsModalOpen(false); // close unlock modal first
    setTimeout(() => setShowResponse(true), 400); // open response modal
  };
  // Open Unlock Modal when a property is clicked
  const handleUnlockClick = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };


  return (
    <div>
      <div>
        <div className="w-full bg-white border border-[#DEDEE3] flex items-center py-2 px-2 gap-1 rounded-[8px] h-[64px]">
          <div className="w-[76%] rounded-[7px] bg-[#FAFAFA] border border-[#808A9A33] px-2 h-[30px] flex items-center gap-2">
            <IoSearch />
            <input
              type="text"
              className="w-full outline-none bg-transparent text-[#808A9AB2] text-[10px] placeholder:font-light"
              placeholder="Search by location, property name, or keyword..."
            />
          </div>
          <div className="bg-[#FAFAFA] flex items-center justify-center w-[30px] h-[30px] rounded-[7px]">
            <CiFilter size={16} />
          </div>
          <button className="bg-[#232AAB] rounded-[7px] py-2 text-white text-[10px] w-[20%] flex items-center justify-center gap-2 ">
            <FaWandMagicSparkles />
            Ai Recommendation
          </button>
        </div>
        <div className="border border-[#DEDEE3] p-5 rounded-[10px] my-4">
          {aiPowered.length > 0 && (
            <section className="flex flex-col gap-4">
              <div>
                <h2 className="text-[14px] text-[#2F3639] font-semibold flex items-center gap-2 ">
                  <FaWandMagicSparkles color="#232AAB" />
                  AI Powered Listings
                </h2>
                <h2 className="text-[12px] text-[#7D8A9B] font-light mb-3">
                  Based on your preferences and search history
                </h2>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                {aiPowered.map((property) => (
                  <PropertyCard key={property.id} property={property}  onClick={() => handleUnlockClick(property)} />
                ))}
              </div>
            </section>
          )}
        </div>
        <div className="mt-6">
          <h2 className="text-[16px] text-[#2F3639] font-semibold mb-3">
            All Properties({properties.length})
          </h2>

          <div className="max-h-[700px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <div className="flex flex-wrap items-center gap-4">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property}  onClick={() => handleUnlockClick(property)} />
              ))}
            </div>
          </div>
        </div>
        <UnlockAddressModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        propertyName={selectedProperty?.title || ''}
        tokenCost={10}
        balance={25}
      />

      {/* Success Modal */}
      <ResponseModal
        isOpen={showResponse}
        onClose={() => setShowResponse(false)}
        message="Address unlocked successful"
      />
      </div>
    </div>
  );
};

export default FindHome;
