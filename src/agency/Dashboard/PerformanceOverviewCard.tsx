import React from 'react';
import { Card } from '../../maintenance/Card';
import { performanceMetrics } from '../data';
export const PerformanceOverviewCard: React.FC = () => {
  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `NGN${(amount / 1000000).toFixed(0)}M`;
    }
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const ProgressBar = ({ value, max, className }: { value: number; max: number; className: string }) => {
    const percentage = (value / max) * 100;
    
    return (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`h-full rounded-full ${className}`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
    );
  };

  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Performance Overview</h2>
      <p className="text-sm text-gray-600 mb-6">Your agency's performance metrics for the last 30 days</p>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Properties Sold</span>
            <span className="text-sm text-gray-600">
              {performanceMetrics.propertiesSold.current}/{performanceMetrics.propertiesSold.target}
            </span>
          </div>
          <ProgressBar 
            value={performanceMetrics.propertiesSold.current} 
            max={performanceMetrics.propertiesSold.target} 
            className="bg-green-500"
          />
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Investor Engagement</span>
            <span className="text-sm text-gray-600">{performanceMetrics.investorEngagement}%</span>
          </div>
          <ProgressBar 
            value={performanceMetrics.investorEngagement} 
            max={100} 
            className="bg-blue-500"
          />
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Revenue Target</span>
            <span className="text-sm text-gray-600">
              {formatCurrency(performanceMetrics.revenueTarget.current)}/{formatCurrency(performanceMetrics.revenueTarget.target)}
            </span>
          </div>
          <ProgressBar 
            value={performanceMetrics.revenueTarget.current} 
            max={performanceMetrics.revenueTarget.target} 
            className="bg-purple-500"
          />
        </div>
      </div>
    </Card>
  );
};