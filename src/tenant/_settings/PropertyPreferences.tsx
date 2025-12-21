import React, { useState } from "react";
import FormInput from "../../../reuseable/ui/FormInput";
import Button from "../../../reuseable/ui/Button";
import { FiSearch } from "react-icons/fi";

const PropertyPreferences: React.FC = () => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  console.log(showAddressForm);

  const info = [
    {
      title: "Default Lease Terms",
      description: "Grace period for rent payment",
      button: (
        <Button
          text="Add"
          bgColor="bg-white"
          borderColor="border-[#E1E4EA]"
          hoverColor="bg-none"
          rounded="rounded-full"
          textColor="text-[#676C6C]"
          fontWeight="font-normal"
          fontSize="text-xs"
          paddingY="py-2"
          paddingX="px-3"
        />
      ),
    },
    {
      title: "Rent & Billing Rules",
      description: "Late free setup",
      button: (
        <Button
          text="Add"
          bgColor="bg-white"
          borderColor="border-[#E1E4EA]"
          hoverColor="bg-none"
          rounded="rounded-full"
          textColor="text-[#676C6C]"
          fontWeight="font-normal"
          fontSize="text-xs"
          paddingY="py-2"
          paddingX="px-3"
        />
      ),
    },
    {
      title: "Co-Sharing Options",
      description: "Max number of co-sharing tenants per unit",
      button: (
        <Button
          text="Add"
          bgColor="bg-white"
          borderColor="border-[#E1E4EA]"
          hoverColor="bg-none"
          rounded="rounded-full"
          textColor="text-[#676C6C]"
          fontWeight="font-normal"
          fontSize="text-xs"
          paddingY="py-2"
          paddingX="px-3"
        />
      ),
    },
    {
      title: "Maintenance Preferences",
      description: "Enter Your Maintenance Preferences",
      button: (
        <Button
          text="Change"
          bgColor="bg-white"
          borderColor="border-[#E1E4EA]"
          hoverColor="bg-none"
          rounded="rounded-full"
          textColor="text-[#676C6C]"
          fontWeight="font-normal"
          fontSize="text-xs"
          paddingY="py-2"
          paddingX="px-3"
        />
      ),
    },
    {
      title: "Tenant Comunication",
      description: "Enable chat with Tenants",
      button: (
        <Button
          text="Change"
          bgColor="bg-white"
          borderColor="border-[#E1E4EA]"
          hoverColor="bg-none"
          rounded="rounded-full"
          textColor="text-[#676C6C]"
          fontWeight="font-normal"
          fontSize="text-xs"
          paddingY="py-2"
          paddingX="px-3"
        />
      ),
    },
    {
      title: "Listing & Visibility",
      description: "Default visibility  Public",
      button: (
        <Button
          text="Change"
          bgColor="bg-white"
          borderColor="border-[#E1E4EA]"
          hoverColor="bg-none"
          rounded="rounded-full"
          textColor="text-[#676C6C]"
          fontWeight="font-normal"
          fontSize="text-xs"
          paddingY="py-2"
          paddingX="px-3"
        />
      ),
    },
  ];

  return (
    <form className="flex flex-col gap-6">
      <header>
        <h3 className="font-medium text-base xl:text-lg">Your Account</h3>
        <p className="font-light text-xs text-[#676C6C]">
          Manage name, role, email, password, and SSO settings.
        </p>
      </header>

      <section className="border border-[#E1E4EA] p-4 rounded-[12px] flex flex-col gap-6">
        {/* Search Input */}
        <FormInput
          placeholder="Search for a location"
          icon={<FiSearch />}
          iconPosition="left"
          label="Properties"
          rounded="rounded-full"
        />

        {/* Cancel + Save moved here */}
        <div className="flex justify-start gap-3">
          <Button
            text="Cancel"
            bgColor="bg-white"
            borderColor="border-[#E1E4EA]"
            hoverColor="bg-none"
            rounded="rounded-full"
            textColor="text-[#676C6C]"
            fontWeight="font-normal"
            fontSize="text-xs"
            paddingY="py-2"
            paddingX="px-3"
            onClick={() => setShowAddressForm(false)}
          />
          <Button
            text="Save"
            rounded="rounded-full"
            paddingY="py-2"
            fontWeight="font-normal"
            fontSize="text-xs"
          />
        </div>

        {/* Preferences List */}
        {info.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <ul className="flex justify-between items-center">
              <li>
                <h5 className="text-base font-normal">{item.title}</h5>
                <p className="font-light text-sm text-[#2F3639]">
                  {item.description}
                </p>
              </li>
              <li>{item.button}</li>
            </ul>
          </div>
        ))}
      </section>

      <div className="flex justify-start">
        <Button text="Save Changes" rounded="rounded-full" paddingY="py-1" />
      </div>
    </form>
  );
};

export default PropertyPreferences;
