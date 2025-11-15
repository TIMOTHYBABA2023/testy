import React from 'react';
import AddPropertyButton from './AddPropertyButton';
import { Burger } from '../../../assets/images';
import ChatCard from './ChatCard';
import { RiChatNewLine } from 'react-icons/ri';
import ChatBox from './ChatBox';
import NotificationCard from './NotificationCard';
import { BiDotsVerticalRounded } from 'react-icons/bi';

const Chats: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-4">
          <img src={Burger} alt="Hamburger icon" />
          <h1 className="text-[32px] font-bold ">Messages</h1>
        </div>
        <AddPropertyButton type="button" label="New Chat" />
      </div>
      <h2 className="text-[15px] font-semibold mb-6 text-[#202124]">Chat</h2>
      <div className="w-full flex">
        <div className="w-[60%] pr-4">
          <div className="flex items-center gap-5 w-full p-2 border border-[#002B80] rounded-[10px] mb-4 cursor-pointer hover:shadow-md">
            <div className="flex h-[61px] w-[61px] rounded-full bg-[#002B80] text-white justify-center items-center text-[32px] ml-[30px]">
              <RiChatNewLine />
            </div>
            <p className="font-semibold ">Create New Chat</p>
          </div>
          <div className="border-r border-[#000000] pr-2">
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
          </div>
          <div className=''>
          <ChatBox />
        </div>
        </div>
        
        <div className="w-[35%] hidden lg:block pl-4">
          <div className="w-full p-3 rounded-[15px] shadow-[-4px_-4px_16px_1px_rgba(0,0,0,0.2)]">
            <div className="my-4 flex justify-between items-center">
              <h2>Notifications</h2>
              <div className="font-bold text-[22px]">
                <BiDotsVerticalRounded />
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <NotificationCard />
              <NotificationCard />
              <NotificationCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
