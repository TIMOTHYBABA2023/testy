import React from "react";
import DocumentCard from "./DocumentCard";
import { documentsData } from "./data";

const LegalDocs: React.FC = () => {
  const filtered = documentsData.filter((doc) => doc.tab === "legal docs");
  return <>{filtered.map((doc) => <DocumentCard key={doc.id} document={doc} />)}</>;
};
export default LegalDocs;