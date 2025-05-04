import React from "react";

const TransactionsCell = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center w-full border-[1px] border-gray-800 p-[2rem] rounded-2xl mt-[2rem] ${className}`}
    >
      <div className="w-full">
        <p className="text-neutral-200 text-xl font-semibold">Transactions</p>
      </div>
    </div>
  );
};

export default TransactionsCell;
