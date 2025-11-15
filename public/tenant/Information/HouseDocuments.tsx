import React, { useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import Overview from './Overview';
import LegalInfo from './LegalInfo';
import InformationHistory from './InformationHistory';
import Status from './Status';
import AllDocuments from './AllDocuments';
import DocumentUpload from './DocumentUpload';
import LeaseAgreement from './LeaseAgreement';
import LegalDocs from './LegalDocs';
import MaintenanceRecords from './MaintenanceRecords';
import Insurance from './Insurance';

type TabOption =
  | 'all documents'
  | 'lease agreement'
  | 'legal docs'
  | 'maintenance records'
  | 'insurance';

const HouseDocuments: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabOption>('all documents');
  const tabs: TabOption[] = [
    'all documents',
    'lease agreement',
    'legal docs',
    'maintenance records',
    'insurance',
  ];

  return (
    <main className="space-y-5">
      <div className="flex flex-row">
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-col justify-center items-center">
            <div className="w-full mt-3 flex gap-4 flex-wrap">
              <div>
                <h1 className="font-bold text-[18px] text-[#2F3639]">
                  House Documents
                </h1>
                <p className="font-light text-[12px] text-[#676C6C]">
                  Manage property documents with AI-powered completeness and
                  validity checking
                </p>
              </div>
            </div>
          </div>
          <div>
            <DocumentUpload />
          </div>
          <>
            <div className="w-full max-w-[901px] flex">
              <div className="w-full min-w-[736px] h-[42px] bg-[#2C35D914] rounded-[10px]">
                <div className="flex w-full justify-between items-center py-1 px-2 gap-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setSelectedTab(tab)}
                      className={`text-[#6B7280] h-8 text-[12px] capitalize transition-colors flex items-center ${
                        selectedTab === tab
                          ? 'bg-white w-[30%] rounded-lg border-transparent flex justify-center items-center'
                          : 'hover:text-gray-800'
                      }`}
                    >
                      {tab}
                      <div className="w-4 h-4 text-[12px] rounded-full bg-[#2BBA4FCC] text-white flex justify-center items-center mx-1">
                        2
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <input
                type="text"
                placeholder="search"
                className="ml-2 pl-3 rounded-[10px]"
              />
            </div>
            <div className="mt-6 max-w-[901px]">
              {selectedTab === 'all documents' && <AllDocuments />}
              {selectedTab === 'lease agreement' && <LeaseAgreement />}
              {selectedTab === 'legal docs' && <LegalDocs />}
              {selectedTab === 'maintenance records' && <MaintenanceRecords />}
              {selectedTab === 'insurance' && <Insurance />}
            </div>
          </>
        </div>
      </div>
    </main>
  );
};

export default HouseDocuments;