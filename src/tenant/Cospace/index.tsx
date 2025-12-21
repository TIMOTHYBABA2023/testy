import React from 'react';
import CoSpaceList from './CoSpaceList';
import { spaces } from './data';
import { CiSearch } from 'react-icons/ci';

const CoSpace: React.FC = () => {
  return (
    <div className="min-h-screen">
      <header className="bg-[#1173D4] text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-[18px] font-bold">Co-Space Sharing</h1>
          <p className="text-xs font-light">
            Share your space, discover new communities, and connect with
            neighbors
          </p>
          <div className="flex gap-3 mt-3">
            <button
              type="button"
              className="text-[#2C2E33] bg-[#FFFFFF] text-[10px] px-3 py-2 rounded-[7px]"
            >
              Add your space
            </button>
            <button
              type="button"
              className="bg-[#232AAB] text-[10px] px-6 py-2 rounded-[7px]"
            >
              Submit Request
            </button>
          </div>
        </div>
      </header>
      <div className="flex items-center py-4 px-4 bg-white">
        <div className="w-[30%] flex gap-2 h-[29px] items-center pl-2 border border-[#808A9A33] bg-[#FAFAFA] text-[#808A9AB2] rounded-md">
          <CiSearch size={12} />
          <input
            placeholder="Search messages..."
            className="placeholder:text-[10px] bg-transparent"
          />
        </div>
      </div>
      <div className="container mx-auto p-6">
        {/* <div className="flex justify-between mb-8">
          <div>
            <span className="text-lg font-semibold">24 Active Spaces</span>
            <span className="ml-4 text-lg font-semibold">
              152 Community Members
            </span>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-lg font-semibold">4.8 Avg Rating</span>
          </div>
        </div> */}
        <div className="my-2">
          <h1 className="text-[#0D0D12] text-[14px] font-semibold">
            Available Spaces
          </h1>
          <p className="text-[#0D0D12] text-[12px] font-light">
            Discover and join co-spaces in your community
          </p>
        </div>
        <CoSpaceList spaces={spaces} />
      </div>
    </div>
  );
};

export default CoSpace;
