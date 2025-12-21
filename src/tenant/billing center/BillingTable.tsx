import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const data = [
  { status: "paid", billingId: "INV404216", date: "6 Jun 2025", subscription: "Monthly - Rent", amount: "N1,000,000", billingStatus: "Automatic" },
  { status: "unpaid", billingId: "INV404217", date: "4 Jun 2025", subscription: "Monthly - Security", amount: "N1,000,000", billingStatus: "Manual" },
  { status: "unpaid", billingId: "INV404218", date: "4 Jun 2025", subscription: "Monthly - Security", amount: "N1,000,000", billingStatus: "Automatic" },
  { status: "paid", billingId: "INV404219", date: "6 Jun 2025", subscription: "Monthly - Rent", amount: "N1,000,000", billingStatus: "Manual" },
  { status: "paid", billingId: "INV404220", date: "6 Jun 2025", subscription: "Monthly - Internet", amount: "N1,000,000", billingStatus: "Manual" },
  { status: "paid", billingId: "INV404221", date: "6 Jun 2025", subscription: "Monthly - Rent", amount: "N1,000,000", billingStatus: "Automatic" },
  { status: "paid", billingId: "INV404222", date: "6 Jun 2025", subscription: "Monthly - Rent", amount: "N1,000,000", billingStatus: "Manual" },
  { status: "paid", billingId: "INV404223", date: "6 Jun 2025", subscription: "Monthly - Rent", amount: "N1,000,000", billingStatus: "Automatic" },
  { status: "paid", billingId: "INV404224", date: "6 Jun 2025", subscription: "Monthly - Rent", amount: "N1,000,000", billingStatus: "Automatic" },
  { status: "paid", billingId: "INV404225", date: "6 Jun 2025", subscription: "Monthly - Rent", amount: "N1,000,000", billingStatus: "Automatic" },
];

const rowsPerPage = 10;

function BillingTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("allInvoice");
  const navigate = useNavigate();

  const tabs = [
    { label: "All Invoices", value: "allInvoice" },
    { label: "Due Now", value: "overdue" },
    { label: "Payment History", value: "paymenthistory" },
    { label: "Auto Payments", value: "unpaid" },
    { label: "My Expenses", value: "myExpenses" },
  ];

  console.log(setActiveTab, tabs);
  const filteredData = data.filter((item) => {
    switch (activeTab) {
      case "overdue":
        return item.status === "unpaid";
      case "paymenthistory":
        return item.status === "paid";
      case "unpaid":
        return item.billingStatus === "Automatic";
      case "myExpenses":
        return item.billingStatus === "Manual";
      default:
        return true;
    }
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleRowClick = (billingId: string) => {
    navigate(`/billing/${billingId}`);
  };

  return (
    <div>
      {/* Tabs */}
      {/* <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-between bg-[#2C35D914] rounded-[12px] p-2">
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
      </ul> */}

      {/* Table */}
      <table className="w-full text-left border-separate border-spacing-y-[9px]">
        <thead className="bg-white">
          <tr className="text-sm font-medium">
            <th className="p-3">Status</th>
            <th className="p-3">Billing ID</th>
            <th className="p-3">Date</th>
            <th className="p-3">Subscription</th>
            <th className="p-3">Amount (Rp)</th>
            <th className="p-3">Billing Status</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, idx) => (
            <tr
              key={idx}
              className="bg-white text-sm text-[#2C2E33] shadow-sm cursor-pointer hover:bg-gray-50 transition"
              onClick={() => handleRowClick(row.billingId)}
            >
              <td className="p-3">
                <span
                  className={`px-3 py-[6px] font-medium rounded-[5px] text-xs capitalize ${
                    row.status === "paid"
                      ? "bg-[#D8D8D833] text-[#2BBA4FCC]"
                      : "bg-[#D8D8D833] text-[#FF3B30]"
                  }`}
                >
                  {row.status}
                </span>
              </td>
              <td className="p-3 text-[#2C2E3380]">{row.billingId}</td>
              <td className="p-3">{row.date}</td>
              <td className="p-3">{row.subscription}</td>
              <td className="p-3">{row.amount}</td>
              <td className="p-3 flex items-center justify-around">
                <span>{row.billingStatus}</span>
                <FaCircle
                  size={8}
                  className={
                    row.billingStatus === "Automatic" ? "text-green-500" : "text-red-500"
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-self-end items-center mt-[21.5px] text-xl rounded-[10px] border w-fit py-1 px-1 ">
        <button
          className="px-3 py-1 mr-2 disabled:opacity-50 flex items-center gap-1 font-semibold text-[#09090B]"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <IoIosArrowBack /> <span>Previous</span>
        </button>

        <div className="flex items-center gap-1">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`px-[10px] py-2 text-sm rounded-[10px] ${
                currentPage === page ? "bg-white border" : ""
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <span>...</span>
        </div>

        <button
          className="px-3 py-1 mr-2 disabled:opacity-50 flex items-center gap-1 font-semibold text-[#09090B]"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

export default BillingTable;
