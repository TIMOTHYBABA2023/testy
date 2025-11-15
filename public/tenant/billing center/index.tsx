import { useState } from "react";
import BillingTable from "./BillingTable"; // <-- your default table
// import DueNowTable from "./DueNowTable";
// import PaymentHistoryTable from "./PaymentHistoryTable";
// import AutoPaymentTable from "./AutoPaymentTable";
// import ExpensesTable from "./ExpensesTable";

import { RiExchange2Line } from "react-icons/ri";
import NewInvoiceModal from "../../../components/ui/NewInvoiceModel";
import { TbReceipt } from "react-icons/tb";
import { BiReceipt } from "react-icons/bi";
import Overdue from "./Overdue";
import PaymentHistory from "./PaymentHistory";
import MyExpense from "./MyExpense";

interface CardData {
  title: string;
  desc: string;
  info: string;
  icon: React.ReactNode;
  color: string;
  iconBgColor: string;
}

const BillingCenter: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("allInvoice");
  console.log(currentPage, "")

  const cardData: CardData[] = [
    {
      title: "₦5,500,000.00",
      desc: "Monthly Average",
      info: "Rent + utilities + extras",
      icon: <RiExchange2Line className="text-[#5EC069] " />,
      color: "text-[#6DC347]",
      iconBgColor: "bg-[#2BBA4F1A]",
    },
    {
      title: "₦43,500",
      desc: "Due this month",
      info: "3 Invoices pending",
      icon: <TbReceipt className="text-[#E5A23C]" />,
      color: "text-[#E5A23C]",
      iconBgColor: "bg-[#E5A23C1A]",
    },
    {
      title: "₦45,680,000.00",
      desc: "Total paid this year",
      info: "All payment up to date",
      icon: <TbReceipt className="text-[#232AAB]" />,
      color: "text-[#232AAB]",
      iconBgColor: "bg-[#232AAB1A]",
    },
    {
      title: "45 ",
      desc: "Downloaded Receipt",
      info: "",
      icon: <BiReceipt className="text-[#E80707]" />,
      color: "text-[#2F3639]",
      iconBgColor: "bg-[#C00F0C1A]",
    },
  ];

  const tabs = [
    { label: "All Invoices", value: "allInvoice" },
    { label: "Due Now", value: "overdue" },
    { label: "Payment History", value: "paymenthistory" },
    { label: "Auto Payments", value: "unpaid" },
    { label: "My Expenses", value: "myExpenses" },
  ];

  const renderTable = () => {
    switch (activeTab) {
      case "allInvoice":
        return <BillingTable />;
      case "overdue":
        return <Overdue />;
      case "paymenthistory":
        return <PaymentHistory />;
      case "unpaid":
        return "<AutoPaymentTable />";
      case "myExpenses":
        return <MyExpense/>;
      default:
        return <BillingTable />;
    }
  };

  return (
    <main className="space-y-5">
      <header className="space-y-2">
        <h2 className="text-[#000000] font-semibold text-xl md:text-2xl ">
          Billing center - Invoices
        </h2>
        <p className="text-sm lg:text-base font-light">
          Manage payments and create invoices
        </p>
      </header>

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[25.9px]">
        {cardData.map((data, index) => (
          <li
            key={index}
            className="bg-white border py-6 px-[25px] rounded-[12.98px] space-y-[3px]"
          >
            <div className="flex justify-between items-center">
              <p className="text-[13px] font-light text-[#2C2E334D]">
                {data.desc}
              </p>
              <span>{data.icon}</span>
            </div>
            <h4 className="font-bold text-base">{data.title}</h4>
            <p className={`text-xs ${data.color}`}>{data.info}</p>
          </li>
        ))}
      </ul>

      <section className="pt-5 space-y-4 ">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-between bg-[#2C35D914] rounded-[12px] p-2">
          {tabs.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setActiveTab(item.value);
                setCurrentPage(1);
              }}
              className={`p-2 rounded-[4px] text-center font-normal text-xs lg:text-sm cursor-pointer transition-all ${
                activeTab === item.value
                  ? "bg-white text-[#2C35D9]"
                  : "text-[#6B7280] bg-transparent"
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
        {renderTable()}
      </section>

      <NewInvoiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
};

export default BillingCenter;
