import { BsThreeDots } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";
import { useFinancialBalance } from "../contexts/FinancialBalanceContext";
import ActionButton from "./ui/dashboard/ActionButton";
import BalanceCell from "./ui/dashboard/BalanceCell";
import SummaryCell from "./ui/assets/SummaryCell";
import { useState } from "react";
import { InvestmentRecord } from "../lib/globalTypes";
import InvestmentModal from "./ui/assets/InvestmentModal";
import { useInvestmentRecords } from "../contexts/InvestmentRecordContext";

const AssetsView = ({ className }: { className?: string }) => {
  const { balance } = useFinancialBalance();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [investmentType, setInvestmentType] = useState<
    "Savings" | "Crypto" | "Stock"
  >("Savings");

  const handleClick = (type: "Savings" | "Crypto" | "Stock") => {
    setInvestmentType(type);
    setIsModalOpen(true);
  };

  return (
    <div
      className={`flex flex-col justify-start items-center w-full h-full border-[1px] border-gray-800 rounded-2xl py-[2rem] px-[1.5rem] ${className}`}
    >
      <BalanceCell balance={balance} />
      <div className="flex justify-evenly items-center w-full py-[1.5rem]">
        <button
          className="hover:cursor-pointer transition transform hover:scale-105 hover:shadow-lg duration-200 ease-in-out"
          onClick={() => handleClick("Savings")}
        >
          <ActionButton icon={<MdOutlinePayments />} buttonText={"Savings"} />
        </button>

        <button
          className="hover:cursor-pointer transition transform hover:scale-105 hover:shadow-lg duration-200 ease-in-out"
          onClick={() => handleClick("Stock")}
        >
          <ActionButton icon={<TbPigMoney />} buttonText={"Stock"} />
        </button>

        <button
          className="hover:cursor-pointer transition transform hover:scale-105 hover:shadow-lg duration-200 ease-in-out"
          onClick={() => handleClick("Crypto")}
        >
          <ActionButton icon={<BsThreeDots />} buttonText={"Crypto"} />
        </button>
      </div>

      <InvestmentModal
        isOpen={isModalOpen}
        type={investmentType}
        onClose={() => {
          setIsModalOpen(false);
          setInvestmentType("Savings");
        }}
      />

      <SummaryCell />
    </div>
  );
};

export default AssetsView;
