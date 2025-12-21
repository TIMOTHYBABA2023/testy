import React from 'react';
import { Card } from '../Card';
import { conversations } from '../data';

export const ConversationsCard: React.FC = () => {
  return (
    <Card>
      <h2 className="text-sm font-medium text-[#2F3639] mb-4">Conversations</h2>

      <div className="space-y-4">
        {conversations.map((conversation) => (
          <div key={conversation.id} className="p-3">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-[#F3F4F6] text-[#0F1729] flex items-center justify-center font-light text-sm">
                  {conversation.userId}
                </div>
                <div>
                  <h4 className="font-light text-[#2F3639] text-sm">
                    {conversation.userName}
                  </h4>
                  <p className="text-[10px] text-[#676C6C] font-light">
                    {conversation.lastMessage}
                  </p>
                </div>
              </div>
              <div>
                <span className="text-[8px] text-[#65758B]">
                  {conversation.timeAgo}
                </span>
                {(conversation.unreadCount ?? 0) > 0 && (
                  <div className='bg-[#232AAB] w-6 h-6 rounded-full text-white text-[10px] flex items-center justify-center'>
                    {conversation.unreadCount ?? 0}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
