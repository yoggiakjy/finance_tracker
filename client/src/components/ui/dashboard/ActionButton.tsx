import React from "react";

const ActionButton = ({
  icon,
  buttonText,
  className,
}: {
  icon: React.ReactNode;
  buttonText: string;
  className?: string;
}) => {
  return (
    <div
      className={` text-neutral-200 bg-zinc-900 p-6 rounded-full ${className}`}
    >
      <div className="flex flex-col justify-center items-center gap-2 w-[4rem] h-[4rem]">
        <div className="text-2xl">{icon}</div>
        <p className="font-light text-sm">{buttonText}</p>
      </div>
    </div>
  );
};

export default ActionButton;
