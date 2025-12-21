import React from 'react';
import { Card } from './Card';
import { achievementBadges } from './data';
import { FaRegStar } from 'react-icons/fa';
import { FiShield } from 'react-icons/fi';
import { BsLightningCharge, BsTrophy } from 'react-icons/bs';
import { PiMedalThin } from 'react-icons/pi';

export const AchievementBadgesCard: React.FC = () => {
  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Achievement Badges
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievementBadges.map((badge) => (
          <div
            key={badge.name}
            className={`p-4 rounded-lg border ${
              badge.earned
                ? 'border-[#232AAB] bg-[#232AAB1A]'
                : 'border-[#E5E7EB] bg-[#F3F4F64D]'
            }`}
          >
            
            <div className="flex items-center justify-between mb-2">
             <div className='flex items-center gap-1'>
              {badge.name === 'Top Rated' && (
              <div className={`  ${badge.earned? "bg-[#232AAB] text-white" : "bg-[#F3F4F6] text-[#65758B]"} w-6 h-6 flex items-center justify-center rounded-full`}>
                <FaRegStar />
              </div>
            )}
            {badge.name === 'Fast Responder' && (
              <div className={`  ${badge.earned? "bg-[#232AAB] text-white" : "bg-[#F3F4F6] text-[#65758B]"} w-6 h-6 flex items-center justify-center rounded-full`}>
                <BsLightningCharge />
              </div>
            )}
            {badge.name === 'Reliable Pro' && (
              <div className={`  ${badge.earned? "bg-[#232AAB] text-white" : "bg-[#F3F4F6] text-[#65758B]"} w-6 h-6 flex items-center justify-center rounded-full`}>
                <FiShield />
              </div>
            )}
            {badge.name === '100 Jobs Milestone' && (
              <div className={`  ${badge.earned? "bg-[#232AAB] text-white" : "bg-[#F3F4F6] text-[#65758B]"} w-6 h-6 flex items-center justify-center rounded-full`}>
                <BsTrophy />
              </div>
            )}
            {badge.name === 'Customer Favorite' && (
              <div className={`  ${badge.earned? "bg-[#232AAB] text-white" : "bg-[#F3F4F6] text-[#65758B]"} w-6 h-6 flex items-center justify-center rounded-full`}>
                <PiMedalThin />
              </div>
            )}
             <h4 className="font-light text-xs text-[#0F1729]">
                {badge.name}
              </h4>
             </div>
              {badge.earned ? (
                <span className="text-xs bg-[#F3F4F6] text-[#0F1729] text-[10px] font-semibold px-2 py-1 rounded-full">
                  Earned
                </span>
              ) : (
               <div></div>
              )}
            </div>
            <p className="text-[10px] text-[#65758B]">{badge.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};
