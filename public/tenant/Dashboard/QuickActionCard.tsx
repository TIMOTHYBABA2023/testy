import React from "react";

interface QuickActionCardProps {
  title: string;
  icon: React.ReactNode;
}

const QuickActionCard: React.FC<QuickActionCardProps> = ({ title, icon }) => (
  <div className="flex flex-col items-center justify-center bg-white shadow-sm rounded-2xl p-4 hover:bg-blue-50 transition">
    <div className="text-2xl mb-2">{icon}</div>
    <p className="text-sm font-medium">{title}</p>
  </div>
);

export default QuickActionCard;
