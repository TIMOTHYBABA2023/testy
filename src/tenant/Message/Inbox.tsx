import React from 'react';
import { CiSearch } from 'react-icons/ci';

const messages = [
  {
    id: 1,
    sender: 'Property Manager',
    subject: 'Maintenance Schedule Update',
    message: 'Your maintenance request has been scheduled for next week...',
    time: '2 hours ago',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91',
  },
  {
    id: 2,
    sender: 'Building Admin',
    subject: 'Community Event Invitation',
    message: 'Join us for the monthly community gathering...',
    time: '1 day ago',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4',
  },
  {
    id: 3,
    sender: 'Owner - Unit 4B',
    subject: 'Lease Renewal Discussion',
    message: "I'd like to discuss the terms for your lease renewal...",
    time: '2 days ago',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
  },
];

const Inbox: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-xl">
      <div className="flex justify-between items-center ">
        <h2 className="text-[14px] text-[#2F3639] font-semibold mb-2">Inbox</h2>
        <div className="flex gap-2 md:min-w-[285px] h-[29px] items-center pl-2 border border-[#808A9A33] bg-[#FAFAFA] text-[#808A9AB2] rounded-md mb-6">
          <CiSearch size={12} />
          <input
            placeholder="Search messages..."
            className="placeholder:text-[10px] bg-transparent"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex justify-between items-start p-4 rounded-lg border ${
              msg.isNew ? 'bg-[#232AAB1A] border-[#232AAB]' : 'bg-white'
            }`}
          >
            <div className="flex gap-2">
              <div>
                <img
                  src={msg.image}
                  alt={msg.sender}
                  className="w-6 h-6 rounded-full bg-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-[#2F3639] text-xs">
                  {msg.sender}
                </p>
                <p className="text-[10px] font-light text-[#2F3639]">
                  {msg.subject}
                </p>
                <p className="text-[10px] font-light text-[#676C6C]">
                  {msg.message}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[10px] font-light text-[#2F3639]">
                {msg.time}
              </p>
              {msg.isNew && (
                <span className="bg-[#007AFF] text-white text-[8px] px-3 py-[2px] rounded-full">
                  New
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
