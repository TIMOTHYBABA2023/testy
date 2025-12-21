import React from 'react';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { Card } from '../../maintenance/Card';
import { documents, faqs } from '../data';
import { Button } from '../../maintenance/Button';

export const DocumentsFAQCard: React.FC = () => {
  const getFileIcon = (fileType?: string) => {
    switch (fileType) {
      case 'pdf':
        return '📄';
      case 'doc':
        return '📝';
      case 'guide':
        return '📘';
      default:
        return '📄';
    }
  };

  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Resources</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-medium text-gray-900 mb-4">Documentation</h3>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{getFileIcon(doc.fileType)}</span>
                  <div>
                    <h4 className="font-medium text-gray-900">{doc.title}</h4>
                    <p className="text-sm text-gray-600">{doc.description}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <DocumentArrowDownIcon className="h-5 w-5" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <h3 className="font-medium text-gray-900 mb-4">Frequently Asked Questions</h3>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.id} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <h4 className="font-medium text-gray-900">{faq.question}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};