import FinancialRecordForm from "./FinancialRecordForm";
import { useUser } from "@clerk/clerk-react";
import { TransactionCategories } from "../lib/data";
import FinancialRecordList from "./FinancialRecordList";
import Layout from "./Layout";
import Modal from "./ui/Modal";
import { useState } from "react";

const Dashboard = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Sign in to view this page.</div>;
  }

  return (
    <Layout>
      <div className="relative w-full flex flex-col justify-center items-center text-center ">
        <h1 className="font-light text-5xl ">
          Hello {user.firstName}!
          <br />
          Here are your finances.
        </h1>

        <button className="border z-20" onClick={() => setIsModalOpen(true)}>
          Press
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <FinancialRecordForm categoryList={TransactionCategories} />
        </Modal>

        <FinancialRecordList />
      </div>
    </Layout>
  );
};

export default Dashboard;
