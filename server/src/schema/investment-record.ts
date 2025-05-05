import mongoose from "mongoose";

interface InvestmentRecord {
    userId: string;
    date: Date;
    type: "Savings" | "Crypto" | "Stock";
    entry: string;
    amount: string;
    description?: string;
    equity?: string;
    rate?: string;
};

const investmentRecordSchema = new mongoose.Schema<InvestmentRecord>({
    userId: {type: String, required: true },
    date: {type: Date, required: true},
    type: {type: String, required: true},
    entry: {type: String, required: true},
    amount: {type: String, required: false},
    description: {type: String, required: false},
    equity: {type: String, required: false},
    rate: {type: String, required: false},
});

const InvestmentRecordModel = mongoose.model<InvestmentRecord>(
    "InvestmentRecord",
    investmentRecordSchema
);

export default InvestmentRecordModel