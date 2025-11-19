// LegalInfo.tsx
import React from "react";
import DocumentCard from "./DocumentCard";
import { documentsData } from "./data";

const LeaseAgreement: React.FC = () => {
  const filtered = documentsData.filter((doc) => doc.tab === "lease agreement");
  return <>{filtered.map((doc) => <DocumentCard key={doc.id} document={doc} />)}</>;
};
export default LeaseAgreement;

