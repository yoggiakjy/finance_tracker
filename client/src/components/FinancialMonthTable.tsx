import { useFinancialRecords } from "../contexts/FinancialRecordContext";
import EditableCell from "./ui/EditableCell";

type FinancialMonthTableProps = {
  className?: string;
};

const FinancialMonthTable = ({ className }: FinancialMonthTableProps) => {
  const categories = ["Date", "Category", "Entry", "Amount", "Total", "Delete"];
  const { records, updateRecord, deleteRecord } = useFinancialRecords();
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <table className="text-lg font-light border rounded-sm">
        <thead>
          <tr className="grid grid-cols-8 border-b">
            {categories.map((category, index) => (
              <th key={index} className={`${category === "Entry" ? "col-span-3" : ""} border-r last:border-none px-[0.5rem]`}>
                {category}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {records.map((record, index) => (
            <tr
              key={index}
              className="w-[70rem] grid grid-cols-8 border-b last:border-none"
            >
              <td className="border-r px-[0.5rem] py-[0.3rem]">{record.date}</td>
              <td className="border-r px-[0.5rem] py-[0.3rem]">{record.category}</td>
              <td className="border-r px-[0.5rem] py-[0.3rem] col-span-3">
                <EditableCell
                  initialValue={record.description}
                  initialRecord={record}
                  field="description"
                  updateRecord={updateRecord}
                />
              </td>
              <td className="border-r px-[0.5rem] py-[0.3rem]">
                <EditableCell
                  initialValue={record.amount.toFixed(2)}
                  initialRecord={record}
                  field="amount"
                  updateRecord={updateRecord}
                  className={`${
                    record.amount < 0 ? "text-red-500" : "text-green-500"
                  } font-medium`}
                />
              </td>
              <td className="px-[0.5rem] py-[0.3rem] border-r">{record.amount.toFixed(2)}</td>
              <td className="px-[0.5rem] py-[0.3rem] flex justify-center items-center">
                <button onClick={() => deleteRecord(record._id ?? "")} className="border px-4 py-1 rounded-md bg-blue-400 text-white">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialMonthTable;
