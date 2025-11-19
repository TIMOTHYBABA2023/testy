import React from 'react';
import StatusCard from './StatusCard';
import { statusItems } from './data';

const Status: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap  gap-2 justify-center">
      {statusItems.map((item, index) => (
        <StatusCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Status;
