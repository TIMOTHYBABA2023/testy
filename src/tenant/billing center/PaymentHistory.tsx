import React from "react";
import ReusableTable from "../../../reuseable/ui/ReusableTable";
import { RxDownload } from "react-icons/rx";
import { HiOutlinePrinter } from "react-icons/hi2";

interface Column {
  header: string;
  accessor: (row: any) => React.ReactNode;
  align?: "left" | "center" | "right";  
}
  interface ExpenseRow {
    paidDate: string;
    type: string;
    amount: string;
    method: string;
  }

  interface ExpenseColumn extends Column {
    accessor: (row?: ExpenseRow) => React.ReactNode;
  }

const PaymentHistory: React.FC = () => {
    const columns: ExpenseColumn[] = [
    {
      header: "Paid Date",
      accessor: (row) => row?.paidDate,
      align: "left",
    },
    {
      header: "Type",
      accessor: (row) => row?.type,
      align: "left",
    },
    {
      header: "Amount",
      accessor: (row) => row?.amount,
      align: "left",
    },
    {
      header: "Payment method",
      accessor: (row) => (
        <span className="border rounded-full px-3 py-1 text-xs text-[#2F3639]">
          {row?.method}
        </span>
      ),
      align: "center",
    },
    {
      header: "Actions",
      accessor: () => (
        <div className="flex items-center gap-3">
          <button className="flex items-center border rounded-full px-4 py-1.5 text-sm gap-2">
            <span className="text-sm"><RxDownload /></span> Download
          </button>
          <button className="flex items-center border rounded-full px-4 py-1.5 text-sm gap-2">
            <span className="text-sm"><HiOutlinePrinter /></span> Print
          </button>
        </div>
      ),
      align: "center",
    },
  ];

  const data = [
    { paidDate: "2025-09-28", type: "Monthly Rent", amount: "NGN3,500,000.00", method: "Auto-pay" },
    { paidDate: "2025-09-30", type: "Service Charge", amount: "NGN85,000.00", method: "Card" },
    { paidDate: "2025-09-28", type: "Monthly Rent", amount: "NGN3,500,000.00", method: "Auto-pay" },
    { paidDate: "2025-09-28", type: "Service Charge", amount: "NGN3,500,000.00", method: "Card" },
  ];
  return (
    <main className="p-5 border bg-white rounded-[10px] space-y-[12px]">
      <header>
        <h4 className="text-[#2F3639] text-[13.9px]">Payment History</h4>
        <p className="text-xs font-light text-[#676C6C]">
          Your complete payment records - download receipts anytime
        </p>
      </header>
      <ReusableTable columns={columns} data={data} />
    </main>
  );
};

export default PaymentHistory;
