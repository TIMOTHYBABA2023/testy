import type {
  MaintenanceRequest,
  ActiveJob,
  Property,
  Invoice,
  Conversation,
  DashboardStats,
  AchievementBadge,
  NoticeItem,
} from './types';

export const maintenanceRequests: MaintenanceRequest[] = [
  {
    id: 'REC9-001',
    title: 'Kitchen Sink Blockage',
    address: 'Sunset Boulevard Apt 5C',
    requestedBy: 'John Smith',
    requestDate: '2025-10-31',
    requestTime: '2:00 PM',
    type: 'Plumbing',
    status: 'Pending',
    priority: 'High',
    urgencyType: 'Urgent',
  },
  {
    id: 'REC9-002',
    title: 'Ceiling Fan Installation',
    address: 'River View House',
    requestedBy: 'Sarah Johnson',
    requestDate: '2025-11-01',
    requestTime: '10:00 AM',
    type: 'Electrical',
    status: 'Pending',
    priority: 'Medium',
    urgencyType: 'Scheduled',
  },
  {
    id: 'REC9-003',
    title: 'Closet Door Adjustment',
    address: 'Park Lane Condo BA',
    requestedBy: 'Michael Brown',
    requestDate: '2025-11-02',
    requestTime: '3:30 PM',
    type: 'Plumbing',
    status: 'Pending',
    priority: 'Low',
    urgencyType: 'New',
  },
];

export const activeJobs: ActiveJob[] = [
  {
    id: 'JOB-001',
    title: 'Leaking Faucet Repair',
    propertyName: 'Maple Street Apartment 48',
    scheduledDate: 'Today',
    scheduledTime: '2:00 PM',
    type: 'Plumbing',
    status: 'Pending',
    priority: 'High',
  },
  {
    id: 'JOB-002',
    title: 'AC Unit Maintenance',
    propertyName: 'Oak Avenue House',
    scheduledDate: 'Today',
    scheduledTime: '11:00 AM',
    type: 'HVAC',
    status: 'In Progress',
    priority: 'Medium',
  },
  {
    id: 'JOB-003',
    title: 'Door Lock Installation',
    propertyName: 'Pine Road Condo 12',
    scheduledDate: 'Today',
    scheduledTime: '9:00 AM',
    type: 'Carpentry',
    status: 'In Progress',
    priority: 'Low',
  },
  {
    id: 'JOB-004',
    title: 'Electrical Outlet Repair',
    propertyName: 'Elm Street Townhouse',
    scheduledDate: 'Today',
    scheduledTime: '8:00 AM',
    type: 'Electrical',
    status: 'Completed',
    priority: 'High',
  },
];

export const properties: Property[] = [
  {
    name: 'Maple Street Apartments',
    address: '123 Maple St, Unit 48',
    manager: 'Jane Cooper',
    phone: '(090) 123-4567',
  },
  {
    name: 'Oak Avenue House',
    address: '456 Oak Ave',
    manager: 'Tom Wilson',
    phone: '(705) 234-5678',
  },
];

export const invoices: Invoice[] = [
  {
    id: 'INV-001',
    client: 'Property Management Co.',
    date: '2025-10-23',
    jobCount: 7,
    status: 'Paid',
    amount: 76000,
  },
  {
    id: 'INV-002',
    client: 'Riverside Apartments',
    date: '2025-10-29',
    jobCount: 2,
    status: 'Paid',
        amount: 15000,

  },
  {
    id: 'INV-003',
    client: 'Downtown Residences',
    date: '2025-10-30',
    jobCount: 2,
    status: 'Pending',
        amount: 78000,

  },
];

export const conversations: Conversation[] = [
  {
    id: '1',
    userId: 'JS',
    userName: 'John Smith',
    lastMessage: 'Thank you for the quick service!',
    timeAgo: '10 min ago',
    unreadCount: 2,
  },
  {
    id: '2',
    userId: 'SJ',
    userName: 'Sarah Johnson',
    lastMessage: 'When can you start the installation?',
    timeAgo: '1 hour ago',
    unreadCount: 0,
  },
  {
    id: '3',
    userId: 'MB',
    userName: 'Michael Brown',
    lastMessage: 'The cabinet looks great!',
    timeAgo: '2 hours ago',
    unreadCount: 2,
  },
];

export const dashboardStats: DashboardStats = {
  activeJobs: 12,
  changeFromLastWeek: 3,
  averageRating: 4.8,
  reviewCount: 156,
  monthlyEarnings: 3456240,
  earningsChange: 12,
  completionRate: 96,
  completionChange: 2,
};

export const achievementBadges: AchievementBadge[] = [
  {
    name: 'Top Rated',
    description: 'Maintained 4.5+ rating',
    earned: true,
  },
  {
    name: 'Fast Responder',
    description: 'Response time under 1 hour',
    earned: true,
  },
  {
    name: 'Reliable Pro',
    description: '95% completion rate',
    earned: true,
  },
  {
    name: '100 Jobs Milestone',
    description: 'Complete 100 jobs',
    earned: false,
  },
  {
    name: 'Customer Favorite',
    description: '50+ five-star reviews',
    earned: false,
  },
];

export const notices: NoticeItem[] = [
  {
    id: '1',
    title: 'Platform Maintenance Scheduled',
    content:
      'System maintenance will occur on Nov 5th from 2-4 AM EST. Services may be briefly unavailable.',
    date: '2025-11-05',
  },
  {
    id: '2',
    title: 'New Payment Method Available',
    content:
      'We now support instant bank transfers for faster payment processing.',
    date: '2025-11-05',
  },
  {
    id: '3',
    title: 'Policy Update Reminder',
    content: 'Please review the updated terms of service by November 10th.',
    date: '2025-11-05',
  },
];

export const monthlyEarnings = {
  total: 888450,
  change: 15,
  breakdown: {
    expert: 76000,
    premium: 78679,
    basic: 65432,
  },
};
