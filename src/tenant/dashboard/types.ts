export interface Property {
    id: number;
    title: string;
    location: string;
    price: string;
    status: "Available" | "Pending" | "Sold";
    verified: boolean;
    like: boolean;
    locked: boolean;
    beds: number;
    baths: number;
    size: string;
    tags: string[];
    image: string;
    aiPowered?: any;
    sharing?: any;
  }

  export interface ChatMessageType {
    id: number;
    sender: "user" | "assistant";
    text: string;
    time?: string;
  }
  