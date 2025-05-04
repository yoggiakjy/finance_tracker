import { BsThreeDots } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";
import { useFinancialBalance } from "../contexts/FinancialBalanceContext";
import ActionButton from "./ui/dashboard/ActionButton";
import BalanceCell from "./ui/dashboard/BalanceCell";
import TransactionsCell from "./ui/dashboard/TransactionsCell";

const BalanceView = ({ className }: { className?: string }) => {
  const { balance } = useFinancialBalance();

  return (
    <div
      className={`flex flex-col justify-start items-center w-full h-full border-[1px] border-gray-800 rounded-2xl py-[2rem] px-[1.5rem] ${className}`}
    >
      <BalanceCell balance={balance} />
      <div className="flex justify-evenly items-center w-full py-[1.5rem]">
        <ActionButton icon={<MdOutlinePayments />} buttonText={"Transaction"} />
        <ActionButton icon={<TbPigMoney />} buttonText={"Investment"} />
        <ActionButton icon={<BsThreeDots />} buttonText={"More"} />
      </div>

      <TransactionsCell />
    </div>
  );
};

export default BalanceView;
