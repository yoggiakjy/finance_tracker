import mongoose from "mongoose";

interface FinancialRecord {
    userId: string;
    date: string
    category: string;
    description: string;
    amount: number;
};

const financialRecordSchema = new mongoose.Schema<FinancialRecord>({
    userId: {type: String, required: true },
    date: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    amount: {type: Number, required: true},
});

const FinancialRecordModel = mongoose.model<FinancialRecord>(
    "FinancialRecord",
    financialRecordSchema
);

export default FinancialRecordModel;