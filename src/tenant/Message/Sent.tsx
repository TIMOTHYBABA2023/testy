import React from 'react';

const Sent: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-xl">
      <h2 className="text-[14px] text-[#2F3639] font-semibold mb-2">
        Sent Messages
      </h2>
      <p className="text-[#2F3639] text-[10px] mb-4">
        Messages you’ve sent to property managers and owners
      </p>

      <div className="flex justify-between items-start border border-[#DEDEE3] rounded-[10px] p-4">
        <div className="flex gap-2">
          <div>
            <img
              src={'https://images.unsplash.com/photo-1560185127-6ed189bf02f4'}
              alt={'sender image'}
              className="w-6 h-6 rounded-full bg-cover"
            />
          </div>
          <div>
            <p className="font-medium text-[#2F3639] text-[12px]">
              To: Property Manager
            </p>
            <p className="text-[10px] font-light text-[#2F3639]">
              Re: Maintenance Req
            </p>
            <p className="text-[10px] font-light text-[#676C6C]">
              Thank you for scheduling the maintenance visit...
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs text-gray-500 mb-1">Yesterday</p>
          <span className="text-[8px] font-medium text-[#2C2E33] bg-[#E2E3F0] px-3 py-[2px] rounded-full">
            Sent
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sent;
