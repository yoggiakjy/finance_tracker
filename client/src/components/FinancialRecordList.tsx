import { useFinancialRecords } from "../contexts/FinancialRecordContext";

const FinancialRecordList = () => {
  const { records } = useFinancialRecords();

  return (
    <div>
      {records.map((record) => (
        <div key={record.id} className="flex gap-4">
          <p>{record.date}</p>
          <p>{record.category}</p>
          <p>{record.description}</p>
          <p>{record.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default FinancialRecordList;
