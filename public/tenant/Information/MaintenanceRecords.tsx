import React from "react";
import DocumentCard from "./DocumentCard";
import { documentsData } from "./data";

const MaintenanceRecords: React.FC = () => {
  const filtered = documentsData.filter((doc) => doc.tab === "maintenance records");
  return <>{filtered.map((doc) => <DocumentCard key={doc.id} document={doc} />)}</>;
};

export default MaintenanceRecords;
