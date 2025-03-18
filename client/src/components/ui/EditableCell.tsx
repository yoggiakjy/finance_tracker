import { useState } from "react";
import { FinancialRecord } from "../../lib/globalTypes";

type EditableCellProps = {
  initialValue: string | number;
  field: keyof FinancialRecord;
  initialRecord: FinancialRecord;
  updateRecord: (id: string, newRecord: FinancialRecord) => void;
  className?: string;
};

const EditableCell = ({
  initialValue,
  field,
  initialRecord,
  updateRecord,
  className,
}: EditableCellProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string | number>(initialValue);

  const handleBlur = () => {
    setIsEditing(false);
    const newRecord: FinancialRecord = {
      ...initialRecord,
      [field]: value,
    };
    updateRecord(initialRecord._id!, newRecord);
  };

  return (
    <div onClick={() => setIsEditing(true)} className={`${className}`}>
      {isEditing ? (
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
          onBlur={handleBlur}
					className="w-full box-border"
        />
      ) : typeof value === "string" ? (
        value
      ) : (
        value.toString()
      )}
    </div>
  );
};

export default EditableCell;
