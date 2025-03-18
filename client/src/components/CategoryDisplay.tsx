import { useFinancialRecords } from "../contexts/FinancialRecordContext";

const CategoryDisplay = () => {
  const { records } = useFinancialRecords();
  const categoryTotals = records.reduce<{ [key: string]: number }>(
    (acc, record) => {
      if (acc[record.category]) {
        acc[record.category] += record.amount;
      } else {
        acc[record.category] = record.amount;
      }
      return acc;
    },
    {}
  );

  const aggregatedRecords = Object.keys(categoryTotals).map((category) => ({
    category,
    amount: categoryTotals[category],
  }));

  return (
    <div>
      <div className="w-full rounded-sm border text-lg font-light">
        <div>
          <div className="grid grid-cols-3 border-b">
            <p className="col-span-2 border-r px-[0.5rem] font-semibold">Category</p>
            <p className="px-[0.5rem] font-semibold">Total</p>
          </div>
          {aggregatedRecords.map((record, index) => (
            <div
              key={index}
              className="grid grid-cols-3 border-b last:border-b-0"
            >
              <p className="col-span-2 border-r px-[0.5rem]">
                {record.category}
              </p>
              <p
                className={`${
                  record.amount > 0 ? "text-green-600" : "text-red-500"
                } px-[0.5rem]`}
              >
                {record.amount.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDisplay;
