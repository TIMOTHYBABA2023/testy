import React from 'react';

interface SavedSearchCardProps {
  title: string;
  matches: string;
  updated: string;
}

const SavedSearchCard: React.FC<SavedSearchCardProps> = ({
  title,
  matches,
  updated,
}) => {
  return (
    <div className="flex justify-between items-center bg-white border border-[#DEDEE3] rounded-[10px] p-4 shadow-sm">
      <div>
        <h3 className="font-medium text-[#2F3639] text-xs">{title}</h3>
        <p className="text-[10px] text-[#7D8A9B] font-light mt-1">
          {matches} • Updated {updated}
        </p>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 text-[10px] text-[#2C2E33] font-medium bg-[#FCFCFC] border border-[#E2E6E9] rounded-[10px]">
          View Matches
        </button>
        <button className="px-4 py-2 text-[10px] text-[#2C2E33]">Delete</button>
      </div>
    </div>
  );
};

export default SavedSearchCard;
