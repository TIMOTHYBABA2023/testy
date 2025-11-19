import React from "react";
import { FiCpu, FiPhone } from "react-icons/fi";

const AskForLegal: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      {/* Left Side */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Ask for Legal</h3>
        <p className="text-sm text-gray-600">
          Get AI-powered legal assistance or connect with our legal team
        </p>
      </div>

      {/* Right Side - Buttons */}
      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
          <FiCpu className="text-lg" />
          AI Assistant
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 text-sm font-medium hover:bg-gray-100 transition">
          <FiPhone className="text-lg" />
          Legal Team
        </button>
      </div>
    </div>
  );
};

export default AskForLegal;
