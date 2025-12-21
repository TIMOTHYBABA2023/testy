export interface SupportTicket {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: 'property' | 'maintenance' | 'payment' | 'legal' | 'coliving' | 'other';
  propertyAddress: string;
  submittedBy: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  escalated: boolean;
  aiSuggestion?: string;
  escalationReason?: string;
  escalatedAt?: Date;
}

export interface TicketStats {
  total: number;
  open: number;
  avgResponseTime: number;
  escalated: number;
}

export interface TicketFormData {
  name: string;
  email: string;
  propertyAddress: string;
  title: string;
  description: string;
  category: string;
  priority: string;
  images: File[];
}