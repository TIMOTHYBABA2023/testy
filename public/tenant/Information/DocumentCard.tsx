import React from "react";
import { CheckCircle, AlertTriangle, Download, Trash2, FileText, Sparkles } from "lucide-react";
import type { DocumentData } from "./data";

interface Props {
  document: DocumentData;
}

const DocumentCard: React.FC<Props> = ({ document }) => {
  const isValid = document.status === "valid";

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 mt-5">
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <div className="p-3 bg-indigo-50 rounded-xl">
            <FileText className="text-indigo-600" size={22} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{document.fileName}</h3>
            <p className="text-sm text-gray-500">
              {document.location} • {document.size} • Uploaded {document.uploadedDate}
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {isValid ? (
                <>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle size={14} /> Verified
                  </span>
                  <span className="border border-green-600 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Valid
                  </span>
                </>
              ) : (
                <>
                  <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <AlertTriangle size={14} /> Incomplete
                  </span>
                  <span className="border border-orange-500 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Review Needed
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Sparkles size={14} /> {document.completeness}% Complete
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Download size={16} />
          </button>
          <button className="p-2 hover:bg-red-100 rounded-full">
            <Trash2 size={16} className="text-red-500" />
          </button>
        </div>
      </div>

      {!isValid && (
        <div className="bg-orange-50 border border-orange-100 text-orange-700 text-sm rounded-xl p-3 mt-4 flex items-start gap-2">
          <AlertTriangle size={16} className="mt-[2px]" />
          <p>
            <span className="font-medium">Missing information detected:</span>{" "}
            {document.notes}
          </p>
        </div>
      )}
    </div>
  );
};

export default DocumentCard;
