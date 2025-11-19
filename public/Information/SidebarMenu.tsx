import React, { type JSX } from "react";
import { FiInfo, FiDownload, FiClipboard, FiFileText, FiHelpCircle } from "react-icons/fi";

type SidebarOption = 'Property Info' | 'House Documents' | 'Notice Board' | 'Agreements' | 'Ask for Legal';

interface SidebarMenuProps {
  active: SidebarOption;
  setActive: React.Dispatch<React.SetStateAction<SidebarOption>>;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ active, setActive }) => {
  const menuItems: { name: SidebarOption; icon: JSX.Element }[] = [
    { name: "Property Info", icon: <FiInfo /> },
    { name: "House Documents", icon: <FiDownload /> },
    { name: "Notice Board", icon: <FiClipboard /> },
    { name: "Agreements", icon: <FiFileText /> },
    { name: "Ask for Legal", icon: <FiHelpCircle /> },
  ];

  return (
    <div className="w-60 bg-white shadow rounded-xl p-3">
      <ul className="space-y-1">
        {menuItems.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => setActive(item.name)}
              className={`flex items-center w-full px-3 py-2 rounded-lg text-sm font-medium transition 
                ${active === item.name
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-gray-500 hover:bg-gray-100"
                }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.name}
            </button>
            {item.name === "Agreements" && <hr className="my-2 border-gray-200" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
