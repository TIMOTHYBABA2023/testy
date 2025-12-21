import React from 'react';
import { invoices } from './data';
import { StatCard } from './Dashboard/StatCard';
import { IoWalletOutline } from 'react-icons/io5';
import { GrNotes } from 'react-icons/gr';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';
import { FiDownload } from 'react-icons/fi';

export const EarningsCard: React.FC = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard
          title="Total Earnings"
          value={'NGN888,450.00'}
          subtitle="+15% from last month"
          icon={<IoWalletOutline />}
        />
        <StatCard
          title="Pending Payments"
          value={'NGN76595.00'}
          subtitle="2 invoices pending"
          icon={<GrNotes />}
        />
        <StatCard
          title="Completed Jobs"
          value={'28'}
          subtitle="This month"
          icon={<FaArrowTrendUp />}
        />
      </div>

      <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Invoices
          </h3>
          <div className="flex border border-[#E5E7EB] bg-[#F6F7F8] rounded-[7px] items-center text-[10px] gap-2 px-2 py-1 mb-4 w-fit">
            <FiDownload /> <p>Export</p>
          </div>
        </div>
        <div className="space-y-3">
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="flex justify-between items-center p-3 border border-gray-200 rounded-lg"
            >
              <div className="flex flex-col">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <div className="font-light text-sm text-[#2F3639]">
                      {invoice.id}
                    </div>
                    {invoice.status === 'Paid' ? (
                      <div className="text-[10px] text-white font-medium bg-[#5EC069] flex items-center justify-center px-2 h-5 rounded-full w-max">
                        {invoice.status}
                      </div>
                    ) : (
                      <div className="text-[10px] text-[#292D32] font-medium bg-[#F3F4F6] flex items-center justify-center px-2 h-5 rounded-full w-max">
                        {invoice.status}
                      </div>
                    )}
                  </div>
                  <div className="text-[10px] text-[#676C6C] font-light">
                    {invoice.client}
                  </div>
                </div>
                <div className="flex gap-1 text-[#676C6C] text-[10px] font-light items-center">
                  <div className="">{invoice.date}</div> <GoDotFill />
                  <div className="">{invoice.jobCount} jobs</div>
                </div>
              </div>
              <div className="text-[#2F3639] text-sm font-semibold flex gap-3 items-center">
                {invoice.amount !== undefined
                  ? invoice.amount.toLocaleString('en-NG', {
                      style: 'currency',
                      currency: 'NGN',
                    })
                  : '—'}
                <FiDownload />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
