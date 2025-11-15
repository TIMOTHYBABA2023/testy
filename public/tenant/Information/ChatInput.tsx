import React, { useState } from 'react';
import { IoIosSend } from 'react-icons/io';

interface ChatInputProps {
  onSend: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [value, setValue] = useState('');

  const handleSend = () => {
    if (!value.trim()) return;
    onSend(value);
    setValue('');
  };

  return (
    <div className="p-3 flex items-end">
      <div className="flex-1 px-4 py-2 rounded-[10px] h-[72px] bg-[#FCFCFD] border border-[#F1F1F4] outline-none text-[10px] text-[#676C6C]">
        <textarea
          placeholder="Ask your legal question..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="outline-none text-[10px] text-[#676C6C] w-full"
        />
      </div>
      <button
        onClick={handleSend}
        className="ml-2 w-5 h-5 flex items-center justify-center bg-[#232AAB] hover:bg-blue-700 text-white rounded-[5px]"
      >
        <IoIosSend size={12} />
      </button>
      
    </div>
  );
};

export default ChatInput;
