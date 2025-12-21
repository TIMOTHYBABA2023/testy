import React from 'react';
import { StatCard } from '../../maintenance/Dashboard/StatCard';
import { agencyStats } from '../data';
import { HiOutlineBuildingStorefront } from 'react-icons/hi2';
import { FaArrowTrendUp, FaPeopleGroup } from 'react-icons/fa6';
import { IoWalletOutline } from 'react-icons/io5';

export const AgencyStatsGrid: React.FC = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Total Projects"
        value={agencyStats.totalProjects}
        subtitle="+12% from last month"
        icon={<HiOutlineBuildingStorefront />}
        iconColor="#232AAB1A"
      />

      <StatCard
        title="Active Leads"
        value={agencyStats.activeLeads}
        subtitle="+23% from last month"
        icon={<FaPeopleGroup />}
        iconColor="#232AAB1A"
      />

      <StatCard
        title="Properties Listed"
        value={agencyStats.propertiesListed}
        // change={agencyStats.listedChange}
        subtitle="+8% from last month"
        icon={<FaArrowTrendUp />}
        iconColor="#232AAB1A"
      />

      <StatCard
        title="Total Revenue"
        value={formatCurrency(agencyStats.totalRevenue)}
        // change={agencyStats.revenueChange}
        subtitle="+15% from last month"
        icon={<IoWalletOutline />}
        iconColor="#232AAB1A"
      />
    </div>
  );
};
