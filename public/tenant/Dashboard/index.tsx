import React, { useState } from 'react';
import OverviewCard from './OverviewCard';
import SearchBanner from './SearchBanner';
import PropertyCard from './PropertyCard';
import QuickActionCard from './QuickActionCard';
import { properties } from './data';
import { Users, Calendar, TrendingUp, Search } from 'lucide-react';
import type { Property } from './types';
import UnlockAddressModal from './UnlockAddressModal';
import ResponseModal from './ResponseModal';

const TenantDashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [showUnlock, setShowUnlock] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  const handleConfirm = () => {
    setShowUnlock(false);
    // simulate success
    setTimeout(() => setShowResponse(true), 500);
  };

  const handleUnlockClick = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-8">
      <h1 className="text-[#2F3639] font-semibold text-[14px]">
        Your Overview
      </h1>
      <div className="flex flex-wrap gap-4">
        <OverviewCard
          title="Verification Status"
          value="Verified"
          status="Complete"
          statusColor="bg-[#E7FDF0] text-[#5EC069] border border-[#2BBA4F1A]"
          subtext="Identity & Income verified"
        />
        <OverviewCard
          title="Active Applications"
          value="3"
          status="Pending"
          statusColor="bg-[#FEF4E7] text-[#E5A23C] border border-[#E5A23C]"
          subtext="2 pending responses"
        />
        <OverviewCard
          title="Co-Space Requests"
          value="1"
          status="Active"
          statusColor="bg-[#EBF4FE] text-[#232AAB] border border-[#1173D433]"
          subtext="1 new match available"
        />
        <OverviewCard
          title="Next Payment"
          value="Dec 1"
          status="Pending"
          statusColor="bg-[#FEF4E7] text-[#E5A23C] border border-[#E5A23C]"
          subtext="Rent due in 5 days"
        />
      </div>

      <SearchBanner />

      <section>
        <h2 className="text-sm text-[#2F3639] font-semibold">
          Recommended for You
        </h2>
        <div className="flex justify-between items-center mb-4">
          <p className="text-[12px] text-[#7D8A9B] font-light">
            Curated based on your preferences and search history
          </p>
          <button className="text-sm text-gray-600 border rounded-full px-4 py-1 hover:bg-gray-100">
            View All Properties
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onUnlockClick={() => handleUnlockClick(property)}
            />
          ))}
          {/* Unlock Modal */}
          <UnlockAddressModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={() => {
              if (selectedProperty) {
                alert(`Unlocked address for ${selectedProperty.title}`);
              }
              setIsModalOpen(false);
            }}
            propertyName={selectedProperty?.title || ''}
            tokenCost={10}
            balance={25}
          />
          {/* Success Modal */}
          <ResponseModal
            isOpen={showResponse}
            onClose={() => setShowResponse(false)}
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <QuickActionCard title="Find Homes" icon={<Search />} />
          <QuickActionCard title="Co-Space" icon={<Users />} />
          <QuickActionCard title="Schedule Tour" icon={<Calendar />} />
          <QuickActionCard title="Market Insights" icon={<TrendingUp />} />
        </div>
      </section>
    </div>
  );
};

export default TenantDashboard;
