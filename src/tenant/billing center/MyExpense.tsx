import React from "react";
import ReusableTable from "../../../reuseable/ui/ReusableTable";

const MyExpense: React.FC = () => {
  const columns: any[] = [];
  const data: any[] = [];
  return (
    <main className="p-5 border bg-white rounded-[10px] space-y-[12px]">
      <header>
        <h4 className="text-[#2F3639] text-[13.9px]">My Expenses</h4>
        <p className="text-xs font-light text-[#676C6C]">
          Track all your spending history at a glance — review past expenses and
          download receipts anytime.
        </p>
      </header>
      <ReusableTable columns={columns} data={data} />
    </main>
  );
};

export default MyExpense;
