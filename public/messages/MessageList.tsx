import React, { useState } from "react";
import MessageCard from "./MessageCard";
import type { MessageItem } from "./type";

interface MessageCardListProps {
  messages: MessageItem[];
}

const MessageCardList: React.FC<MessageCardListProps> = ({ messages }) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const toggleSelect = (id: number) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === messages.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(messages.map(m => m.id));
    }
  };

  return (
    <div>
      <div className="bg-white p-4 rounded shadow mb-4 flex items-center  gap-3">
        <input
          type="checkbox"
          checked={selectedIds.length === messages.length && messages.length > 0}
          onChange={toggleSelectAll}
        />
        Select All
      </div>
      {messages.map(msg => (
        <MessageCard
          key={msg.id}
          message={msg}
          isSelected={selectedIds.includes(msg.id)}
          onSelect={toggleSelect}
        />
      ))}
    </div>
  );
};

export default MessageCardList;
