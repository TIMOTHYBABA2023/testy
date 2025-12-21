import type { AgencyStats, Document, FAQ, HomeLancer, Invoice, Lead, PerformanceMetrics, Project, PropertyOwner, Review } from "./types";


export const agencyStats: AgencyStats = {
  totalProjects: 564,
  projectsChange: 12,
  activeLeads: 50,
  leadsChange: 23,
  propertiesListed: 486,
  listedChange: 8,
  totalRevenue: 543456240,
  revenueChange: 15,
  activeProjects: 12,
  activeProjectsChange: 2,
  totalInvestors: 156,
  investorsChange: 24,
  conversionRate: 24.5,
  conversionChange: 3.2,
};

export const performanceMetrics: PerformanceMetrics = {
  propertiesSold: {
    current: 28,
    target: 35
  },
  investorEngagement: 92,
  revenueTarget: {
    current: 50_000_000,
    target: 300_000_000
  }
};

export const projects: Project[] = [
  {
    id: 'PROJ-001',
    name: 'Skyline Residences',
    location: 'Downtown District',
    bedrooms: 2,
    bathrooms: 4,
    sizeRange: '1200-2400 sqft',
    unitsSold: 120,
    totalUnits: 240,
    viewers: 1240,
    status: 'Active',
    tags: ['GETS'],
    revenue: 148800
  },
  {
    id: 'PROJ-002',
    name: 'Green Valley Homes',
    location: 'Suburban Area',
    bedrooms: 3,
    bathrooms: 4,
    sizeRange: '1800-2800 sqft',
    unitsSold: 48,
    totalUnits: 96,
    viewers: 890,
    status: 'Active',
    tags: ['GETS']
  },
  {
    id: 'PROJ-003',
    name: 'Marina Bay Apartments',
    location: 'Waterfront',
    bedrooms: 2,
    bathrooms: 3,
    sizeRange: '1200-2200 sqft',
    unitsSold: 200,
    totalUnits: 400,
    viewers: 2100,
    status: 'Pre Launch',
    tags: ['Free Launch']
  },
  {
    id: 'PROJ-004',
    name: 'Heritage Villas',
    location: 'Garden District',
    bedrooms: 4,
    bathrooms: 4,
    sizeRange: '2200-3200 sqft',
    unitsSold: 120,
    totalUnits: 240,
    viewers: 1340,
    status: 'Active',
    tags: ['GETS']
  }
];

export const propertyOwners: PropertyOwner[] = [
  {
    id: 'OWN-001',
    name: 'Robert Chen',
    email: 'robert.chen@email.com',
    phone: '07028545678',
    projectCount: 3,
    verified: true
  },
  {
    id: 'OWN-002',
    name: 'Michael Torres',
    email: 'sanderson@email.com',
    phone: '09145456789',
    projectCount: 5,
    verified: false
  },
  {
    id: 'OWN-003',
    name: 'Sarah Anderson',
    email: 'm.torres@email.com',
    phone: '07085457890',
    projectCount: 2,
    verified: true
  }
];

export const recentLeads: Lead[] = [
  {
    id: 'LEAD-001',
    name: 'Sarah Johnson',
    project: 'Skyline Residences',
    source: 'News app',
    date: '1 hour ago'
  },
  {
    id: 'LEAD-002',
    name: 'Michael Chen',
    project: 'Green Valley Homes',
    source: 'News app',
    date: '1 day ago'
  },
  {
    id: 'LEAD-003',
    name: 'Emma Williams',
    project: 'Marina Bay Apartments',
    source: 'Low app',
    date: '3 days ago'
  }
];

export const homeLancers: HomeLancer[] = [
  {
    id: 'LAN-001',
    name: 'Robert Chen',
    specialty: 'Interior Design',
    rating: 4.9,
    reviewCount: 127,
    location: 'Lagos State',
    rate: 56876
  },
  {
    id: 'LAN-002',
    name: 'James Wilson',
    specialty: 'Home Renovation',
    rating: 4.9,
    reviewCount: 127,
    location: 'Lagos State',
    rate: 56876
  },
  {
    id: 'LAN-003',
    name: 'Emma Thompson',
    specialty: 'Landscaping',
    rating: 4.9,
    reviewCount: 127,
    location: 'Lagos State',
    rate: 56876
  },
  {
    id: 'LAN-004',
    name: 'Sophia Chen',
    specialty: 'Property Styling',
    rating: 4.9,
    reviewCount: 127,
    location: 'Lagos State',
    rate: 56876
  }
];

export const reviews: Review[] = [
  {
    id: 'REV-001',
    reviewerName: 'John Smith',
    project: 'Sunset Gardens',
    date: '2d ago',
    rating: 5,
    title: 'Excellent location and amazing amenities',
    content: 'Living here has been fantastic! The management team is super responsive, and the amenities are well-maintained. The fitness center is always clean, and the pool area is beautiful. Would definitely recommend to anyone looking for a quality place to live.'
  },
  {
    id: 'REV-002',
    reviewerName: 'Sarah Williams',
    project: 'Urban Heights',
    date: '2d ago',
    rating: 4,
    title: 'Great investment opportunity',
    content: 'Great investment opportunity. Communication could be improved but overall satisfied. Living here has been fantastic! The management team is super responsive, and the amenities are well-maintained.'
  },
  {
    id: 'REV-003',
    reviewerName: 'Mike Chen',
    project: 'Green Valley',
    date: '2d ago',
    rating: 5,
    title: 'Perfect for families',
    content: 'Perfect for families. The team helped us find exactly what we were looking for. Living here has been fantastic! The management team is super responsive, and the amenities are well-maintained.'
  }
];

export const documents: Document[] = [
  {
    id: 'DOC-001',
    title: 'Getting Started Guide',
    description: 'Learn how to set up your first project',
    fileType: 'guide'
  },
  {
    id: 'DOC-002',
    title: 'Legal Documentation',
    description: 'Property laws and compliance guides',
    fileType: 'pdf'
  },
  {
    id: 'DOC-003',
    title: 'Investment Guide',
    description: 'Help investors understand the process',
    fileType: 'guide'
  },
  {
    id: 'DOC-004',
    title: 'Frequently Asked Questions',
    description: 'Common questions about our platform'
  }
];

export const faqs: FAQ[] = [
  {
    id: 'FAQ-001',
    question: 'How do I add a new project?'
  },
  {
    id: 'FAQ-002',
    question: 'How can investors purchase plot?'
  },
  {
    id: 'FAQ-003',
    question: 'What document are required for property listing?'
  },
  {
    id: 'FAQ-004',
    question: 'How do I manage maintenance request?'
  }
];

export const agencyInvoices: Invoice[] = [
  {
    id: 'INV-001',
    client: 'Property Management Co.',
    date: '2025-02-25',
    jobCount: 3,
    status: 'Paid'
  },
  {
    id: 'INV-002',
    client: 'Riverside Apartments',
    date: '2025-02-28',
    jobCount: 2,
    status: 'Paid'
  },
  {
    id: 'INV-003',
    client: 'Downtown Residences',
    date: '2025-02-30',
    jobCount: 2,
    status: 'Pending'
  }
];

export const earningsData = {
  currentMonth: 888450,
  monthChange: 12,
  pendingInvoices: {
    count: 2,
    amount: 76595
  },
  thisMonth: 670980,
  breakdown: {
    expert: 76000,
    premium: 78679,
    basic: 65432
  }
};

export const averageRating = {
  score: 4.8,
  reviewCount: 127
};