


import React from "react";
import {
  FiTrash2,
  FiEye,
  FiFileText,
  FiArchive,
  FiHome,
} from "react-icons/fi";

const HouseDocuments:React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800">House Documents</h2>
      <p className="text-gray-600 text-sm mb-6">
        Manage property documents with AI-powered completeness and validity
        checking
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-white p-4 rounded-2xl shadow-md flex flex-col items-center">
          <FiFileText className="text-indigo-600 text-2xl mb-2" />
          <p className="text-lg font-semibold">4</p>
          <p className="text-gray-600 text-sm">Active Notes</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-md flex flex-col items-center">
          <FiArchive className="text-yellow-500 text-2xl mb-2" />
          <p className="text-lg font-semibold">2</p>
          <p className="text-gray-600 text-sm">Archive</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-md flex flex-col items-center">
          <FiEye className="text-blue-500 text-2xl mb-2" />
          <p className="text-lg font-semibold">1,453</p>
          <p className="text-gray-600 text-sm">Total Views</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-md flex flex-col items-center">
          <FiHome className="text-green-500 text-2xl mb-2" />
          <p className="text-lg font-semibold">4</p>
          <p className="text-gray-600 text-sm">Properties</p>
        </div>
      </div>

      {/* Archive Section */}
      <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
        📂 Archive
      </h3>

      <div className="space-y-6">
        {/* Notice Card 1 */}
        <div className="bg-white rounded-2xl shadow-md p-5 border-l-4 border-yellow-500">
          <div className="flex justify-between items-start">
            <h4 className="text-lg font-semibold text-indigo-700">
              Schedule Maintenance - Elevator
            </h4>
            <button className="text-red-500 hover:text-red-700">
              <FiTrash2 />
            </button>
          </div>
          <div className="flex gap-2 mt-2">
            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
              High Priority
            </span>
            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
              Maintenance
            </span>
          </div>
          <p className="text-gray-600 text-sm mt-3">
            The elevator in Building A will be under maintenance on December
            28th from 9:00 AM to 3:00 PM. Please use the stairs during this
            time. We apologize for any inconvenience.
          </p>
          <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
            <p>📅 Posted Jul 22, 2025</p>
            <p>👁 45 Views</p>
          </div>
        </div>

        {/* Notice Card 2 */}
        <div className="bg-white rounded-2xl shadow-md p-5 border-l-4 border-indigo-700">
          <div className="flex justify-between items-start">
            <h4 className="text-lg font-semibold text-indigo-700">
              Holiday Office Hours
            </h4>
            <button className="text-red-500 hover:text-red-700">
              <FiTrash2 />
            </button>
          </div>
          <div className="flex gap-2 mt-2">
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
              Normal
            </span>
            <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
              Announcement
            </span>
          </div>
          <p className="text-gray-600 text-sm mt-3">
            Our office will be closed from December 24th to January 2nd. For
            emergency maintenance requests, please call our 24/7 hotline at
            070453505614.
          </p>
          <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
            <p>📅 Posted Jul 22, 2025</p>
            <p>👁 45 Views</p>
          </div>
        </div>
      </div>

      {/* Notices Section */}
      <h3 className="text-lg font-semibold mt-10 mb-4">📢 All Notices</h3>

      <div className="space-y-6">
        {/* Notice Card 3 */}
        <div className="bg-white rounded-2xl shadow-md p-5 border-l-4 border-blue-500">
          <div className="flex justify-between items-start">
            <h4 className="text-lg font-semibold text-indigo-700">
              Parking Regulation Update
            </h4>
            <button className="text-red-500 hover:text-red-700">
              <FiTrash2 />
            </button>
          </div>
          <div className="flex gap-2 mt-2">
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
              Policy
            </span>
          </div>
          <p className="text-gray-600 text-sm mt-3">
            Starting January 1st, 2025, all vehicles must display valid parking
            permits. Permits can be obtained from the management office during
            business hours.
          </p>
          <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
            <p>📅 Posted Jul 22, 2025</p>
            <p>👁 45 Views</p>
          </div>
        </div>

        {/* Notice Card 4 */}
        <div className="bg-white rounded-2xl shadow-md p-5 border-l-4 border-green-500">
          <div className="flex justify-between items-start">
            <h4 className="text-lg font-semibold text-indigo-700">
              Gym Equipment Upgrade
            </h4>
            <button className="text-red-500 hover:text-red-700">
              <FiTrash2 />
            </button>
          </div>
          <div className="flex gap-2 mt-2">
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
              Normal
            </span>
          </div>
          <p className="text-gray-600 text-sm mt-3">
            We're excited to announce new fitness equipment has been installed
            in the community gym. The upgraded facilities include modern cardio
            machines and strength training equipment.
          </p>
          <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
            <p>📅 Posted Jul 22, 2025</p>
            <p>👁 45 Views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDocuments;
