import React, { useEffect, useRef, useState } from 'react';
import { FiCpu, FiPhone } from 'react-icons/fi';
import type { ChatMessageType } from '../Dashboard/types';
import { initialMessages } from '../Dashboard/data';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import QuickQuestions from './QuickQuestions';
import EmergencyHelpCard from './EmergencyHelpCard';

const AskForLegal: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = (text: string) => {
    const newMsg: ChatMessageType = {
      id: Date.now(),
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setMessages((prev) => [...prev, newMsg]);

    // Mock AI reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'assistant',
          text: 'Thanks for your question! A legal expert will respond shortly.',
        },
      ]);
    }, 1200);
  };

  // Auto scroll to bottom when new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  return (
    <div>
      <div className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Ask for Legal</h3>
          <p className="text-sm text-gray-600">
            Get AI-powered legal assistance or connect with our legal team
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
            <FiCpu className="text-lg" />
            AI Assistant
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 text-sm font-medium hover:bg-gray-100 transition">
            <FiPhone className="text-lg" />
            Legal Team
          </button>
        </div>
      </div>
      <div className="bg-gray-50 min-h-screen p-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-2xl shadow-sm flex flex-col overflow-hidden">
          <ChatHeader />
          <div className="flex items-center justify-between border-b pb-3 mb-4"></div>
          <div className="flex-1 overflow-y-auto px-5 py-3 space-y-3">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="sticky bottom-0 left-0 bg-white p-4 border-t border-gray-200 z-10">
            <ChatInput onSend={handleSend} />
            <div className="text-[10px] text-[#21242C] font-light mb-2 px-5 bg-white">
              ⚖️ AI responses are for guidance only. Complex issues will be
              escalated to licensed attorneys.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <QuickQuestions />
          <EmergencyHelpCard />
        </div>
      </div>
    </div>
  );
};

export default AskForLegal;
