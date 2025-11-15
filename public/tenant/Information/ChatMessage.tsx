import React from 'react';
import type { ChatMessageType } from '../Dashboard/types';

const ChatMessage: React.FC<{ message: ChatMessageType }> = ({ message }) => {
  const isUser = message.sender === 'user';
  return (
    <div
      className={`flex gap-2 flex-col ${
        isUser ? 'items-end' : 'justify-start'
      } my-2`}
    >
      <div
        className={`max-w-[82%] rounded-2xl px-3 py-3 text-sm leading-[24px] ${
          isUser
            ? 'bg-[#232AAB] text-white text-[10px] font-light'
            : 'bg-[#DCF1FD] text-[#232AAB] text-[10px] font-light'
        }`}
      >
        {message.text}
      </div>
      {message.time && (
        <div className="text-[10px] mt-1 opacity-70">{message.time}</div>
      )}
    </div>
  );
};

export default ChatMessage;
