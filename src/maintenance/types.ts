export type JobType = 'Plumbing' | 'Electrical' | 'HVAC' | 'Carpentry';
export type JobStatus = 'Pending' | 'In Progress' | 'Completed';
export type Priority = 'High' | 'Medium' | 'Low';

export interface MaintenanceRequest {
  id: string;
  title: string;
  address: string;
  requestedBy: string;
  requestDate: string;
  requestTime: string;
  type: JobType;
  status: JobStatus;
  priority?: Priority;
  urgencyType?: string;
}

export interface ActiveJob {
  id: string;
  title: string;
  propertyName: string;
  scheduledTime: string;
  scheduledDate: string;
  type: JobType;
  status: JobStatus;
  priority?: Priority;
}

export interface Property {
  name: string;
  address: string;
  manager: string;
  phone: string;
}

export interface Invoice {
  id: string;
  client: string;
  date: string;
  jobCount: number;
  amount?: number;
  status: 'Paid' | 'Pending';
}

export interface Conversation {
  id: string;
  userId: string;
  userName: string;
  lastMessage: string;
  timeAgo: string;
  unreadCount?: number;
}

export interface DashboardStats {
  activeJobs: number;
  changeFromLastWeek: number;
  averageRating: number;
  reviewCount: number;
  monthlyEarnings: number;
  earningsChange: number;
  completionRate: number;
  completionChange: number;
}

export interface AchievementBadge {
  name: string;
  description: string;
  earned: boolean;
  icon?: React.ReactNode;
}

export interface NoticeItem {
  id: string;
  title: string;
  content: string;
  date?: string;
}