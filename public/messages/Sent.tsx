import React from 'react';
import MessageCardList from './MessageList';
import { messageItems } from './data';
import AddPropertyButton from './AddPropertyButton';
import { Burger } from '../../../assets/images';

interface MessageProps {
  type: 'inbox' | 'sent' | 'draft' | 'spam';
}

const Sent: React.FC<MessageProps> = ({ type }) => {
  const filteredMessages = messageItems.filter(
    (msg) => msg.messageType === type
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-4">
          <img src={Burger} alt="Hamburger icon" />
          <h1 className="text-[32px] font-bold ">Messages</h1>
        </div>
        <AddPropertyButton type="button" label="Add Property" />
      </div>
      <h2 className="text-[15px] font-semibold mb-6 text-[#202124]">Sent</h2>
      <MessageCardList messages={filteredMessages} />
      
    </div>
  );
};

export default Sent;
