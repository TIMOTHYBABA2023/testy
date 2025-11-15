import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { GrGroup } from 'react-icons/gr';
import { properties } from '../Dashboard/data';
import PropertyCard from '../Dashboard/PropertyCard';
import type { Property } from '../Dashboard/types';
import UnlockAddressModal from '../Dashboard/UnlockAddressModal';
import ResponseModal from '../Dashboard/ResponseModal';

const CospaceSharingTab: React.FC = () => {
    const sharing = properties.filter((property) => property.sharing);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
    const [showResponse, setShowResponse] = useState(false);  

    const handleConfirm = () => {
      setIsModalOpen(false); 
      setTimeout(() => setShowResponse(true), 400); 
    };
    const handleUnlockClick = (property: Property) => {
      setSelectedProperty(property);
      setIsModalOpen(true);
    };

  return (
    <div className="bg-white border border-[#DEDEE3] rounded-[10px] p-6 mb-8">
      <h2 className="text-[13px] font-semibold text-[#2F3639]">
        Co-Space Sharing
      </h2>
      <p className="text-xs text-[#7D8A9B] font-light mt-1 mb-4">
        Find roommates or sublet your space{' '}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
          <div className="text-3xl mb-3 text-[#232AAB] bg-[#232AAB1A] rounded-[9px] p-2">
            <CiSearch size={12} />
          </div>
          <h3 className="text-[16px] font-medium text-[#2F3639]">
            Find Co-Space
          </h3>
          <p className="text-[10px] text-[#676C6C] mt-1 mb-4">
            Browse available shared living spaces
          </p>
          <button className="w-full rounded-[7px] py-2 text-[10px] font-medium bg-[#E2E6E9] ">
            Browse Listing
          </button>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
          <div className="text-3xl mb-3 text-[#232AAB] bg-[#232AAB1A] rounded-[9px] p-2">
            <GrGroup size={12} />
          </div>
          <h3 className="text-[16px] font-medium text-[#2F3639]">
            Offer a Co-Space
          </h3>
          <p className="text-[10px] text-[#676C6C] mt-1 mb-4">
            List your space for sharing
          </p>
          <button className="w-full py-2 text-white text-[10px] rounded-[7px] font-medium bg-[#232AAB]">
            List Your Space
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-6">
          {sharing.length > 0 && (
                  <div className="border border-[#DEDEE3] p-5 rounded-[10px] my-4">

            <section className="flex flex-col gap-4">
              <div>
              <h3 className="font-semibold text-sm mb-4">Active Co-Space Listings</h3>

                <h2 className="text-[12px] text-[#7D8A9B] font-light mb-3">
                  Based on your preferences and search history
                </h2>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                {sharing.map((property) => (
                  <PropertyCard key={property.id} property={property}  onClick={() => handleUnlockClick(property)} />
                ))}
              </div>
            </section>
            </div>

          )}
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
  );
};

export default CospaceSharingTab;
