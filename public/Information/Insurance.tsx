import React from "react";
import DocumentCard from "./DocumentCard";
import { documentsData } from "./data";

const Insurance: React.FC = () => {
  const filtered = documentsData.filter((doc) => doc.tab === "insurance");
  return <>{filtered.map((doc) => <DocumentCard key={doc.id} document={doc} />)}</>;
};

export default Insurance;
