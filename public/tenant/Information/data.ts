import type { StatusItem } from './StatusCard';

interface HistoryItem {
  title: string;
  content: string;
  day: string;
  type: 'info' | 'warning' | 'success' | 'error' | 'default';
}

export const historyItems: HistoryItem[] = [
  {
    title: 'Lease renewed with Sarah Johnson',
    content: '2-years extension at N5,890.067/month',
    day: 'Oct 2, 2025',
    type: 'success',
  },
  {
    title: 'Kitchen renovation completed',
    content: 'New appliances and countertops intsalled',
    day: 'Sep 15, 2025',
    type: 'warning',
  },
  {
    title: 'Property assessment updated',
    content: 'Market value increased to N3,754,874',
    day: 'Aug 22, 2025',
    type: 'info',
  },
  {
    title: 'Insurance claim processed',
    content: 'Water damage repair - N6,200,670 claim',
    day: 'Jul 10, 2025',
    type: 'error',
  },
];

export const statusItems: StatusItem[] = [
  {
    title: 'Occupancy Status',
    day: 'Lease active until Dec 31,2026',
    type: 'Good Condition',
  },
  {
    title: 'Maintenance Status',
    day: 'Last inspection: Jan 31,2026',
    type: 'review_due',
  },
  {
    title: 'Compliance Status',
    day: 'Annual safety check due Mar 17,2025',
    type: 'occupied',
  },
  // {
  //   title: 'Maintenance Status',
  //   day: 'Sep 15, 2025',
  //   type: 'review_due',
  //   label: 'Pending Review',
  // },
  // {
  //   title: 'Compliance Status',
  //   day: 'Aug 22, 2025',
  //   type: 'occupied',
  //   label: 'Tenant Active',
  // },
];

export type TabOption =
  | "all documents"
  | "lease agreement"
  | "legal docs"
  | "maintenance records"
  | "insurance";

export interface DocumentData {
  id: number;
  fileName: string;
  location: string;
  size: string;
  uploadedDate: string;
  status: "valid" | "incomplete";
  completeness: number;
  keyInfo: string;
  validityStatus: string;
  notes?: string;
  tab: TabOption;
}

export const documentsData: DocumentData[] = [
  {
    id: 1,
    fileName: "Lease Agreement - Sarah Johnson.pdf",
    location: "Sunset Villa #204",
    size: "2.4MB",
    uploadedDate: "Jul. 20, 2025",
    status: "valid",
    completeness: 95,
    keyInfo: "All fields detected",
    validityStatus: "Document Valid",
    tab: "lease agreement",
  },
  {
    id: 2,
    fileName: "Maintenance Report - Jul 2025.pdf",
    location: "Garden Heights #101",
    size: "856KB",
    uploadedDate: "Jul. 20, 2025",
    status: "incomplete",
    completeness: 75,
    keyInfo: "Missing signatures and dates",
    validityStatus: "Review Needed",
    notes:
      "AI has identified missing signatures and dates. Please review and complete the document.",
    tab: "maintenance records",
  },
  {
    id: 3,
    fileName: "Insurance Policy - Villa 2025.pdf",
    location: "Sunset Villa #204",
    size: "1.1MB",
    uploadedDate: "Jun. 30, 2025",
    status: "valid",
    completeness: 100,
    keyInfo: "Verified and up-to-date",
    validityStatus: "Policy Active",
    tab: "insurance",
  },
];
