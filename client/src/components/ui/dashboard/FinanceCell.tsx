import { FinancialBalance } from "../../../lib/globalTypes";

const FinanceCell = ({
  heading,
  stat,
  className,
}: {
  heading: string;
  stat: FinancialBalance | null;
  className?: string;
}) => {
  return (
    <div
      className={`border-[1px] border-gray-800 w-full h-[12rem] rounded-2xl bg-gradient-to-b from-zinc-950 to-zinc-900 shadow-lg ${className}`}
    >
      <div className="flex flex-col justify-center items-center h-full w-full px-6 py-8 text-neutral-100 space-y-5">
        <div className="w-full flex justify-start items-center">
          <p className="font-light text-md">{heading}</p>
        </div>
        <div className="w-full flex flex-col space-x-8">
          <p className="text-4xl">{`$${stat?.balance}`}</p>
        </div>
      </div>
    </div>
  );
};

export default FinanceCell;
