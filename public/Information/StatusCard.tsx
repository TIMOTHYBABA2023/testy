import React from 'react';
import { GrStatusGood } from 'react-icons/gr';

export type StatusType =
  | 'Good Condition'
  | 'occupied'
  | 'review_due'
  | 'default';

export interface StatusItem {
  title: string;
  day: string;
  type: StatusType;
  label?: string;
}

const statusMeta: Record<StatusType, { label: string; className: string }> = {
  'Good Condition': {
    label: 'Good Condition',
    className: 'bg-green-600',
  },
  occupied: {
    label: 'Occupied',
    className: 'bg-green-600',
  },
  review_due: {
    label: 'Review Due',
    className: 'bg-yellow-600',
  },
  default: {
    label: 'Unknown',
    className: 'bg-gray-600',
  },
};

const StatusCard: React.FC<StatusItem> = ({ title, day, type }) => {
  const status = statusMeta[type] || statusMeta.default;

  return (
    <div className="w-full max-w-[294px] flex-col items-center justify-center border border-[#DEDEE3] rounded-md shadow-sm bg-white my-3 py-5 px-4">
      <div className="w-full flex items-center justify-center mb-2">
        <h3 className="text-sm text-[#2C2E33] font-semibold">{title}</h3>
      </div>
      <div className="w-full flex-col items-center justify-center mb-2">
        <div className="w-full flex items-center justify-center my-2">
          <GrStatusGood size={44} color="#5EC069" />
        </div>
        <div
          className={`w-full flex items-center justify-center mb-2 px-[11px] py-[4px] text-xs text-white rounded-full capitalize ${status.className}`}
        >
          {status.label}
        </div>
      </div>
      <div className="text-xs text-[#676C6C] font-light">{day}</div>
    </div>
  );
};

export default StatusCard;
