import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useInvestmentRecords } from "../../../contexts/InvestmentRecordContext";

const InvestmentModal = ({
  isOpen,
  onClose,
  type,
  className,
}: {
  isOpen: boolean;
  onClose: () => void;
  type: "Savings" | "Crypto" | "Stock";
  className?: string;
}) => {
  const [date, setDate] = useState<Date>(new Date());
  const [entry, setEntry] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [equity, setEquity] = useState<string>("");
  const [rate, setRate] = useState<string>("");
  const { addRecord } = useInvestmentRecords();
  const { user } = useUser();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newRecord = {
      userId: user?.id ?? "",
      date: date,
      type: type,
      entry: entry,
      amount: amount,
      description: description,
      equity: equity,
      rate: rate,
    };

    addRecord(newRecord);
    setDate(new Date());
    setEntry("");
    setAmount("");
    setDescription("");
    setEquity("");
    setRate("");
  };

  if (!isOpen) return null;

  return (
    <div
      className={`w-[80%] absolute z-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-start items-center bg-[#070707] rounded-2xl shadow-lg text-start text-neutral-50 ${className} `}
    >
      <p className="w-full text-sm text-stone-300 font-medium px-4 pt-4">
        Stack {type}
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start w-full space-y-4 px-[1rem] py-[1rem]"
      >
        {type === "Savings" && (
          <div>
            <div className="flex flex-row justify-between items-center w-full">
              <label className="text-sm w-[6rem] text-start text-gray-400">
                Bank
              </label>
              <input
                name="bank"
                type="text"
                value={entry}
                maxLength={15}
                onChange={(e) => setEntry(e.target.value)}
                className="border-[0.01px] border-gray-500 rounded-lg pl-3 py-1.5"
              />
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <label className="text-sm w-[6rem] text-start text-gray-400">
                Description
              </label>
              <input
                name="description"
                type="text"
                value={description}
                maxLength={25}
                onChange={(e) => setDescription(e.target.value)}
                className="border-[0.01px] border-gray-500 rounded-lg pl-3 py-1.5"
              />
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <label className="text-sm w-[6rem] text-start text-gray-400">
                Amount
              </label>
              <input
                name="amount"
                type="number"
                placeholder="$"
                value={amount}
                step={0.01}
                onChange={(e) => setAmount(e.target.value)}
                min={0}
                className="border-[0.01px] border-gray-500 rounded-lg pl-3 py-1.5"
              />
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <label className="text-sm w-[6rem] text-start text-gray-400">
                Interest Rate
              </label>
              <input
                name="interest"
                type="number"
                placeholder="%"
                value={rate}
                min={0}
                step={0.01}
                onChange={(e) => setRate(e.target.value)}
                className="border-[0.01px] border-gray-500 rounded-lg pl-3 py-1.5"
              />
            </div>
            <div className="w-full flex justify-end gap-3 pr-4 pb-4">
              <button
                onClick={onClose}
                className="cursor-pointer text-gray-300 bg-zinc-900 py-1.5 px-2.5 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="cursor-pointer text-zinc-800 bg-gray-300 py-1.5 px-2.5 rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        )}

        {type === "Crypto" && (
          <div>
            <div className="flex flex-row justify-between items-center w-full">
              <label className="text-sm w-[6rem] text-start text-gray-400">
                Coin Name
              </label>
              <input
                name="name"
                type="text"
                placeholder=""
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                className="border-[0.01px] border-gray-500 rounded-lg pl-3 py-1.5"
              />
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <label className="text-sm w-[6rem] text-start text-gray-400">
                Equity (Shares)
              </label>
              <input
                name="equity"
                type="number"
                value={equity}
                onChange={(e) => setEquity(e.target.value)}
                className="border-[0.01px] border-gray-500 rounded-lg pl-3 py-1.5"
              />
            </div>
            <div className="w-full flex justify-end gap-3 pr-4 pb-4">
              <button
                onClick={onClose}
                className="cursor-pointer text-gray-300 bg-zinc-900 py-1.5 px-2.5 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="cursor-pointer text-zinc-800 bg-gray-300 py-1.5 px-2.5 rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        )}

        {type === "Stock" && (
          <div>
            <div className="flex flex-row justify-between items-center w-full">
              <label className="text-sm w-[6rem] text-start text-gray-400">
                Ticker
              </label>
              <input
                name="ticker"
                type="text"
                placeholder=""
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                className="border-[0.01px] border-gray-500 rounded-lg pl-3 py-1.5"
              />
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <label className="text-sm w-[6rem] text-start text-gray-400">
                Equity (Shares)
              </label>
              <input
                name="equity"
                type="number"
                value={equity}
                onChange={(e) => setEquity(e.target.value)}
                className="border-[0.01px] border-gray-500 rounded-lg pl-3 py-1.5"
              />
            </div>
            <div className="w-full flex justify-end gap-3 pr-4 pb-4">
              <button
                onClick={onClose}
                className="cursor-pointer text-gray-300 bg-zinc-900 py-1.5 px-2.5 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="cursor-pointer text-zinc-800 bg-gray-300 py-1.5 px-2.5 rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default InvestmentModal;
