import React from 'react';
// import { Bot, Send } from 'lucide-react';
import { GoDotFill } from 'react-icons/go';
// import ChatHeader from '../Information/ChatHeader';
// import ChatMessage from '../Information/ChatMessage';
import ChatInput from '../Information/ChatInput';

const AiChat: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-xl flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[16px] font-medium text-[#2F3639]">
            AI Assistant Chat
          </h2>
          <p className="text-[#676C6C] text-xs font-light">
            Get instant help with your queries
          </p>
        </div>
        <p className="text-[#5EC069] text-[10px] font-light flex items-center gap-1">
          <GoDotFill />
          online
        </p>
      </div>

      <div className="flex flex-col gap-4 border border-[#DEDEE3] rounded-[10px] p-4 min-h-[300px]">
        <div className="self-end bg-[#232AAB] text-white text-[10px] font-light px-4 py-2 rounded-[10px] max-w-[70%]">
          What’s the process for reporting maintenance issues?
        </div>
        <div className="self-start bg-[#DCF1FD] text-[#1A1A80] text-[10px] font-light px-4 py-2 rounded-[10px] max-w-[70%]">
          You can report maintenance issues through the Dashboard. Would you
          like me to guide you through the process?
        </div>
      </div>

      <div>
        <ChatInput
          onSend={function (_message: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
    </div>
  );
};

export default AiChat;
