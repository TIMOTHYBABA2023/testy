import React from 'react';

const DropdownButton: React.FC<{ label: string; onClick: () => void; isOpen: boolean }> = ({ label, onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between border-b border-[#676C6C99] py-3"
    >
      <span className="block text-[13px] font-light text-[#676C6C]">
        {label}
      </span>
      <svg
        className={`${isOpen ? 'rotate-180' : ''}`}
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default DropdownButton;
