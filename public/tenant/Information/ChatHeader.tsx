import React from 'react';

const ChatHeader: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[90%] flex items-center justify-between py-3">
        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span className="text-[#2F3639] font-semibold text-[16px]">🤖</span>
            AI Legal Assistant
          </h2>
          <p className="text-[12px] text-[#676C6C] font-light">
            Powered by advanced legal AI • Available 24/7
          </p>
        </div>
        <span className="text-[#5EC069] text-[10px] font-light">● Online</span>
      </div>
    </div>
  );
};

export default ChatHeader;
