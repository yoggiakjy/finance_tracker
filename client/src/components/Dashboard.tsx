import FinancialRecordForm from "./FinancialRecordForm";
import { useUser } from "@clerk/clerk-react";
import { TransactionCategories } from "../lib/data";
import Layout from "./Layout";
import Modal from "./ui/Modal";
import { useState } from "react";
import FinancialMonthTable from "./FinancialMonthTable";
import FinancialBalanceForm from "./FinancialBalanceForm";
import { useFinancialBalance } from "../contexts/FinancialBalanceContext";

const Dashboard = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [ isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [ isBalanceModalOpen, setIsBalanceModalOpen ] = useState(false);
  const { balance } = useFinancialBalance();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Sign in to view this page.</div>;
  }

  console.log("balkance:", balance);
  return (
    <Layout>
      <div className="relative w-full flex flex-col justify-center items-center text-center ">
        <h1 className="font-light text-5xl ">
          Hello {user.firstName}!
          <br />
          Here are your finances.
        </h1>

      <div>
      </div>

      <div className="flex justify-between items-center space-x-[2rem] mt-[3rem]">
      <button className="border z-20 px-4 rounded-md" onClick={() => setIsTransactionModalOpen(true)}>
          Press
        </button>
        <button className="border z-20 px-4 rounded-md" onClick={() => setIsBalanceModalOpen(true)}>
          Log Total
        </button>
      </div>
        
        <Modal isOpen={isTransactionModalOpen} onClose={() => setIsTransactionModalOpen(false)}>
          <FinancialRecordForm categoryList={TransactionCategories} />
        </Modal>
        <Modal isOpen={isBalanceModalOpen} onClose={() => setIsBalanceModalOpen(false)}>
          <FinancialBalanceForm />
        </Modal>
      </div>
      <FinancialMonthTable />
    </Layout>
  );
};

export default Dashboard;
