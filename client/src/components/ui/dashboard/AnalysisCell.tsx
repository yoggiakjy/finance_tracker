import React from "react";

const AnalysisCell = ({ className }: { className?: string }) => {
  return (
    <div
      className={`border-[1px] border-gray-800 w-full h-[20rem] rounded-2xl bg-gradient-to-b from-zinc-950 to-zinc-900 shadow-lg ${className}`}
    >
      <div className="flex justify-between items-center text-neutral-100 px-6 py-8">
        <p className=" text-2xl">Goals</p>
      </div>
    </div>
  );
};

export default AnalysisCell;
