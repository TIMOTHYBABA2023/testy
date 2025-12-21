import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Card } from '../../maintenance/Card';
import { Button } from '../../maintenance/Button';
import { homeLancers } from '../data';
import { HomeLancerCard } from '../HomeLancerCard';

export const HomeLancerMarketplaceCard: React.FC = () => {
  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Find Home Professionals</h2>
      
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-3">Search by specialty, location, or name</p>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="search"
              placeholder="Search lancers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <Button>Search Now</Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {homeLancers.map((lancer) => (
          <HomeLancerCard key={lancer.id} lancer={lancer} />
        ))}
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-2">Become a Home Lancer</h3>
          <p className="text-sm text-gray-600 mb-4">
            Are you a skilled professional? Join our network and connect with property agencies and homeowners.
          </p>
          <Button variant="default" className="w-full">Apply as a Lancer</Button>
        </div>
      </div>
    </Card>
  );
};