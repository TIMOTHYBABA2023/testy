import type { ChatMessageType, Property } from "./types";

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    location: "Banana Island, Lagos",
    price: "₦5,000,000/mo",
    status: "Pending",
    verified: true,
    beds: 2,
    like: false,
    locked: true,
    baths: 2,
    size: "1200 sqft",
    tags: ["WiFi", "Parking", "Gym"],
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
  },
  {
    id: 2,
    title: "Cozy Studio with Garden View",
    location: "Green Valley, Suburbs",
    price: "₦5,000,000/mo",
    status: "Pending",
    verified: true,
    beds: 1,
    like: true,
    locked: false,
    baths: 1,
    size: "1200 sqft",
    tags: ["Garden", "Balcony", "WiFi"],
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    id: 3,
    title: "Luxury Penthouse Suite",
    location: "Riverside, Premium District",
    price: "₦5,000,000/mo",
    status: "Available",
    verified: true,
    like: false,
    locked: true,
    beds: 1,
    baths: 1,
    size: "1200 sqft",
    tags: ["Concierge", "Spa", "Rooftop", "Wifi", "Pool"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
];

export const initialMessages: ChatMessageType[] = [
  {
    id: 1,
    sender: "user",
    text: "I have a tenant who wants to break their lease early. What are my options?",
    time: "2:33PM",
  },
  {
    id: 2,
    sender: "assistant",
    text: `I can help you understand your options for early lease termination. Based on standard lease agreements, here are the key points to consider:
1. **Review your lease terms** - Check for early termination clauses
2. **State laws** - Florida has specific tenant protection laws
3. **Acceptable reasons** - Job relocation, military deployment, or domestic violence are often protected
4. **Financial implications** - Typically 1-2 months rent penalty
1. **Review your lease terms** - Check for early termination clauses
2. **State laws** - Florida has specific tenant protection laws
3. **Acceptable reasons** - Job relocation, military deployment, or domestic violence are often protected
4. **Financial implications** - Typically 1-2 months rent penalty
1. **Review your lease terms** - Check for early termination clauses
2. **State laws** - Florida has specific tenant protection laws
3. **Acceptable reasons** - Job relocation, military deployment, or domestic violence are often protected
4. **Financial implications** - Typically 1-2 months rent penalty
1. **Review your lease terms** - Check for early termination clauses
2. **State laws** - Florida has specific tenant protection laws
3. **Acceptable reasons** - Job relocation, military deployment, or domestic violence are often protected
4. **Financial implications** - Typically 1-2 months rent penalty
1. **Review your lease terms** - Check for early termination clauses
2. **State laws** - Florida has specific tenant protection laws
3. **Acceptable reasons** - Job relocation, military deployment, or domestic violence are often protected
4. **Financial implications** - Typically 1-2 months rent penalty
1. **Review your lease terms** - Check for early termination clauses
2. **State laws** - Florida has specific tenant protection laws
3. **Acceptable reasons** - Job relocation, military deployment, or domestic violence are often protected
4. **Financial implications** - Typically 1-2 months rent penalty

Would you like me to review your specific lease agreement or escalate this to our legal team for detailed advice?`,
  },
];
