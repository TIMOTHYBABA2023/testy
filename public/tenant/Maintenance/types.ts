export interface Request {
    id: string;
    title: string;
    priority: 'Low' | 'Medium' | 'High';
    description: string;
    category: string;
    location: string;
    createdAt: string;
    updatedAt: string;
    status: 'Pending' | 'In progress' | 'Escalated' | 'Resolved';
  }
  