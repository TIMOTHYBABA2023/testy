import type { SupportTicket } from "./types";

export const initialTickets: SupportTicket[] = [
  {
    id: '24-001',
    title: 'Heating system not working in rental property',
    description: 'The heating system in my rental property at 123 Oak Street has stopped working. Tenants are complaining and it\'s getting cold. This needs urgent attention as Harmattan is approaching.',
    status: 'open',
    priority: 'urgent',
    category: 'maintenance',
    propertyAddress: '123 Oak street, Downtown District',
    submittedBy: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 30 * 60 * 1000),
    escalated: true,
    aiSuggestion: 'Emergency maintenance required. Recommend immediate HVAC technician dispatch. This is a habitability issue that requires prompt resolution.',
    escalationReason: 'Critical heating issues affecting tenant habitability',
    escalatedAt: new Date(Date.now() - 30 * 60 * 1000)
  },
  {
    id: '24-002',
    title: 'Lease agreement signature needed',
    description: 'Need assistance with digital signature on lease agreement for new tenant.',
    status: 'open',
    priority: 'medium',
    category: 'legal',
    propertyAddress: '456 Pine Avenue, Midtown',
    submittedBy: 'Michael Chen',
    email: 'mchen@email.com',
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    escalated: false,
    aiSuggestion: 'Guide user through digital signature process in Legal Documentation section.'
  },
  {
    id: '24-003',
    title: 'Payment processing issue',
    description: 'Rent payment from tenant bounced, need help with payment recovery process.',
    status: 'in-progress',
    priority: 'high',
    category: 'payment',
    propertyAddress: '789 Elm Street, Westside',
    submittedBy: 'Jennifer Lopez',
    email: 'jlopez@email.com',
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    escalated: false,
    aiSuggestion: 'Contact tenant through Direct Messaging. Set up payment plan if needed.'
  }
];

export const categories = [
  { value: 'property', label: 'Property Management' },
  { value: 'maintenance', label: 'Maintenance Services' },
  { value: 'payment', label: 'Payment Solutions' },
  { value: 'legal', label: 'Legal Documentation' },
  { value: 'coliving', label: 'Co-living Solutions' },
  { value: 'other', label: 'Other' }
];

export const priorities = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'urgent', label: 'Urgent' }
];