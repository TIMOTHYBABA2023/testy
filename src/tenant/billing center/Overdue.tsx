import React from "react";
import Button from "../../../reuseable/ui/Button";
import { TbReceipt } from "react-icons/tb";

const Overdue: React.FC = () => {
  const invoices = [
    {
      title: "Monthly Rent",
      property: "Sky Apartments #102",
      dueDate: "2025-12-01",
      invoiceId: "INV-005",
      amount: "₦87,453.00",
    },
    {
      title: "Service Charge",
      property: "Sky Apartments #102",
      dueDate: "2025-11-15",
      invoiceId: "INV-006",
      amount: "₦45,000.00",
    },
    {
      title: "Utilities",
      property: "Sky Apartments #102",
      dueDate: "2025-11-15",
      invoiceId: "INV-007",
      amount: "₦45,000.00",
    },
  ];

  return (
    <main className="p-5 border bg-white rounded-[10px] space-y-[12px]">
      <header>
        <h4 className="text-[#2F3639] text-[13.9px]">Payment Due</h4>
        <p className="text-xs font-light text-[#676C6C]">
          Pay your pending invoices
        </p>
      </header>

     <div className="space-y-3">
      {invoices.map((inv, index) => (
        <div
          key={index}
          className="w-full border rounded-[12px] p-4 sm:px-5 sm:py-[14px] bg-white flex justify-between items-center"
        >
          {/* LEFT */}
          <div className="flex items-start gap-1">
            <TbReceipt className="text-[#7D8A9B] text-lg mt-1" />

            <div className="leading-tight">
              <p className="font-medium text-xs">{inv.title}</p>
              <p className="font-light text-[10px] text-[#676C6C]">{inv.property}</p>
              <p className="font-light text-[10px] text-[#676C6C]">
                Due: {inv.dueDate} • Invoice: {inv.invoiceId}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <Button text={"Pay Now"} paddingY="py-1" fontWeight="font-medium" bgColor="bg-[#FCFCFC]" textColor="text[#2C2E33]" borderColor="border-[#E2E6E9] border" fontSize="text-xs" />

            <p className="text-xs font-medium text-[#2C2E33]">{inv.amount}</p>
          </div>
        </div>
      ))}
    </div>
    </main>
  );
};

export default Overdue;
