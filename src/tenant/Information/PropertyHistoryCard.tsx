import React from 'react';

type HistoryType = 'info' | 'warning' | 'success' | 'error' | 'default';

interface PropertyHistoryCardProps {
  title: string;
  content: string;
  day: string;
  type?: HistoryType;
}

const typeColors: Record<HistoryType, string> = {
  info: 'bg-blue-600 text-blue-600',
  warning: 'bg-yellow-600 text-yellow-700',
  success: 'bg-green-600 text-green-700',
  error: 'bg-red-600 text-red-600',
  default: 'bg-gray-600 text-gray-600',
};

const PropertyHistoryCard: React.FC<PropertyHistoryCardProps> = ({
  title,
  content,
  day,
  type = 'default',
}) => {
  const typeClass = typeColors[type];

  return (
    <div className="w-full flex p-4 border border-gray-200 rounded-md shadow-sm bg-white mb-3">
      <div
        className={`w-[7px] h-[7px] mx-1 text-xs rounded-full capitalize ${typeClass}`}
      ></div>
      <div className="w-full flex justify-between items-start">
        <div>
          <h3 className="text-sm text-[#2C2E33]">{title}</h3>
          <p className="text-[12px] text-[#676C6C] font-light mb-2">
            {content}
          </p>
        </div>
        <div className="text-xs text-[#676C6C] font-light">{day}</div>{' '}
      </div>
    </div>
  );
};

export default PropertyHistoryCard;
