import FinancialRecordForm from "./FinancialRecordForm";
import { useUser } from "@clerk/clerk-react";
import { TransactionCategories } from "../lib/data";
import Modal from "./ui/Modal";
import { useState } from "react";
import FinancialMonthTable from "./FinancialMonthTable";
import FinancialBalanceForm from "./FinancialBalanceForm";
import CategoryDisplay from "./CategoryDisplay";
import BalanceView from "./BalanceView";

const Dashboard = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [isBalanceModalOpen, setIsBalanceModalOpen] = useState(false);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Sign in to view this page.</div>;
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <img
        src="/public/1114362.png"
        className="absolute inset-0 z-10 h-screen w-full object-cover"
      />
      <div className="relative z-50 border border-white rounded-xl w-[90%] h-[55rem] flex flex-col justify-center items-center backdrop-blur-[35px] pt-[3rem] pb-[5rem] mt-[3rem]">
        <div className="relative z-50 w-full h-full flex flex-col justify-center items-center text-center">
          <h1 className="font-light text-5xl ">
            Hello {user.firstName}!
            <br />
            Here are your finances.
          </h1>

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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
