// import React from 'react';
import { MessageChatImage1 } from '../../../assets/images';

const ChatCard: React.FC = () => {
  return (
    <div className="w-full py-1 border-b border-[#D8E3F8] mb-4  cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 sm:w-[61px] sm:h-[61px] rounded-full overflow-hidden">
            <img src={MessageChatImage1} alt="MessageChatImage1" />
          </div>
          <div>
            <h2 className="text-[12px] xl:text-[24px] font-semibold">
              Ezulike Praise
            </h2>
            <p className="text-[12px] xl:text-[16px]">
              Hi Admin, i’m Testimony i n...
            </p>
          </div>
        </div>
        <div className="w-fit flex flex-col justify-center items-center gap-2">
          <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#002B80] text-white flex justify-center items-center ">
            <p className="text-[12px] sm:text-[16px]">3</p>
          </div>
          <div className="text-[12px] sm:text-[16px]">3:00 pm</div>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
