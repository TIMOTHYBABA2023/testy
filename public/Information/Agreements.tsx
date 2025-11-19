import React, { useState } from "react";
import { FiEye, FiDownload, FiLink } from "react-icons/fi";

const Agreements:React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Agreements data
  const agreements = [
    {
      id: 1,
      type: "lease",
      title: "Residential Lease Agreement - Sarah Johnson",
      property: "Sunset Villa #204",
      system: "Climate Control Pro",
      version: "1.0",
      size: "1.8 MB",
    },
    {
      id: 2,
      type: "tenancy",
      title: "Tenancy Agreement - John Doe",
      property: "Palm Heights #12",
      system: "Energy Saver Pro",
      version: "1.2",
      size: "2.0 MB",
    },
    {
      id: 3,
      type: "maintenance",
      title: "Maintenance Contract - HVAC System",
      property: "Central Mall #5",
      system: "Cooling System",
      version: "2.0",
      size: "3.2 MB",
    },
    {
      id: 4,
      type: "lease",
      title: "Residential Lease Agreement - Michael Smith",
      property: "Ocean View #45",
      system: "Smart Thermostat",
      version: "1.3",
      size: "1.5 MB",
    },
    {
      id: 5,
      type: "tenancy",
      title: "Tenancy Agreement - Alice Brown",
      property: "Hilltop Apartments #8",
      system: "Solar Saver",
      version: "2.1",
      size: "2.3 MB",
    },
    {
      id: 6,
      type: "maintenance",
      title: "Maintenance Contract - Elevator Service",
      property: "Business Tower #10",
      system: "LiftMaster",
      version: "3.0",
      size: "4.0 MB",
    },
  ];

  // Tabs dynamically based on agreements
  const tabs = [
    { label: "All Agreement", value: "all", count: agreements.length },
    {
      label: "Lease Agreements",
      value: "lease",
      count: agreements.filter((a) => a.type === "lease").length,
    },
    {
      label: "Tenancy Agreement",
      value: "tenancy",
      count: agreements.filter((a) => a.type === "tenancy").length,
    },
    {
      label: "Maintenance Contract",
      value: "maintenance",
      count: agreements.filter((a) => a.type === "maintenance").length,
    },
  ];

  // Filtered agreements
  const filteredAgreements =
    activeTab === "all"
      ? agreements
      : agreements.filter((a) => a.type === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Agreements</h2>
          <p className="text-sm text-gray-600">
            Manage lease, tenancy, and maintenance agreements with version
            history
          </p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700">
          Create Agreement
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-2xl shadow-md p-4 text-center">
          <p className="text-xl font-semibold">3</p>
          <p className="text-gray-500 text-sm">Active Agreements</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-4 text-center">
          <p className="text-xl font-semibold">2</p>
          <p className="text-gray-500 text-sm">Expiring Soon</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-4 text-center">
          <p className="text-xl font-semibold">₦23,543,678</p>
          <p className="text-gray-500 text-sm">Monthly Review</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-4 text-center">
          <p className="text-xl font-semibold">4</p>
          <p className="text-gray-500 text-sm">Review Needed</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 transition 
              ${
                activeTab === tab.value
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {tab.label}
            <span className="text-xs bg-white text-gray-700 px-2 py-0.5 rounded-full">
              {tab.count}
            </span>
          </button>
        ))}
        <input
          type="text"
          placeholder="Search..."
          className="ml-auto rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Agreements List */}
      <div className="space-y-4">
        {filteredAgreements.map((a) => (
          <div
            key={a.id}
            className="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            {/* Left */}
            <div>
              <h4 className="font-semibold text-gray-800">{a.title}</h4>
              <p className="text-sm text-gray-600">
                {a.property} · {a.system} · Version {a.version} · {a.size}
              </p>
              <a href="#" className="text-indigo-600 text-sm mt-2 block">
                View Agreement Details
              </a>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <FiEye />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <FiDownload />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <FiLink />
              </button>
            </div>
          </div>
        ))}

        {filteredAgreements.length === 0 && (
          <p className="text-center text-gray-500">No agreements found</p>
        )}
      </div>
    </div>
  );
};

export default Agreements;
