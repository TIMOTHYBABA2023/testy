import { useParams } from "react-router-dom";
import Button from "../../../reuseable/ui/Button";
import { GoArrowUpRight } from "react-icons/go";
import ToggleSwitchInput from "../../../reuseable/ui/ToggleSwitchInput";
import { useState } from "react";
import UnpaidInvoiceModal from "../../../components/ui/unpaidInvoiceModel";

function BillingDetails() {
  const [open, setOpen] = useState<boolean>(false);
  const { billingId } = useParams();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode(e.target.checked);
  };
  return (
    <main className="space-y-10 text-base">
      {/* <h1>Billing / Billing ID {billingId}</h1> */}
      <header className="space-y-2">
        <h2 className="text-[#000000] font-semibold text-xl md:text-2xl lg:text-[32px]">
          Invoice Details
        </h2>
        <p className="text-sm lg:text-base font-light">
          Manage billing and payments
        </p>
      </header>
      <div className="flex flex-col gap-8">
        <ul className="flex flex-col bg-white border rounded-[10px] gap-6  shadow-md p-6">
          <li className="flex items-center justify-between w-full">
            <p className="font-semibold">Invoice information</p>
            <p className="p-3 py-1 rounded-full bg-[#D8D8D833] text-[#FF3B30]">
              {"Unpaid"}
            </p>
          </li>
          <li className="flex items-center justify-between w-full">
            <p>Billing ID</p>
            <p>{billingId}</p>
          </li>
          <li className="flex items-center justify-between w-full">
            <p>Invoice Number</p>
            <p>
              {billingId} <span className="text-[#007AFF]">View</span>
            </p>
          </li>
          <li className="flex items-center justify-between w-full">
            <p>Date issued</p>
            <p>6 Jun 2025</p>
          </li>
          <li className="flex items-center justify-between w-full">
            <p>Payment Overdue</p>
            <Button text="Request Payment" rounded="rounded-full" />
          </li>
        </ul>
        <section className="bg-white border rounded-[10px] shadow-md p-6 gap-6 flex flex-col">
          <p>Billing Address:</p>
          <p>Sunlight Companies LTD </p>
          <p className="text-[#2C2E3380]">Sunlight Properties</p>
        </section>
        <section className="bg-white border rounded-[10px] shadow-md p-6 gap-6 flex flex-col">
          <p>Billing Service:</p>
          <div className="flex justify-between items-center">
            <div>
              <p>Monthly - Rent</p>
              <p className="text-[#2C2E3380] text-xs">Jun 2025</p>
            </div>
            {/* <p className="text-[#007AFF] text-sm flex items-center gap-1"> <GoArrowUpRight /></p> */}
            {/* < /> */}
            <Button
              text={"Service Details"}
              borderColor="bg-none"
              bgColor="bg-none"
              textColor="text-[#007AFF] hover:text-underline"
              icon={<GoArrowUpRight />}
              iconPosition="right"
              hoverColor="bg-none "
              onClick={() => setOpen(true)}
            />
          </div>
          <p className="text-[#2C2E3380]">Sunlight Properties</p>
        </section>
      </div>
      <div className="flex items-center justify-end gap-3">
        <span className="text-[#2C2E334D]">Enable Auto-billing</span>
        <ToggleSwitchInput checked={isDarkMode} onChange={handleToggle} />
      </div>
      <UnpaidInvoiceModal isOpen={open} onClose={() => setOpen(false)} />
    </main>
  );
}

export default BillingDetails;
