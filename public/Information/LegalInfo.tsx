import React, { useState } from 'react';
import DropdownButton from './DropDownButton';

const LegalInfo: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleToggle = (key: string) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const sections = [
    { key: 'ownership', label: 'Ownership' },
    { key: 'taxid', label: 'Tax Id' },
    { key: 'zoning', label: 'Zoning' },
    { key: 'deeds', label: 'Deeds' },
    { key: 'lien', label: 'Lien' },
    { key: 'permits', label: 'Permits' },
  ];
  return (
    <div className="border border-[#DEDEE3] rounded-[10px] px-5 py-[32px]">
      <div>
        <h2 className="font-semibold">Legal Information</h2>
      </div>
      <p className="font-light text-[10px]">
        Official property documentation and legal status
      </p>
      {sections.map(({ key, label }) => (
        <DropdownButton
          key={key}
          label={label}
          onClick={() => handleToggle(key)}
          isOpen={openDropdown === key}
        />
      ))}
    </div>
  );
};

export default LegalInfo;
