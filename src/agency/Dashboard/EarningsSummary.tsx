import React from 'react';
import { Card } from '../../maintenance/Card';
import { agencyInvoices, earningsData } from '../data';

export const EarningsSummaryCard: React.FC = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card>
      <div className="mb-6">
        <div className="text-3xl font-bold text-gray-900 mb-2">
          {formatCurrency(earningsData.currentMonth)}
        </div>
        <div className="text-green-600 text-sm font-medium">
          +{earningsData.monthChange}% from last month
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <div className="text-lg font-bold text-gray-900">{formatCurrency(earningsData.pendingInvoices.amount)}</div>
          <div className="text-sm text-gray-600">{earningsData.pendingInvoices.count} invoices pending</div>
        </div>
        
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <div className="text-lg font-bold text-gray-900">{formatCurrency(earningsData.thisMonth)}</div>
          <div className="text-sm text-gray-600">This month</div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-medium text-gray-900 mb-4">Recent Invoices</h3>
        <div className="space-y-3">
          {agencyInvoices.map((invoice) => (
            <div key={invoice.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">{invoice.id}</div>
                <div className="text-sm text-gray-600">{invoice.client}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">{invoice.date}</div>
                <div className="text-sm text-gray-600">{invoice.jobCount} jobs</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">NGN{earningsData.breakdown.expert.toLocaleString()}</div>
            <div className="text-sm text-gray-500">Expert</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">NGN{earningsData.breakdown.premium.toLocaleString()}</div>
            <div className="text-sm text-gray-500">Premium</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">NGN{earningsData.breakdown.basic.toLocaleString()}</div>
            <div className="text-sm text-gray-500">Basic</div>
          </div>
        </div>
      </div>
    </Card>
  );
};