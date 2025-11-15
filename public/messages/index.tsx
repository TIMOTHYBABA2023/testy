import React from 'react';
import { messageItems } from './data';
import { Burger } from '../../../assets/images';
import AddPropertyButton from './AddPropertyButton';
import Inbox from './Inbox';

const Messages: React.FC = () => {
  return (
    <div className="p-4 mx-auto">
      <div className="flex justify-between items-center mb-6 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-4">
          <img src={Burger} alt="Hamburger icon" />
          <h1 className="text-[32px] font-bold ">Messages</h1>
        </div>
        <AddPropertyButton type="button" label="Add Property" />
      </div>
      <h2 className="text-[15px] font-semibold mb-6 text-[#202124]">Inbox</h2>
      <div>
        <Inbox allMessages={messageItems} type={'inbox'} />
      </div>
    </div>
  );
};

export default Messages;
