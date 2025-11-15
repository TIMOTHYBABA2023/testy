import React from 'react';
import { Phone } from 'lucide-react';

const EmergencyHelpCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 border-l-4 border-red-500 mt-4">
      <h3 className="text-[#D80027] font-medium text-[16px] flex items-center gap-2 mb-1">
        <Phone size={16} /> Emergency Legal Help
      </h3>
      <p className="text-xs text-[#676C6C] mb-3">
        For urgent legal matters outside business hours
      </p>
      <div className="text-center">
        <p className="text-[#2F3639] font-medium text-[14px]">
          (555) 123-LEGAL
        </p>
        <p className="text-xs text-[#676C6C] font-light mb-3">
          24/7 Emergency Hotline
        </p>
        <button className="bg-[#FCFCFC] text-[#D80027] border-[0.5px] border-[#D80027] rounded-[5px] px-[17px] py-[7px] text-[10px] w-full flex items-center gap-1 justify-center">
          <Phone size={16} />
          Call Emergency Line
        </button>
      </div>
    </div>
  );
};

export default EmergencyHelpCard;
