export interface Message {
    id: number;
    sender: string;
    subject: string;
    message: string;
    time: string;
    status: 'New' | 'Read' | 'Sent';
  }
  