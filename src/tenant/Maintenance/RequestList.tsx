import React from 'react';
import type { Request } from './types';
import RequestCard from './RequestCard';

interface RequestListProps {
  requests: Request[];
}

const RequestList: React.FC<RequestListProps> = ({ requests }) => {
  return (
    <div>
      {requests.map((request) => (
        <RequestCard key={request.id} request={request} />
      ))}
    </div>
  );
};

export default RequestList;
