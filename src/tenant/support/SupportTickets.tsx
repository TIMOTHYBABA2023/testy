import React, { useMemo, useState } from 'react'
import { Home, Users, AlertTriangle, Clock, AlertCircle, Search } from 'lucide-react';
import type { SupportTicket, TicketStats } from './types';
import { initialTickets } from './data';


const SupportTickets:React.FC = () => {
  const [tickets, setTickets] = useState<SupportTicket[]>(initialTickets);
  const [searchQuery, setSearchQuery] = useState('');


  const stats: TicketStats = useMemo(() => {
    return {
      total: tickets.length,
      open: tickets.filter(t => t.status === 'open').length,
      avgResponseTime: 3.2,
      escalated: tickets.filter(t => t.escalated).length
    };
  }, [tickets]);

  const filteredTickets = useMemo(() => {
    if (!searchQuery) return tickets;
    const query = searchQuery.toLowerCase();
    return tickets.filter(ticket => 
      ticket.id.toLowerCase().includes(query) ||
      ticket.title.toLowerCase().includes(query) ||
      ticket.description.toLowerCase().includes(query) ||
      ticket.propertyAddress.toLowerCase().includes(query)
    );
  }, [tickets, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Homeowner Support Center</h1>
              <p className="text-gray-600">Manage your property support tickets and get expert assistance</p>
            </div>
            <button
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              New Support Ticket
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm font-medium text-gray-600">Total Tickets</h3>
                <Home className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-3xl font-bold text-indigo-600">{stats.total}</p>
              <p className="text-sm text-gray-500 mt-1">Active support requests</p>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm font-medium text-gray-600">Open Tickets</h3>
                <AlertTriangle className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-3xl font-bold text-indigo-600">{stats.open}</p>
              <p className="text-sm text-gray-500 mt-1">Awaiting response</p>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm font-medium text-gray-600">Avg Response Time</h3>
                <Clock className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-3xl font-bold text-indigo-600">{stats.avgResponseTime} hours</p>
              <p className="text-sm text-gray-500 mt-1">Faster than industry average</p>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm font-medium text-gray-600">Escalated</h3>
                <AlertCircle className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-3xl font-bold text-indigo-600">{stats.escalated}</p>
              <p className="text-sm text-gray-500 mt-1">High priority issues</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg border">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Your Support Tickets</h2>
                <span className="text-sm text-gray-600">{filteredTickets.length} Tickets</span>
              </div>
            </div>

            <div className="divide-y">
              {filteredTickets.map((ticket) => (
                <div key={ticket.id} className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="font-bold text-lg">#{ticket.id}</h3>
                        <p className="text-base mt-1">{ticket.title}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                        {ticket.status === 'open' ? 'Open' : ticket.status === 'in-progress' ? 'In Progress' : 'Closed'}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        ticket.priority === 'urgent' ? 'bg-red-100 text-red-700' :
                        ticket.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                        ticket.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{ticket.description}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {ticket.submittedBy}
                    </span>
                    <span className="flex items-center gap-1">
                      <Home className="w-4 h-4" />
                      {ticket.propertyAddress}
                    </span>
                  </div>

                  {ticket.aiSuggestion && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm mb-1">AI suggestion:</p>
                          <p className="text-sm text-gray-700">{ticket.aiSuggestion}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {ticket.escalated && ticket.escalationReason && (
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg mt-4">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm text-red-900 mb-1">
                            Escalated - {ticket.escalatedAt && new Date(ticket.escalatedAt).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })} ago
                          </p>
                          <p className="text-sm text-red-800">{ticket.escalationReason}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}

export default SupportTickets;