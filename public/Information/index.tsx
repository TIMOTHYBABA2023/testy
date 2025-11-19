import React, { useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import Overview from './Overview';
import LegalInfo from './LegalInfo';
import InformationHistory from './InformationHistory';
import Status from './Status';
import SidebarMenu from './SidebarMenu';
import HouseDocuments from './HouseDocuments';
import Agreements from './Agreements';
import AskForLegal from './AskForLegal';
import NoticeBoard from './NoticeBoard';

type TabOption = 'overview' | 'legal info' | 'history' | 'status';
type SidebarOption =
  | 'Property Info'
  | 'House Documents'
  | 'Notice Board'
  | 'Agreements'
  | 'Ask for Legal';

const Information: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabOption>('overview');
  const [activeSidebar, setActiveSidebar] =
    useState<SidebarOption>('Property Info');

  const tabs: TabOption[] = ['overview', 'legal info', 'history', 'status'];

  return (
    <main className="space-y-5">
      <div className="flex flex-row">
        <div className="mr-6 mt-3">
          <SidebarMenu active={activeSidebar} setActive={setActiveSidebar} />
        </div>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-col justify-center items-center">
            {activeSidebar === 'Property Info' && (
              <div className="w-full mt-3 flex gap-4 flex-wrap">
                <div>
                  <h1 className="font-bold text-[18px] text-[#2F3639]">
                    Property Information
                  </h1>
                  <p className="font-light text-[12px] text-[#676C6C]">
                    Centralized information hub for all your properties.
                  </p>
                </div>
                <div className="w-full mt-3 flex gap-4 flex-wrap">
                  <div className="flex flex-col gap-6 w-[418px] justify-between border border-[#232AAB] bg-white rounded-[10px] py-6 px-[14px]">
                    <div className="flex gap-4 w-full justify-between">
                      <div>
                        <p className="font-semibold text-[16px] text-[#2F3639]">
                          Sunset Villa #204
                        </p>
                        <div className="flex gap-1 items-center">
                          <IoLocationOutline />
                          <p className="text-[#676C6C] text-[13px] font-light">
                            1234 Ocean Drive, Lekki phase 1
                          </p>
                        </div>
                      </div>
                      <button className="w-fit h-[22px] bg-[#5EC069] rounded-[20px] px-[12px] items-center">
                        <p className="text-white text-[12px] font-bold">
                          Occupied
                        </p>
                      </button>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <div className="w-[50%]">
                          <p className="text-[#676C6C] text-[12px] font-light">
                            Rent:
                          </p>
                          <p className="text-[#2F3639] text-[12px] font-medium">
                            N5,657,896/mo
                          </p>
                        </div>
                        <div>
                          <p className="text-[#676C6C] text-[12px] font-light">
                            Tenant:
                          </p>
                          <p className="text-[#2F3639] text-[12px] font-medium">
                            Sarah Johnson
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 w-[418px] justify-between border border-[#DEDEE3] bg-white rounded-[10px] py-6 px-[14px]">
                    <div className="flex gap-4 w-full justify-between">
                      <div>
                        <p className="font-semibold text-[16px] text-[#2F3639]">
                          Garden Heights #101
                        </p>
                        <div className="flex gap-1 items-center">
                          <IoLocationOutline />
                          <p className="text-[#676C6C] text-[13px] font-light">
                            5678 Park Avenue, Miami, FL 33142
                          </p>
                        </div>
                      </div>
                      <button className="w-fit h-[22px] bg-[#E5A23C] rounded-[20px] px-[12px] items-center">
                        <p className="text-white text-[12px] font-bold">
                          Vacant
                        </p>
                      </button>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <div className="w-[50%]">
                          <p className="text-[#676C6C] text-[12px] font-light">
                            Rent:
                          </p>
                          <p className="text-[#2F3639] text-[12px] font-medium">
                            N5,657,896/mo
                          </p>
                        </div>
                        <div>
                          <p className="text-[#676C6C] text-[12px] font-light">
                            Tenant:
                          </p>
                          <p className="text-[#2F3639] text-[12px] font-medium">
                            Vacant
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {activeSidebar === 'Property Info' && (
            <>
              <div className="max-w-[901px] h-[42px] bg-[#2C35D914] rounded-[10px] shadow-sm">
                <div className="flex w-full justify-between py-1 px-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setSelectedTab(tab)}
                      className={`text-[#6B7280] h-8 text-sm capitalize transition-colors ${
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

              <div className="mt-6 max-w-[901px]">
                {selectedTab === 'overview' && <Overview />}
                {selectedTab === 'legal info' && <LegalInfo />}
                {selectedTab === 'history' && <InformationHistory />}
                {selectedTab === 'status' && <Status />}
              </div>
            </>
          )}

          {activeSidebar === 'House Documents' && (
            <div>
              <HouseDocuments />
            </div>
          )}

          {activeSidebar === 'Notice Board' && (
            <div>
              <NoticeBoard />
            </div>
          )}

          {activeSidebar === 'Agreements' && (
            <div>
              <Agreements />
            </div>
          )}

          {activeSidebar === 'Ask for Legal' && (
            <div>
              <AskForLegal />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Information;
