import React from 'react';
import PropertyHistoryCard from './PropertyHistoryCard';
import { historyItems } from './data';

const InformationHistory: React.FC = () => {
  return (
    <div className="border border-[#DEDEE3] rounded-[10px] px-5 py-[32px]">
      <div>
        <h2 className="font-semibold">Property History</h2>
      </div>
      <p className="font-light text-[10px]">
        Timeline of Important events and changes
      </p>
      <div className="w-full">
        {historyItems.map((item, index) => (
          <PropertyHistoryCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default InformationHistory;
