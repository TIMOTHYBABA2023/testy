import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  HiArrowNarrowRight,
  HiOutlineMail,
  HiOutlineMailOpen,
} from 'react-icons/hi';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { IoClose } from 'react-icons/io5';
import { messageItems } from './data';
import { Burger } from '../../../assets/images';
import AddPropertyButton from './AddPropertyButton';
import { BsArrowReturnLeft, BsArrowReturnRight } from 'react-icons/bs';

const MessageDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const message = messageItems.find((m) => m.id === Number(id));

  if (!message) return <div className="p-6">Message not found</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-4">
          <img src={Burger} alt="Hamburger icon" />
          <h1 className="text-[32px] font-bold ">Messages</h1>
        </div>
        <AddPropertyButton type="button" label="Add Property" />
      </div>
      <div className="flex gap-3 items-center  mb-6">
        <Link to={`/messages/inbox`}>
          <h2 className="text-[15px] font-semibold text-[#202124]">Inbox</h2>
        </Link>
        <HiArrowNarrowRight />
        {message.fullName}
      </div>
      <div className="bg-white p-4 rounded-[20px] flex gap-4">
        <div className="w-10 h-10 bg-blue-600 rounded-full mt-10"></div>
        <div className="w-[90%]">
          <div className="flex gap-2">
            {message.title}
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
            <div className="bg-[#DDDDDD] px-2 rounded-[4px] flex gap-2 items-center">
              <p className="text-[#666666] text-[10px]">Inbox</p>
              <button onClick={() => navigate(-1)}>
                <IoClose />
              </button>
            </div>
          </div>
          <div className="flex justify-between my-2">
            <div className="flex gap-2 items-center">
              <div className="flex flex-col gap-1">
                <p>{message.fullName}</p>
                <div className="flex gap-1 items-center">
                  to me <TiArrowSortedDown />
                  <TiArrowSortedUp />
                </div>
              </div>
            </div>
            <div>{message.timeSent}</div>
          </div>
          <div className="mt-3">
            <p className="text-[#202124] text-[14px]">{message.content}</p>
            <div className="flex gap-3 mt-3">
              <button className="border border-[#747775] flex py-1 px-4 items-center gap-2 rounded-[18px]">
                <BsArrowReturnRight className="rotate-180" />
                <p>Reply</p>
              </button>
              <button className="border border-[#747775] flex py-1 px-4 items-center gap-2 rounded-[18px]">
                <p>Forward</p>
                <BsArrowReturnLeft className="rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageDetail;
