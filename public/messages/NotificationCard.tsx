import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { MdKeyboardArrowRight } from 'react-icons/md';

const NotificationCard: React.FC = () => {
  return (
    <div className="w-full flex flex-col rounded-[15px] border-[2px] border-[#3232324D] p-4">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="w-[25px] h-[25px] flex items-center justify-center bg-[#232AAB] rounded-full">
            <HiOutlineMail color="white" />
          </div>
          <p className="font-semibold">User Notification</p>
        </div>
        <MdKeyboardArrowRight size={24} color="#B0B0B0" />
      </div>
      <p className='mt-4 text-[12px] text-[#202124] font-light'>
        Exciting news! Evelyn has just joined our community as a new user. She
        is located at the vibrant city of Owerri. She's on a quest to find her
        perfect home, with a keen interest in both.
      </p>
      <div>
        <button><p className='text-[#002B80] text-[12px] font-medium'>Read More</p></button>
      </div>
    </div>
  );
};

export default NotificationCard;
