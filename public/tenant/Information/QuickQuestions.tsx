import React from 'react';

const questions = [
  'How do I handle a late rent payment?',
  'What are the eviction laws in Lagos?',
  'Can I increase rent during a lease term?',
  'Security deposit return requirements',
  'Tenant rights during property maintenance',
  'Breaking a lease agreement legally',
];

const QuickQuestions: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">
      <h3 className="text-[16px] font-medium mb-3 text-[#2F3639] flex items-center gap-2">
        💬 Quick Questions
      </h3>
      <p className="text-xs text-[#676C6C] font-light mb-4">
        Common legal questions for landlords
      </p>
      <ul className="space-y-6">
        {questions.map((q, idx) => (
          <li
            key={idx}
            className="text-sm text-blue-700 hover:underline cursor-pointer"
          >
            {q}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickQuestions;
