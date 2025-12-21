import React, { useMemo, useState } from 'react'
import { AlertCircle, Upload } from 'lucide-react';
import type { SupportTicket, TicketFormData, TicketStats } from './types';
import { categories, initialTickets, priorities } from './data';


const Ticketform:React.FC = () => {
  const [tickets, setTickets] = useState<SupportTicket[]>(initialTickets);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState<TicketFormData>({
    name: '',
    email: '',
    propertyAddress: '',
    title: '',
    description: '',
    category: '',
    priority: '',
    images: []
  });

  // AI Triage Analysis
  const performAITriage = (formData: TicketFormData): { suggestion: string; shouldEscalate: boolean; escalationReason?: string } => {
    const urgentKeywords = ['emergency', 'urgent', 'broken', 'not working', 'stopped', 'leak', 'flooding', 'fire', 'gas', 'heating', 'cold'];
    const maintenanceUrgent = ['heating', 'cooling', 'water', 'electrical', 'gas', 'security'];
    
    const descLower = formData.description.toLowerCase();
    const titleLower = formData.title.toLowerCase();
    
    const hasUrgentKeyword = urgentKeywords.some(keyword => 
      descLower.includes(keyword) || titleLower.includes(keyword)
    );
    
    const isMaintenanceUrgent = formData.category === 'maintenance' && 
      maintenanceUrgent.some(keyword => descLower.includes(keyword) || titleLower.includes(keyword));
    
    let suggestion = '';
    let shouldEscalate = false;
    let escalationReason = '';
    
    if (formData.priority === 'urgent' || isMaintenanceUrgent) {
      suggestion = 'Emergency maintenance required. Recommend immediate technician dispatch. This is a habitability issue that requires prompt resolution.';
      shouldEscalate = true;
      escalationReason = 'Critical issue affecting property habitability';
    } else if (formData.category === 'payment') {
      suggestion = 'Contact tenant through Direct Messaging. Review payment history and set up payment plan if needed.';
    } else if (formData.category === 'legal') {
      suggestion = 'Guide user through legal documentation process. Ensure all required documents are properly signed.';
    } else if (formData.category === 'coliving') {
      suggestion = 'Review co-living agreement and facilitate communication between parties.';
    } else {
      suggestion = 'Standard support process. Review ticket details and assign to appropriate team member.';
    }
    
    return { suggestion, shouldEscalate, escalationReason };
  };

  // Handle form submission
  const handleCreateTicket = () => {
    if (!formData.name || !formData.email || !formData.title || !formData.description) {
      alert('Please fill in all required fields');
      return;
    }

    const aiAnalysis = performAITriage(formData);
    
    const newTicket: SupportTicket = {
      id: `24-${String(tickets.length + 1).padStart(3, '0')}`,
      title: formData.title,
      description: formData.description,
      status: 'open',
      priority: formData.priority as SupportTicket['priority'] || 'medium',
      category: formData.category as SupportTicket['category'] || 'other',
      propertyAddress: formData.propertyAddress,
      submittedBy: formData.name,
      email: formData.email,
      createdAt: new Date(),
      updatedAt: new Date(),
      escalated: aiAnalysis.shouldEscalate,
      aiSuggestion: aiAnalysis.suggestion,
      ...(aiAnalysis.shouldEscalate && {
        escalationReason: aiAnalysis.escalationReason,
        escalatedAt: new Date()
      })
    };

    setTickets([newTicket, ...tickets]);
    setFormData({
      name: '',
      email: '',
      propertyAddress: '',
      title: '',
      description: '',
      category: '',
      priority: '',
      images: []
    });
  };
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg border p-8">
          <h2 className="text-2xl font-bold mb-6">Create New Support Ticket</h2>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name*</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address*</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Property Address*</label>
              <input
                type="text"
                placeholder="Enter the property address"
                value={formData.propertyAddress}
                onChange={(e) => setFormData({...formData, propertyAddress: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Issue Title*</label>
              <input
                type="text"
                placeholder="Brief description of your issue"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Detailed Description*</label>
              <textarea
                placeholder="Provide detailed information about your issue....."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                rows={6}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              onClick={() => {
                const analysis = performAITriage(formData);
                alert(`AI Triage Analysis:\n\n${analysis.suggestion}\n\nEscalated: ${analysis.shouldEscalate ? 'Yes' : 'No'}`);
              }}
              className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
            >
              <AlertCircle className="w-5 h-5" />
              <span className="font-medium">AI Triage Analysis</span>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Category *</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select category</option>
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Priority *</label>
                <select
                  value={formData.priority}
                  onChange={(e) => setFormData({...formData, priority: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select Priority</option>
                  {priorities.map(pri => (
                    <option key={pri.value} value={pri.value}>{pri.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600 mb-1">Drag and drop your images here, or click to browse</p>
              <p className="text-sm text-gray-500">Support JPG, PNG. Maximum 10 images.</p>
            </div>

            <div className="flex justify-end gap-4">
              <button
                className="px-6 py-2 border rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateTicket}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Create Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticketform;