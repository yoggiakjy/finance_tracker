import React from "react";
import { BsThreeDots } from "react-icons/bs";

const GoalCell = ({ className }: { className?: string }) => {
  return (
    <div
      className={`border-[1px] border-gray-800 w-full h-[20rem] rounded-2xl bg-gradient-to-b from-zinc-950 to-zinc-900 shadow-lg ${className}`}
    >
      <div className="flex justify-between items-center text-neutral-100 px-6 py-8">
        <p className=" text-2xl">Goals</p>
        <BsThreeDots className="text-2xl" />
      </div>
    </div>
  );
};

export default GoalCell;
