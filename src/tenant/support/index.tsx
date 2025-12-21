import React from 'react'
import { Home, Users, Wrench, FileText, Headphones } from 'lucide-react';


const Support:React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Home className="w-12 h-12 mr-3" />
              <h1 className="text-5xl font-bold">Home 360 Connect</h1>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Unified digital ecosystem connecting homeowners, tenants, co-space sharers, agencies, maintainers, agents, and lancers in a single platform
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-16">
            <span className="px-4 py-2 text-sm font-medium">Property Management</span>
            <span className="px-4 py-2 text-sm font-medium">Co-living Solutions</span>
            <span className="px-4 py-2 text-sm font-medium">Maintenance Services</span>
            <span className="px-4 py-2 text-sm font-medium">Legal Documentation</span>
            <span className="px-4 py-2 text-sm font-medium">AI-Powered Support</span>
          </div>

          <div className="flex justify-center mb-16">
            <button
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-indigo-700 transition"
            >
              <Headphones className="w-5 h-5" />
              Access Support Center →
            </button>
          </div>

          <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg">
                <Home className="w-8 h-8 mb-3" />
                <h3 className="font-bold text-lg mb-2">Property Listing</h3>
                <p className="text-gray-600 text-sm">Comprehensive property management and listing platform for homeowners and agencies.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <Users className="w-8 h-8 mb-3" />
                <h3 className="font-bold text-lg mb-2">Co-living Solutions</h3>
                <p className="text-gray-600 text-sm">Connect with compatible roommates and manage shared living spaces efficiently.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <Wrench className="w-8 h-8 mb-3" />
                <h3 className="font-bold text-lg mb-2">Maintenance Services</h3>
                <p className="text-gray-600 text-sm">On-demand maintenance and repair services with qualified professionals.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <FileText className="w-8 h-8 mb-3" />
                <h3 className="font-bold text-lg mb-2">Payment Solutions</h3>
                <p className="text-gray-600 text-sm">Secure payment processing for rent, deposits, and service fees.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <FileText className="w-8 h-8 mb-3" />
                <h3 className="font-bold text-lg mb-2">Legal Documentation</h3>
                <p className="text-gray-600 text-sm">Digital lease agreements, contracts, and legal document management.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <Headphones className="w-8 h-8 mb-3" />
                <h3 className="font-bold text-lg mb-2">Direct Messaging</h3>
                <p className="text-gray-600 text-sm">Secure communication platform for all stakeholders in the ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Support;