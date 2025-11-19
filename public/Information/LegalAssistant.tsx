import React from "react";
import { FiPhone } from "react-icons/fi";
import AskForLegal from "./AskForLegal";

const LegalAssistant:React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AskForLegal />
      <div className="p-6 flex flex-col md:flex-row gap-6">
        {/* Left Section - AI Assistant */}
        <div className="flex-1 bg-white shadow-md rounded-2xl p-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              AI Legal Assistant
            </h2>
            <span className="text-sm text-green-600">● Online</span>
          </div>

          {/* Chat */}
          <div className="space-y-4">
            {/* User Question */}
            <div className="flex justify-end">
              <div className="bg-indigo-600 text-white px-4 py-2 rounded-2xl max-w-[70%]">
                I have a tenant who wants to break their lease early. What are
                my options?
              </div>
            </div>

            {/* AI Response */}
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-2xl max-w-[80%]">
                <p className="mb-2">
                  I can help you understand your options for early lease
                  termination. Based on standard lease agreements, here are the
                  key points to consider:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>
                    <strong>Review your lease terms</strong> – Check for early
                    termination clauses
                  </li>
                  <li>
                    <strong>State laws</strong> – Some states have tenant
                    protection laws
                  </li>
                  <li>
                    <strong>Acceptable reasons</strong> – Job relocation,
                    military deployment, or domestic violence are often
                    protected
                  </li>
                  <li>
                    <strong>Financial implications</strong> – Typically 1–2
                    months rent penalty
                  </li>
                </ol>
                <p className="mt-2 text-sm">
                  Would you like me to review your specific lease agreement or
                  escalate this to our legal team for detailed advice?
                </p>
                <div className="flex gap-2 mt-3">
                  <button className="px-3 py-2 text-sm rounded-xl bg-indigo-600 text-white hover:bg-indigo-700">
                    Review my lease agreement
                  </button>
                  <button className="px-3 py-2 text-sm rounded-xl bg-gray-200 hover:bg-gray-300">
                    Connect with legal team
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="mt-6 border-t pt-4">
            <input
              type="text"
              placeholder="Ask your legal question..."
              className="w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p className="mt-2 text-xs text-gray-500">
              ⚖️ AI responses are for guidance only. Complex issues will be
              escalated to licensed attorneys.
            </p>
          </div>
        </div>

        {/* Right Section - Quick Questions + Emergency */}
        <div className="w-full md:w-80 flex flex-col gap-6">
          {/* Quick Questions */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Questions</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>How do I handle a late rent payment?</li>
              <li>What are the eviction laws in Lagos?</li>
              <li>Can I increase rent during a lease term?</li>
              <li>Security deposit return requirements</li>
              <li>Tenant rights during property maintenance</li>
              <li>Breaking a lease agreement legally</li>
            </ul>
          </div>

          {/* Emergency Help */}
          <div className="bg-red-50 border border-red-200 shadow-md rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-red-600">
              Emergency Legal Help
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              For urgent legal matters outside business hours
            </p>
            <p className="text-xl font-bold text-gray-900 mt-2">
              (555) 123-LEGAL
            </p>
            <p className="text-sm text-gray-600">24/7 Emergency Hotline</p>
            <button className="mt-4 flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700">
              <FiPhone /> Call Emergency Line
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalAssistant;
