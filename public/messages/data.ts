import type { MessageItem } from './type';

export const messageItems: MessageItem[] = [
  {
    id: 1,
    fullName: 'John Fedrick',
    readStatus: false,
    title: 'Properties approved',
    content:
      'Lorem ipsum dolor sit amet consectetur. Motel nullam suspendisse dignissim vestibulum est tellus ut. Nulla ac diam aliquet odio id protetent enim  conect',
    daySent: '2025-08-13',
    timeSent: '09:15 AM',
    timeRead: '',
    timeReceived: '09:15 AM',
    messageType: 'inbox',
  },
  {
    id: 2,
    fullName: 'Mr Paul',
    readStatus: false,
    title: 'Inquiry',
    content:
      'Lorem ipsum dolor sit amet consectetur. Sit eget pretium orci massa nibh in. Nulla beren nunc interdum eget ut integer. Aenean ut pellentesque et augue.',
    daySent: '2025-08-12',
    timeSent: '11:05 AM',
    timeRead: '',
    timeReceived: '11:05 AM',
    messageType: 'inbox',
  },
  {
    id: 3,
    fullName: 'Microsoft account',
    readStatus: true,
    title: 'Dencing in the reln',
    content:
      'Lorem ipsum dolor sit amet consectetur. Sit eget pretium orci massa nibh in. Nulla beren nunc interdum eget ut integer. Aenean ut pellentesque et augue.',
    daySent: '2025-08-11',
    timeSent: '04:30 PM',
    timeRead: '04:35 PM',
    timeReceived: '04:30 PM',
    messageType: 'sent',
  },
  {
    id: 4,
    fullName: 'Mr Henry',
    readStatus: false,
    title: 'Dencing in the reln',
    content:
      'Lorem ipsum dolor sit amet consectetur. Sit eget pretium orci massa nibh in. Nulla beren nunc interdum eget ut integer. Aenean ut pellentesque et augue.',
    daySent: '2025-08-11',
    timeSent: '06:20 PM',
    timeRead: '',
    timeReceived: '06:20 PM',
    messageType: 'spam',
  },
  {
    id: 5,
    fullName: 'Olamide Paul',
    readStatus: true,
    title: 'Dencing in the reln',
    content:
      'Lorem ipsum dolor sit amet consectetur. Sit eget pretium orci massa nibh in. Nulla beren nunc interdum eget ut integer. Aenean ut pellentesque et augue.',
    daySent: '2025-08-10',
    timeSent: '08:45 AM',
    timeRead: '08:50 AM',
    timeReceived: '08:45 AM',
    messageType: 'inbox',
  },
  {
    id: 6,
    fullName: 'Fredrick Johnson',
    readStatus: true,
    title: 'Dencing in the reln',
    content:
      'Lorem ipsum dolor sit amet consectetur. Sit eget pretium orci massa nibh in. Nulla beren nunc interdum eget ut integer. Aenean ut pellentesque et augue.',
    daySent: '2025-08-09',
    timeSent: '02:30 PM',
    timeRead: '02:35 PM',
    timeReceived: '02:30 PM',
    messageType: 'sent',
  },
  {
    id: 7,
    fullName: 'Stve Album',
    readStatus: false,
    title: 'Dencing in the reln',
    content:
      'Lorem ipsum dolor sit amet consectetur. Sit eget pretium orci massa nibh in. Nulla beren nunc interdum eget ut integer. Aenean ut pellentesque et augue.',
    daySent: '2025-08-08',
    timeSent: '05:15 PM',
    timeRead: '',
    timeReceived: '05:15 PM',
    messageType: 'spam',
  },

  // 🔹 Additional 10 examples
  {
    id: 8,
    fullName: 'Janet Brown',
    readStatus: false,
    title: 'Property Inquiry',
    content:
      'Interested in the duplex listed in Lekki Phase 1. Can we arrange a viewing this week?',
    daySent: '2025-08-07',
    timeSent: '10:10 AM',
    timeRead: '',
    timeReceived: '10:10 AM',
    messageType: 'inbox',
  },
  {
    id: 9,
    fullName: 'Mark Anthony',
    readStatus: true,
    title: 'Follow-up',
    content:
      'Following up on my last message regarding property documentation. Awaiting your feedback.',
    daySent: '2025-08-07',
    timeSent: '12:50 PM',
    timeRead: '12:52 PM',
    timeReceived: '12:50 PM',
    messageType: 'sent',
  },
  {
    id: 10,
    fullName: 'Google Workspace',
    readStatus: false,
    title: 'Notification',
    content: 'Your business email subscription will expire in 3 days.',
    daySent: '2025-08-06',
    timeSent: '09:00 AM',
    timeRead: '',
    timeReceived: '09:00 AM',
    messageType: 'spam',
  },
  {
    id: 11,
    fullName: 'Sarah Connor',
    readStatus: true,
    title: 'Viewing Confirmed',
    content:
      'We have confirmed your property viewing appointment for Friday at 4 PM.',
    daySent: '2025-08-06',
    timeSent: '03:20 PM',
    timeRead: '03:22 PM',
    timeReceived: '03:20 PM',
    messageType: 'inbox',
  },
  {
    id: 12,
    fullName: 'Agent Mike',
    readStatus: true,
    title: 'New Listing',
    content:
      'Just uploaded new properties in Ajah for review. Please check them in your dashboard.',
    daySent: '2025-08-05',
    timeSent: '01:40 PM',
    timeRead: '01:42 PM',
    timeReceived: '01:40 PM',
    messageType: 'sent',
  },
  {
    id: 13,
    fullName: 'Property Manager',
    readStatus: false,
    title: 'Urgent',
    content:
      'Maintenance team needs to access the building tomorrow for scheduled repairs.',
    daySent: '2025-08-05',
    timeSent: '07:55 AM',
    timeRead: '',
    timeReceived: '07:55 AM',
    messageType: 'spam',
  },
  {
    id: 14,
    fullName: 'Booking Confirmation',
    readStatus: true,
    title: 'Confirmed',
    content:
      'Your booking for the 2-bedroom apartment in Ikoyi is now confirmed.',
    daySent: '2025-08-04',
    timeSent: '09:25 AM',
    timeRead: '09:27 AM',
    timeReceived: '09:25 AM',
    messageType: 'inbox',
  },
  {
    id: 15,
    fullName: 'Customer Support',
    readStatus: true,
    title: 'Support Ticket',
    content:
      'Your support request regarding payment issues has been received. We will get back to you shortly.',
    daySent: '2025-08-04',
    timeSent: '02:10 PM',
    timeRead: '02:15 PM',
    timeReceived: '02:10 PM',
    messageType: 'sent',
  },
  {
    id: 16,
    fullName: 'Jane Doe',
    readStatus: false,
    title: 'Recommendation',
    content:
      'I found a property that matches your criteria. Would you like me to send the details?',
    daySent: '2025-08-03',
    timeSent: '05:00 PM',
    timeRead: '',
    timeReceived: '05:00 PM',
    messageType: 'inbox',
  },
  {
    id: 17,
    fullName: 'Spam Alert',
    readStatus: false,
    title: 'Security',
    content:
      'We detected unusual activity in your account. Please review recent actions.',
    daySent: '2025-08-02',
    timeSent: '11:45 PM',
    timeRead: '',
    timeReceived: '11:45 PM',
    messageType: 'spam'
  },
];


// Define TableRow type
export type TableRow = {
  id: number;
  title: string;
  message: string;
  type: string;
  messageType: string;
};

// Sample notification data export
export const sampleData: TableRow[] = Array.from({ length: 57 }, (_, i) => ({
  id: i + 1,
  title: `Item Title ${i + 1}`,
  message: `This is a sample message for item ${i + 1}. It contains some detailed information that might be quite long and needs to be truncated in the table view.`,
  type: ['Primary', 'Secondary', 'Warning', 'Info'][i % 4],
  messageType: ['Email', 'SMS', 'Push', 'In-App'][i % 4],
}));