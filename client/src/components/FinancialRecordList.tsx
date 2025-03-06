import { useFinancialRecords } from "../contexts/FinancialRecordContext";

const FinancialRecordList = ({
  year,
} : {
  year?: string;
}) => {
  const { records } = useFinancialRecords();
  console.log(records[0])
  return (
    <div>
      {year && <div>{year}</div>}
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
