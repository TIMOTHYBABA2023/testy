import React, { useState } from "react";
import { MessageChatImage4 } from "../../../assets/images";
import Button from "../../../reuseable/ui/Button";
import { LuUserPen } from "react-icons/lu";
import FormInput from "../../../reuseable/ui/FormInput";
import ToggleSwitchInput from "../../../reuseable/ui/ToggleSwitchInput";

const EditProfile: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToggle(e.target.checked);
  };
  return (
    <form className="flex flex-col gap-6">
      <header>
        <h3 className="font-medium text-base xl:text-lg">Edit Profile</h3>
        <p className="font-light text-xs text-[#676C6C]">
          Manage name, role, email, password, and SSO settings.
        </p>
      </header>
      <section className="border border-[#E1E4EA] p-4 rounded-[12px] flex justify-between items-end">
        <figure>
          <img src={MessageChatImage4} alt="Profile img" />
          <figcaption className=" mt-2">
            <p className="font-normal text-base text-[#2F3639]">
              Profile Picture
            </p>
            <p className="font-light text-xs text-[#676C6C]">
              PNG, JPEG, under 15 MB
            </p>
          </figcaption>
        </figure>
        <div className="flex gap-4 items-center">
          <Button
            text="Upload Profile"
            bgColor="bg-white"
            borderColor="border-[#E1E4EA]"
            hoverColor="bg-none"
            rounded="rounded-full"
            textColor="text-[#676C6C]"
            fontWeight="font-normal"
            fontSize="text-xs"
            paddingY="py-1"
            paddingX="px-3"
          />
          <Button
            text="Delete"
            bgColor="bg-[#FEEEEA]"
            hoverColor="bg-none"
            borderColor="border-none"
            rounded="rounded-full"
            textColor="text-[#6F2612]"
            fontWeight="font-normal"
            fontSize="text-xs"
            paddingY="py-1"
            paddingX="px-3"
          />
        </div>
      </section>
      <main className="border border-[#E1E4EA] p-4 rounded-[12px]">
        <header className="flex justify-between items-center">
          <h3 className="font-medium text-lg">Personal Details</h3>
          {/* <p> */}
          <LuUserPen size={20} />
          {/* </p> */}
        </header>
        <section>
          <ul className="">
            <li className="flex items-center gap-4 ">
              <div className="flex-1">
                <FormInput
                  placeholder="Richard"
                  label="First Name"
                  rounded="rounded-full"
                />
              </div>
              <div className="flex-1">
                <FormInput
                  placeholder="Okafor"
                  label="Last Name"
                  rounded="rounded-full"
                />
              </div>
            </li>
            <li className="flex items-center gap-4 ">
              <div className="flex-1">
                <FormInput
                  placeholder="RichardOkafor"
                  label="Username"
                  rounded="rounded-full"
                />
              </div>
              <div className="flex-1">
                <FormInput
                  placeholder="richardokafor@example.com"
                  label="Email"
                  type="email"
                  rounded="rounded-full"
                />
              </div>
            </li>
            <li className="flex items-center gap-4 ">
              <div className="flex-1">
                <FormInput
                  placeholder="Lagos, Island"
                  label="Location"
                  rounded="rounded-full"
                />
              </div>
              <div className="flex-1">
                <FormInput
                  placeholder="08016011630"
                  label="Phone Number"
                  type="phone"
                  rounded="rounded-full"
                />
              </div>
            </li>
            <li>
              <FormInput
                placeholder="Write your Bio here"
                label="Bio"
                type="text"
                rounded="rounded-full"
              />
            </li>
            <li className="flex justify-between items-start">
              <div className="">
                <h4 className="font-medium text-base leading-[24px]">
                  Public Account
                </h4>
                <p className="text-[#676C6C] font-light text-sm">
                  Public: Everyone sees your profile and content.
                </p>
              </div>
              <aside>
                <ToggleSwitchInput checked={toggle} onChange={handleToggle} />
              </aside>
            </li>
          </ul>
        </section>
      </main>
      <div className="flex justify-start">
        <Button text="Save Changes" rounded="rounded-full" paddingY="py-1" />
      </div>
    </form>
  );
};

export default EditProfile;
