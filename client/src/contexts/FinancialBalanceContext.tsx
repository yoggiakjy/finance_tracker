import { createContext, useContext, useEffect, useState } from "react";
import { FinancialBalance } from "../lib/globalTypes";
import { useUser } from "@clerk/clerk-react";

interface FinancialBalanceContextType {
  balance: FinancialBalance | null;
  addBalance: (balance: FinancialBalance) => void;
  // updateBalance: (id: string, newBalance: FinancialBalance) => void;
  // deleteBalance: (id: string) => void;
}

export const FinancialBalanceContext = createContext<
  FinancialBalanceContextType | undefined
>(undefined);

export const FinancialBalanceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [balance, setBalance] = useState<FinancialBalance | null>(null);
  const { user } = useUser();

  const fetchBalance = async () => {
    if (!user) return;
    const response = await fetch(
      `http://localhost:3001/financial-balance/getBalanceByUserId/${user.id}`
    );

    if (response.ok) {
      const balance = await response.json();
      console.log("Balance:", balance);
      setBalance(balance);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, [user]);

  const addBalance = async (balance: FinancialBalance) => {
    const response = await fetch("http://localhost:3001/financial-balance", {
      method: "POST",
      body: JSON.stringify(balance),
      headers: {
        "Content-Type": "application/json",
      },
    });

    try {
      if (response.ok) {
        const newBalance = await response.json();
        console.log(balance);
        setBalance(newBalance);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FinancialBalanceContext.Provider value={{ balance, addBalance }}>
      {children}
    </FinancialBalanceContext.Provider>
  );
};

export const useFinancialBalance = () => {
  const context = useContext<FinancialBalanceContextType | undefined>(
    FinancialBalanceContext
  );

  if (!context) {
    throw new Error(
      "useFinancialBalance must be used within a FinancialBalanceProvider."
    );
  }

  return context;
};
