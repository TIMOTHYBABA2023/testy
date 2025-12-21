import React, { useState } from 'react';
import Inbox from './Inbox';
import Sent from './Sent';
import AiChat from './AIChat';

type TabOption = 'Inbox' | 'Sent' | 'AI Chat';

const TenantMessage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabOption>('Inbox');
  const tabs: string[] = ['Inbox', 'Sent', 'AI Chat'];

  return (
    <div className="flex flex-col gap-5">
      <div className="max-w-[1192px] py-1 bg-[#2C35D914] rounded-[10px] shadow-sm">
        <div className={`flex w-full justify-between py-1 px-3`}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab as TabOption)}
              className={`text-[#6B7280] h-8 text-sm transition-colors ${
                selectedTab === tab
                  ? 'bg-white w-[30%] rounded-lg border-transparent'
                  : 'hover:text-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="max-w-[1192px]">
        <div className="mx-auto space-y-6">
          {selectedTab === 'Inbox' && <Inbox />}
          {selectedTab === 'Sent' && <Sent />}
          {selectedTab === 'AI Chat' && <AiChat />}
        </div>
      </div>
    </div>
  );
};

export default TenantMessage;
