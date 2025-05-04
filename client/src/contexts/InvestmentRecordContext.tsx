import { createContext, useContext, useEffect, useState } from "react";
import { InvestmentRecord } from "../lib/globalTypes";
import { useUser } from "@clerk/clerk-react";

export interface InvestmentRecordsContextType {
  records: InvestmentRecord[];
  addRecord: (record: InvestmentRecord) => void;
  updateRecord: (id: string, newRecord: InvestmentRecord) => void;
  deleteRecord: (id: string) => void;
}

export const InvestmentRecordsContext = createContext<
  InvestmentRecordsContextType | undefined
>(undefined);

export const InvestmentRecordsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [records, setRecords] = useState<InvestmentRecord[]>([]);
  const { user } = useUser();

  const fetchRecords = async () => {
    if (!user) return;
    const response = await fetch(
      `http://localhost:3001/investment-records/getAllByUserId/${user.id}`
    );

    if (response.ok) {
      const records = await response.json();
      setRecords(records);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, [user]);

  const addRecord = async (record: InvestmentRecord) => {
    const response = await fetch("http://localhost:3001/investment-records", {
      method: "POST",
      body: JSON.stringify(record),
      headers: {
        "Content-Type": "application/json",
      },
    });

    try {
      if (response.ok) {
        const newRecord = await response.json();
        setRecords((prev) => [...prev, newRecord]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const updateRecord = async (id: string, newRecord: InvestmentRecord) => {
    const response = await fetch(
      `http://localhost:3001/investment-records/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(newRecord),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    try {
      if (response.ok) {
        const newRecord = await response.json();
        setRecords((prev) =>
          prev.map((record) => {
            if (record._id === id) {
              return newRecord;
            } else {
              return record;
            }
          })
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteRecord = async (id: string) => {
    const response = await fetch(
      `http://localhost:3001/investment-records/${id}`,
      {
        method: "DELETE",
      }
    );

    try {
      if (response.ok) {
        const deletedRecord = await response.json();
        setRecords((prev) =>
          prev.filter((record) => record._id !== deletedRecord.id)
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <InvestmentRecordsContext.Provider
      value={{
        records,
        addRecord,
        updateRecord,
        deleteRecord,
      }}
    >
      {children}
    </InvestmentRecordsContext.Provider>
  );
};

export const useInvestmentRecords = () => {
  const context = useContext<InvestmentRecordsContextType | undefined>(
    InvestmentRecordsContext
  );

  if (!context) {
    throw new Error(
      "useInvestmentRecords must be used within a InvestmentRecordsProvider."
    );
  }
  return context;
};
