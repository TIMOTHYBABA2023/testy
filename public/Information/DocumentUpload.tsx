import React from 'react';
import { Upload } from 'lucide-react';
import { FaWandMagicSparkles } from 'react-icons/fa6';

const DocumentUpload: React.FC = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <h2 className="text-[14px] font-medium text-[#21242C] flex items-center gap-2">
        <Upload className="text-indigo-500" size={16} color='#232AAB' /> Document Upload
      </h2>
      <p className="text-[#676C6C] text-[12px] font-light mt-1 mb-4">
        Drag and drop files or click to browse. AI will automatically scan for
        completeness and validity.
      </p>

      <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center hover:border-indigo-400 transition cursor-pointer flex flex-col gap-2">
        <Upload className="text-gray-400 mx-auto mb-3" size={56} />
        <p className="font-medium text-[#21242C] text-[12px]">
          Upload your documents
        </p>
        <p className="text-[12px] text-[#676C6C] font-light">
          PDF, DOC, DOCX, JPG files up to 10MB
        </p>
        <div className="flex items-center justify-center gap-1 mt-3 text-[10px] text-[#21242C] font-light">
          <FaWandMagicSparkles color="#232AAB" size={16} />
          AI-powered document analysis included
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
