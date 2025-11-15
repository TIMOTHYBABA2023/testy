import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MessageChatImage2, MessageChatImage3 } from '../../../assets/images';
import { FiDownload } from 'react-icons/fi';
import { BsFillSendFill } from 'react-icons/bs';

const ChatBox: React.FC = () => {
  return (
    <div className="w-full mt-5 mb-4">
      <div className="w-full flex items-center px-1 gap-2 mb-6 cursor-pointer">
        <MdKeyboardArrowLeft size={20} />
        <div className="w-[40px] h-[40px]">
          <img src={MessageChatImage2} alt="MessageChatImage2" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-[12px] xl:text-[20px]">Aderonke</p>
          <p className="text-[10px] xl:text-[12px]  text-[#B0B0B0]">
            +234 7056 8642 7811
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center my-5">
        <div className="bg-[#ECF1F4] w-[86px] h-[31px] flex items-center justify-center rounded-[20px]">
          <p className="text-[12px]">Today</p>
        </div>
      </div>
      <div>
        <div className="w-full flex items-start gap-3 mb-4">
          <div className="w-[40px] h-[40px]">
            <img src={MessageChatImage3} alt="MessageChatImage3" />
          </div>
          <div className="max-w-[50%]">
            <div className="flex text-white min-h-[65px] ">
              <div className="w-[20%] bg-[#002B80]">
                <div className="bg-gray-50 w-full h-full rounded-tr-[44px]"></div>
              </div>
              <div className="w-[80%] bg-[#002B80] rounded-tr-[14px] rounded-br-[14px] rounded-bl-[14px] px-2">
                <p className="text-[12px] py-1">
                  Hi Admin, i’m Testimony. i need some help.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="text-[10px] self-end">
            <p>3:00pm</p>
          </div>
        </div>
        <div className="w-full flex items-start justify-end gap-3 mb-4">
          <div className="text-[10px] self-end">
            <p>3:00pm</p>
          </div>
          <div className="max-w-[50%]">
            <div className="flex min-h-[65px] ">
              <div className="w-[80%] bg-[#ECF1F4] rounded-tl-[14px] rounded-bl-[14px] rounded-br-[14px] px-2">
                <p className="text-[12px] py-1">
                  Hello Testimony, Please tell me how i can be of help to you.
                </p>
              </div>
              <div className="w-[20%] bg-[#ECF1F4]">
                <div className="bg-gray-50 w-full h-full rounded-tl-[44px]"></div>
              </div>
            </div>
          </div>
          <div className="w-[40px] h-[40px]">
            <img src={MessageChatImage3} alt="MessageChatImage3" />
          </div>
        </div>
      <div className="w-full flex items-center justify-center my-5 gap-5">
         <button className='flex justify-center items-center gap-2 border border-[#B0B0B0] rounded-[10px] h-[40px] text-[12px] px-4'>
          <FiDownload />
          Delete Message
        </button>
        <button className='flex justify-center items-center gap-2 bg-[#002B80] text-white rounded-[10px] h-[40px] text-[12px] px-4'>
          <BsFillSendFill />
          Send Message
        </button>
       </div>
      </div>
    </div>
  );
};

export default ChatBox;
