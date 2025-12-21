import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import type { HomeLancer } from './types';
import { Button } from '../maintenance/Button';

interface HomeLancerCardProps {
  lancer: HomeLancer;
}

export const HomeLancerCard: React.FC<HomeLancerCardProps> = ({ lancer }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3">
          <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center font-medium">
            {lancer.name.charAt(0)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{lancer.name}</h4>
            <p className="text-sm text-gray-600">{lancer.specialty}</p>
            <div className="flex items-center gap-1 mt-1">
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium">{lancer.rating}</span>
              <span className="text-sm text-gray-500">({lancer.reviewCount} reviews)</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-gray-900">NGN{lancer.rate.toLocaleString()}</div>
          <div className="text-sm text-gray-500">per project</div>
        </div>
      </div>
      
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">View Profile</Button>
        <Button variant="default" size="sm" className="flex-1">Hire Now</Button>
      </div>
    </div>
  );
};