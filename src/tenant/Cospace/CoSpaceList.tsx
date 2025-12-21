import React from 'react';
import type { CoSpace } from '../TenantApartment/types';
import CoSpaceCard from './CoSpaceCard';

interface CoSpaceListProps {
  spaces: CoSpace[];
}

const CoSpaceList: React.FC<CoSpaceListProps> = ({ spaces }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {spaces.map((space) => (
        <CoSpaceCard key={space.id} space={space} />
      ))}
    </div>
  );
};

export default CoSpaceList;
