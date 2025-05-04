import { useEffect } from "react";
import { useFinancialRecords } from "../contexts/FinancialRecordContext";

const FinancialRecordList = ({
  year,
  month,
} : {
  year?: number;
  month?: number;
}) => {
  const { recordsByDate, fetchRecordsByDate } = useFinancialRecords();

  useEffect(() => {
    if (year && month) {
      fetchRecordsByDate(year, month);
    }
  }, [year, month, fetchRecordsByDate])

  return (
    <div className="relative z-50">
      {year && <div>{year}</div>}
      {month && <div>{month}</div>}
      {recordsByDate.map((record) => (
        <div key={record._id} className="flex gap-4">
          <p>{new Date(record.date).toISOString().split('T')[0]}</p>
          <p>{record.category}</p>
          <p>{record.description}</p>
          <p>{record.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default FinancialRecordList;
