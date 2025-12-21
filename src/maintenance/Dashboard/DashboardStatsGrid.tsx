import React from 'react';
import { StatCard } from './StatCard';
import { dashboardStats } from '../data';
import { VscBriefcase } from 'react-icons/vsc';
import { GoStar } from 'react-icons/go';
import { IoWalletOutline } from 'react-icons/io5';
import { FaArrowTrendUp } from 'react-icons/fa6';

export const DashboardStatsGrid: React.FC = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Active Jobs"
        value={dashboardStats.activeJobs}
        subtitle="+3 from last week"
        icon={<VscBriefcase />}
        iconColor="#232AAB1A"
      />

      <StatCard
        title="Average Rating"
        value={dashboardStats.averageRating}
        subtitle={`Based on 156 reviews`}
        icon={<GoStar />}
        iconColor="#2BBA4F1A"
      />

      <StatCard
        title="This Month Earnings"
        value={formatCurrency(dashboardStats.monthlyEarnings)}
        subtitle="+12% from last month"
        icon={<IoWalletOutline />}
        iconColor="#2BBA4F1A"
      />

      <StatCard
        title="Completion Rate"
        value={`${dashboardStats.completionRate}%`}
        subtitle="+2% improvement"
        icon={<FaArrowTrendUp />}
        iconColor="#232AAB1A"
      />
    </div>
  );
};
