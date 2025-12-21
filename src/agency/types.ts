export type ProjectStatus = 'Pre Launch' | 'Active';
export type LancerSpecialty = 'Interior Design' | 'Home Renovation' | 'Landscaping' | 'Property Styling';
export type LeadSource = 'News app' | 'Low app' | 'Web' | 'Referral';

export interface Project {
  id: string;
  name: string;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  sizeRange: string;
  unitsSold: number;
  totalUnits: number;
  pricePerUnit?: number;
  viewers?: number;
  status: ProjectStatus;
  tags?: string[];
  revenue?: number;
}

export interface PropertyOwner {
  id: string;
  name: string;
  email: string;
  phone: string;
  projectCount: number;
  avatar?: string;
  verified: boolean;
}

export interface Lead {
  id: string;
  name: string;
  project: string;
  source: LeadSource;
  date: string;
}

export interface HomeLancer {
  id: string;
  name: string;
  specialty: LancerSpecialty;
  rating: number;
  reviewCount: number;
  location: string;
  rate: number;
  avatar?: string;
}

export interface Review {
  id: string;
  reviewerName: string;
  project: string;
  date: string;
  rating: number;
  title: string;
  content: string;
}

export interface Document {
  id: string;
  title: string;
  description: string;
  fileType?: 'pdf' | 'doc' | 'guide';
}

export interface FAQ {
  id: string;
  question: string;
  answer?: string;
}

export interface AgencyStats {
  totalProjects: number;
  projectsChange: number;
  activeLeads: number;
  leadsChange: number;
  propertiesListed: number;
  listedChange: number;
  totalRevenue: number;
  revenueChange: number;
  activeProjects: number;
  activeProjectsChange: number;
  totalInvestors: number;
  investorsChange: number;
  conversionRate: number;
  conversionChange: number;
}

export interface PerformanceMetrics {
  propertiesSold: {
    current: number;
    target: number;
  };
  investorEngagement: number;
  revenueTarget: {
    current: number;
    target: number;
  };
}

export interface Invoice {
  id: string;
  client: string;
  date: string;
  jobCount: number;
  amount?: number;
  status: 'Paid' | 'Pending';
}