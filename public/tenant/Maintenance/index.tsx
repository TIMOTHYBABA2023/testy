import React, { useState } from 'react';
import RequestList from './RequestList';
import { sampleData } from './data';
import RequestForm from './RequestForm';

type TabOption = 'My Request' | 'New Request';

const Maintenance: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabOption>('My Request');
  const tabs: string[] = ['My Request', 'New Request'];

  return (
    <div className="flex flex-col gap-5">
      <div className="max-w-[1192px] py-1 bg-[#2C35D914] rounded-[10px] shadow-sm">
        <div className={`flex w-full justify-between py-1 px-3`}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab as TabOption)}
              className={`h-8 text-sm transition-colors ${
                selectedTab === tab
                  ? 'bg-white w-[50%] text-[#232AAB] rounded-lg border-transparent'
                  : 'hover:text-gray-800 text-[#6B7280]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="max-w-[1192px]">
        <div className="mx-auto space-y-6">
          {selectedTab === 'My Request' && (
            <div className="container mx-auto">
              <RequestList requests={sampleData} />
            </div>
          )}
          {selectedTab === 'New Request' && <RequestForm />}
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
