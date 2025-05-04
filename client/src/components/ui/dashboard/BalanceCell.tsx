import React from "react";
import { FinancialBalance } from "../../../lib/globalTypes";

const BalanceCell = ({
  balance,
  className,
}: {
  balance: FinancialBalance | null;
  className?: string;
}) => {
  return (
    <div
      className={`w-full h-[20rem] flex flex-col justify-center items-start text-neutral-200 rounded-2xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-pink-300 p-6 ${className}`}
    >
      <p className="text-2xl font-light ">Total Networth</p>
      <p className="text-5xl font-medium">
        {balance !== null ? `$${balance.balance}` : "null"}
      </p>
    </div>
  );
};

export default BalanceCell;
