export interface MessageItem {
  id: number;
  fullName: string;
  readStatus: boolean;
  title: string;
  content: string;
  daySent: string;
  timeSent: string;
  timeRead?: string;
  timeReceived: string;
  messageType: 'inbox' | 'sent' | 'draft' | 'spam';
}

export interface TableRow {
  id: number;
  title: string;
  message: string;
  type: string;
  messageType: string;
}

export interface DataTableProps {
  data: TableRow[];
  rowsPerPageOptions?: number[];
  initialRowsPerPage?: number;
}