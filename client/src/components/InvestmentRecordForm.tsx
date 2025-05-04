import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useInvestmentRecords } from "../contexts/InvestmentRecordContext";

const InvestmentRecordForm = ({
  type,
}: {
  type: "Savings" | "Crypto" | "Stock";
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

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col items-start space-y-4 mt-8"
        onSubmit={handleSubmit}
      >
        <div className="flex space-x-3">
          <label className="w-[6rem] text-start">Date:</label>
          <input
            type="date"
            name="Date"
            value={date.toISOString().split("T")[0]}
            onChange={(e) => setDate(new Date(e.target.value))}
            className="border rounded-sm pl-1"
          />
        </div>

        <div className="flex space-x-3">
          <label className="w-[6rem] text-start">Entry:</label>
          <select
            name="Entry"
            value={category}
            id="hr-select"
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-sm"
          >
            {categoryList.map((group) => (
              <optgroup label={group.categoryGroup}>
                {group.categories.map((category) => (
                  <option value={category}>{category}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div className="flex justify-start space-x-3">
          <label className="w-[6rem] text-start">Description:</label>
          <textarea
            name="Description"
            value={description}
            placeholder="Enter a description..."
            rows={3}
            cols={30}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-sm p-1"
          />
        </div>

        <div className="flex space-x-3">
          <label className="w-[6rem] text-start">Amount:</label>
          <input
            name="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded-sm pl-3"
          />
        </div>
        <div className="w-full mt-[2rem]">
          <button
            type="submit"
            className="border-2 border-transparent hover:border-cyan-500 transition-colors duration-200 rounded-lg bg-gray-200 px-6 py-2 "
          >
            {" "}
            Add Record
          </button>
        </div>
      </form>
    </div>
  );
};

export default InvestmentRecordForm;
