import React from 'react';
import SavedSearchCard from './SavedSearchCard';

const SavedSearch: React.FC = () => {
  return (
    <div className="p-6 bg-[#F8F9FB] min-h-screen">
      {/* Saved Searches */}
      <div className="bg-white border border-[#DEDEE3] rounded-[10px] p-6 mb-8">
        <h2 className="text-[13px] font-semibold text-[#2F3639]">
          Saved Searches
        </h2>
        <p className="text-xs text-[#7D8A9B] font-light mt-1 mb-4">
          Get automatic alerts when new properties match your saved searches
        </p>

          <div className="flex flex-col gap-4">
            <SavedSearchCard
              title="Downtown 2BR under NGN5,860,000"
              matches="12 new matches"
              updated="2 hours ago"
            />
            <SavedSearchCard
              title="Pet-friendly studios"
              matches="8 new matches"
              updated="1 day ago"
            />
          </div>
      </div>
    </div>
  );
};

export default SavedSearch;
