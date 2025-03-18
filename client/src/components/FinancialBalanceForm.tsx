import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { useFinancialBalance } from "../contexts/FinancialBalanceContext";

const FinancialBalanceForm = () => {
  const [newBalance, setNewBalance] = useState<string>("");
  const { addBalance } = useFinancialBalance();

  const { user } = useUser();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const newBalanceRecord = {
      userId: user?.id ?? "",
      date: Date.now(),
      balance: parseFloat(newBalance),
    };

    addBalance(newBalanceRecord);
    setNewBalance("");
  };

  return (
    <div className="flex justify-start items-center">
      <form onSubmit={handleSubmit} className="p-4">
        <div className="space-x-4">
          <label>New Balance:</label>
          <input
            type="number"
            name="Balance"
            value={newBalance}
            onChange={(e) => setNewBalance(e.target.value)}
            placeholder="New balance..."
            className="border border-white"
          />
        </div>
        <button
          className="bg-gray-500 rounded-md px-4 py-1 mt-[2rem]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FinancialBalanceForm;
