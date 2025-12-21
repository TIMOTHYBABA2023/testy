import React, { useState } from "react";
import ToggleSwitchInput from "../../../reuseable/ui/ToggleSwitchInput";
import Button from "../../../reuseable/ui/Button";

const CookiePreference: React.FC = () => {
     const [toggle, setToggle] = useState(false);
      const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setToggle(e.target.checked);
      };
  return (
    <main className="space-y-6">
      <header>
        <h3 className="font-medium text-base xl:text-lg">Cookie Preferences</h3>
        <p className="font-light text-xs text-[#676C6C]">
          Manage your cookie settings and control how your data is used.
        </p>
      </header>
      <section className="border text-sm font-light border-[#E1E4EA] p-4 rounded-[12px] flex flex-col gap-4">
        <p>
          We use three kinds of cookies on our websites: required, functional,
          and advertising. You can choose whether functional and advertising
          cookies apply.{" "}
          <span className="underline text-[#676C6C] cursor-pointer">More information</span>
        </p>
        <p className="p-2 px-6 rounded-full border w-fit">
          Don’t sell or share my personal info
        </p>
        <h3 className="font-medium text-base xl:text-lg">
          Manage Consent Preferences
        </h3>
        <div className="flex justify-between items-center">
          <h5 className="text-base font-normal text-[#2F3639]">
            Required Cookies
          </h5>
          <p className="text-sm font-light">Always Active</p>
        </div>
        <p>
          Required cookies are necessary for basic website functionality. Some
          examples include: session cookies needed to transmit the website,
          authentication cookies, and security cookies.
        </p>
        <div className="flex justify-between items-center">
          <h5 className="text-base font-normal text-[#2F3639]">
            Functional Cookies
          </h5>
          <ToggleSwitchInput checked={toggle} onChange={handleToggle} />
        </div>
        <p>
          Functional cookies enhance functions, performance, and services on the
          website. Some examples include: cookies used to analyze site traffic,
          cookies used for market research, and cookies used to display
          advertising that is not directed to a particular individual.
        </p>
        <div className="flex justify-between items-center">
          <h5 className="text-base font-normal text-[#2F3639]">
            Advertising cookies
          </h5>
          <ToggleSwitchInput checked={toggle} onChange={handleToggle} />
        </div>
        <p>
          Advertising cookies track activity across websites in order to
          understand a viewer’s interests, and direct them specific marketing.
          Some examples include: cookies used for remarketing, or interest-based
          advertising.
        </p>
      </section>
      <Button text="Save" rounded="rounded-full" paddingY="py-1"/> 
    </main>
  );
};

export default CookiePreference;
