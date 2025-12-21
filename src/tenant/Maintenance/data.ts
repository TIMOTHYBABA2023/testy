import type { Request } from "./types";

export const sampleData: Request[] = [
    {
      id: 'REQ-002',
      title: 'Leaking Kitchen Faucet',
      priority: 'Medium',
      description: 'The kitchen faucet has been leaking for 2 days.',
      category: 'Plumbing',
      location: 'Sunset Apartments, Unit 204 • ID: REQ-002',
      createdAt: '1/18/2025',
      updatedAt: '1/16/2025',
      status: 'In progress',
    },
    {
      id: 'REQ-003',
      title: 'Broken Window Lock',
      priority: 'High',
      description: 'Air conditioning stopped working completely.',
      category: 'HVAC',
      location: 'Sunset Apartments, Unit 204 • ID: REQ-002',
      createdAt: '1/18/2025',
      updatedAt: '1/16/2025',
      status: 'Pending',
    },
    {
      id: 'REQ-001',
      title: 'AC Not Working',
      priority: 'Low',
      description: 'Living room window lock is broken, security concern.',
      category: 'Security',
      location: 'Sunset Apartments, Unit 204 • ID: REQ-002',
      createdAt: '1/18/2025',
      updatedAt: '1/16/2025',
      status: 'Escalated',
    },
  ];
  