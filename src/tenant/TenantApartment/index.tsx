import { useState } from 'react';
import FindHome from './FindHome';
import Favorites from './Favorites';
import SavedSearch from './SavedSearch';
import CospaceSharingTab from './CospaceSharingTab';

type TabOption =
  | 'Find a home'
  | 'My Favorites'
  | 'Saved Searches'
  | 'Co-space sharings';

const TenantApartment = () => {
  const [selectedTab, setSelectedTab] = useState<TabOption>('Find a home');

  const tabs: TabOption[] = [
    'Find a home',
    'My Favorites',
    'Saved Searches',
    'Co-space sharings',
  ];

  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-3 w-full">
        <>
          <div className="max-w-[1192px] py-1 bg-[#2C35D914] rounded-[10px] shadow-sm">
            <div className={`flex w-full justify-between py-1 px-3`}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
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
          <div className="mt-6 max-w-[1192px]">
            {selectedTab === 'Find a home' && <FindHome />}
            {selectedTab === 'My Favorites' && <Favorites />}
            {selectedTab === 'Saved Searches' && <SavedSearch />}
            {selectedTab === 'Co-space sharings' && <CospaceSharingTab />}
          </div>
        </>
      </div>
    </div>
  );
};

export default TenantApartment;
