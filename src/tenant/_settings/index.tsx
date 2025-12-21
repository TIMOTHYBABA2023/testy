import React, { useState } from "react";
import { LuUserRoundPen } from "react-icons/lu";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import Profile from "./EditProfile";
import YourAccount from "./YourAccount";
import PropertyPreferences from "./PropertyPreferences";
import Notifications from "./Notifications";
import { PiBellSimpleZ } from "react-icons/pi";
import { TfiCommentsSmiley } from "react-icons/tfi";
import CookiePreference from "./CookiePreference";

const tabsBeforeDivider = [
  { label: "Edit Profile", value: "profile", icon: <LuUserRoundPen /> },
  { label: "Your Account", value: "yourAccount", icon: <HiOutlineUser /> },
  {
    label: "Property Preferences",
    value: "propertyPreferences",
    icon: <HiOutlineSpeakerphone />,
  },
  { label: "Notifications", value: "notification", icon: <PiBellSimpleZ /> },
];

const tabsAfterDivider = [
  {
    label: "Cookie Preferences",
    value: "cookiePreferences",
    icon: <TfiCommentsSmiley />,
  },
];

const TenantSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderTabContent = () => {
    switch (activeTab) {
      case "yourAccount":
        return <YourAccount />;
      case "propertyPreferences":
        return <PropertyPreferences />;
      case "notification":
        return <Notifications />;
      case "cookiePreferences":
        return <CookiePreference />;
      default:
        return <Profile />;
    }
  };

  const renderButton = (tab: any) => (
    <button
      key={tab.value}
      className={`text-sm px-3 py-2 w-full items-center flex gap-1  ${
        activeTab === tab.value
          ? "text-[#232AAB] border-b-2 bg-[#E1E4EA] rounded-[8px]"
          : "text-[#676C6C] font-light"
      }`}
      onClick={() => setActiveTab(tab.value)}
    >
      <span>{tab.icon}</span>
      <p>{tab.label}</p>
    </button>
  );

  return (
    <main className="flex gap-6 flex-col md:flex-row items-start">
      <section className="rounded-[12px] p-3 bg-white w-full md:max-w-[264px] shadow-md flex flex-col gap-2 h-fit md:sticky  self-start">
        {tabsBeforeDivider.map(renderButton)}
        <hr className="border-t border-[#d1d5db] my-2" />
        {tabsAfterDivider.map(renderButton)}
      </section>
      <section className="rounded-[12px] p-3 scrollbar-none bg-white w-full shadow-sm overflow-y-auto max-h-[calc(100vh-2rem)]">
        {renderTabContent()}
      </section>
    </main>
  );
};

export default TenantSettings;
