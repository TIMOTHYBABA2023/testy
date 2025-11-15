import React from 'react';
import type { MessageItem } from './type';
import { HiOutlineMail, HiOutlineMailOpen } from 'react-icons/hi';
import { sentEmailIcon, shieldIcon } from '../../../assets/images';
import { MessageTruncator } from './MessageTruncator';
import { Link } from 'react-router-dom';

interface MessageCardProps {
  message: MessageItem;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

const MessageCard: React.FC<MessageCardProps> = ({
  message,
  isSelected,
  onSelect,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between my-2">
        <div
          className={`w-full min-h-[70px] flex items-center justify-between gap-3 py-2 px-4 ${
            message.messageType === 'inbox' && message.readStatus === true
              ? 'bg-white'
              : 'bg-[#F2F6FC]'
          } `}
        >
          <div className={`${message.messageType === "inbox"? "w-[30%]" : "w-[22%]"} mr-1`}>
            <div className='flex items-center justify-between gap-1'>
              <div className='flex items-center gap-4'>
                <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onSelect(message.id)}
              />
              {message.messageType === 'inbox' && (
                <div>
                  {message.messageType === 'inbox' ? (
                    message.readStatus ? (
                      <div className="w-[25px] h-[25px] flex items-center justify-center bg-[#232AAB] rounded-full">
                        <HiOutlineMailOpen color="white" />
                      </div>
                    ) : (
                      <div className="w-[25px] h-[25px] flex items-center justify-center bg-[#232AAB] rounded-full">
                        <HiOutlineMail color="white" />
                      </div>
                    )
                  ) : null}
                </div>
              )}
              </div>
              <p className="text-[#202124] font-semibold text-[12px]">
                <MessageTruncator
              text={message.fullName}
              maxLength={12}
            />
              </p>
            </div>
          </div>
          <Link to={`/messages/inbox/${message.id}`} className="w-full">
            <strong>{message.title}</strong> -
            <MessageTruncator
              text={message.content}
              maxLength={80}
              className="text-gray-800"
            />
          </Link>
        </div>
        <div className="bg-white px-5 flex min-h-[70px] flex-col items-center gap-2">
          <div className=''>
            {message.messageType === 'sent' ? (
              <img src={sentEmailIcon} alt="sentEmailIcon" />
            ) : (
              <img src={shieldIcon} alt="shieldIcon" />
            )}
          </div>
          <div><p className="text-[#202124] text-[12px]">{message.timeSent}</p></div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
