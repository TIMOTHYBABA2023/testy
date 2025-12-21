import React from 'react';
import { Card } from '../../maintenance/Card';
import { propertyOwners } from '../data';
import { PropertyOwnerCard } from '../PropertyOwnerCard';

export const PropertyOwnersCard: React.FC = () => {
  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Project Owners
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Manage and verify property owners
      </p>

      <div className="space-y-4">
        {propertyOwners.map((owner) => (
          <PropertyOwnerCard key={owner.id} owner={owner} />
        ))}
      </div>
    </Card>
  );
};
