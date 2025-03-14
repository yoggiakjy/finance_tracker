import { useFinancialRecords } from "../contexts/FinancialRecordContext";

const FinancialMonthTable = ({ className }: { className?: string }) => {
  const categories = [
    "Date",
    "Category",
    "Entry",
    "Expense",
    "Income",
    "Total",
  ];
  const { records } = useFinancialRecords();
  return (
    <div
      className={`w-full flex justify-center items-center mt-[3rem] ${className}`}
    >
      <div className="w-[80%] grid grid-rows-2 text-2xl font-light border">
        <div className=" grid grid-cols-6 border-b">
          {categories.map((category, index) => (
            <p key={index} className="border-r last:border-none px-[0.5rem]">
              {category}
            </p>
          ))}
        </div>

        {records.map((record) => (
          <div
            key={record.id}
            className="grid grid-cols-6 border-b last:border-none"
          >
            <p className="border-r px-[0.5rem]">{record.date}</p>
            <p className="border-r px-[0.5rem]">{record.category}</p>
            <p className="border-r px-[0.5rem]">{record.description}</p>
            {(record.amount < 0 && (
              <p className="border-r border-black px-[0.5rem] text-red-500 font-medium">
                {record.amount}
              </p>
            )) || <p className="border-r px-[0.5rem]"></p>}
            {(record.amount > 0 && (
              <p className="border-r border-black px-[0.5rem] text-green-500 font-medium">
                {record.amount}
              </p>
            )) || <p className="border-r px-[0.5rem]"></p>}
            <p className="px-[0.5rem]">0</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialMonthTable;
