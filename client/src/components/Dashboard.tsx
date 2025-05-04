import FinancialRecordForm from "./FinancialRecordForm";
import { useUser } from "@clerk/clerk-react";
import { TransactionCategories } from "../lib/data";
import Modal from "./ui/Modal";
import { useState } from "react";
import FinancialMonthTable from "./FinancialMonthTable";
import FinancialBalanceForm from "./FinancialBalanceForm";
import CategoryDisplay from "./CategoryDisplay";
import BalanceView from "./BalanceView";
import FinanceCell from "./ui/dashboard/FinanceCell";
import { useFinancialBalance } from "../contexts/FinancialBalanceContext";
import GoalCell from "./ui/dashboard/GoalCell";
import AnalysisCell from "./ui/dashboard/AnalysisCell";

const Dashboard = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [isBalanceModalOpen, setIsBalanceModalOpen] = useState(false);
  const { balance } = useFinancialBalance();
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Sign in to view this page.</div>;
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full grid grid-cols-4 flex-col justify-center items-center py-6 px-12">
        {/* General User Statistics */}
        <div className="col-span-3 flex flex-col justify-start items-start h-full  gap-10 mr-10">
          <p className="text-2xl font-semibold text-neutral-200">
            {`${user.firstName}'s Stats`}
          </p>

          <div className="w-full flex justify-evenly items-center gap-10">
            <FinanceCell heading={"Monthly Income"} stat={balance} />
            <FinanceCell heading={"Monthly Spending"} stat={balance} />
            <FinanceCell heading={"Monthly Savings"} stat={balance} />
          </div>

          <div className="w-full flex justify-between items-center gap-10">
            <GoalCell />
            <GoalCell />
          </div>

          <AnalysisCell />
        </div>

        {/* Main Balance and Transactions */}
        <BalanceView className="col-span-1 " />

        {/* <div className="relative z-50 w-full h-full flex flex-col justify-center items-center text-center border border-red-500">
          <div className="relative z-50 flex justify-between items-center space-x-[2rem] mt-[3rem]">
            <button
              className="border px-4 rounded-md"
              onClick={() => setIsTransactionModalOpen(true)}
            >
              Press
            </button>
            <button
              className="border px-4 rounded-md"
              onClick={() => setIsBalanceModalOpen(true)}
            >
              Log Total
            </button>
          </div>

          <Modal
            isOpen={isTransactionModalOpen}
            onClose={() => setIsTransactionModalOpen(false)}
          >
            <FinancialRecordForm categoryList={TransactionCategories} />
          </Modal>
          <Modal
            isOpen={isBalanceModalOpen}
            onClose={() => setIsBalanceModalOpen(false)}
          >
            <FinancialBalanceForm />
          </Modal>
          <BalanceView />
        </div>

        <div className="w-full h-full flex justify-center items-start gap-[5rem] mt-[3rem]">
          <FinancialMonthTable />
          <CategoryDisplay />
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
