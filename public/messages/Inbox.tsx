import React from "react";
import MessageCardList from "./MessageList";
import type { MessageItem } from "./type";

interface MessageProps {
  allMessages: MessageItem[];
  type: 'inbox' | 'sent' | 'draft' | 'spam';
}

const Inbox: React.FC<MessageProps> = ({ allMessages, type }) => {
  const filteredMessages = allMessages.filter(msg => msg.messageType === type);

  return <MessageCardList messages={filteredMessages} />;
};

export default Inbox;
