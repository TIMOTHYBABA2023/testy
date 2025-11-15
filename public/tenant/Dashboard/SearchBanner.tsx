import React from 'react';
import { CiFilter, CiSearch } from 'react-icons/ci';

const SearchBanner: React.FC = () => (
  <div className="bg-gradient-to-r from-[#1173D4] to-[#5EC069] rounded-2xl text-white p-6 mt-6 flex flex-col">
    <h2 className="text-[18px] font-bold mb-2">Find Your Dream Home</h2>
    <p className="text-[12px] font-light mb-4">
      AI-powered search with personalized recommendations
    </p>

    <div className="w-full flex flex-wrap items-center gap-4">
      <div className="flex items-center w-full max-w-[368px] border-[0.74px] rounded-[7px] border-[#FFFFFF33] gap-2">
        <CiSearch size={12} className="mx-2" />
        <input
          type="text"
          placeholder="Search by location, property type, or features..."
          className="flex-1 h-[30px] rounded-[7px] bg-transparent outline-none text-white placeholder:text-[#FFFFFF83] placeholder:text-[10px] text-sm"
        />
      </div>
      <div className="w-[30px] h-[30px] flex bg-white rounded-[7px] items-center justify-center">
        <CiFilter size={16} color="#1D2530" />
      </div>
      <button className="bg-[#232AAB] text-white rounded-[7px] py-[6px] h-[30px] px-[12px] text-[10px]">
        Search Now
      </button>
    </div>
  </div>
);

export default SearchBanner;
