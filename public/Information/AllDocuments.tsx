import React from "react";
import DocumentCard from "./DocumentCard";
import { documentsData } from "./data";

const AllDocuments: React.FC = () => {
  return (
    <div>
      {documentsData.map((doc) => (
        <DocumentCard key={doc.id} document={doc} />
      ))}
    </div>
  );
};

export default AllDocuments;
