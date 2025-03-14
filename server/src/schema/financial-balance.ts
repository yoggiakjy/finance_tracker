import mongoose from "mongoose";

interface FinancialBalance {
    userId: string;
    date: string;
    balance: number;
};

const financialBalanceSchema = new mongoose.Schema<FinancialBalance>({
    userId: {type: String, required: true},
    date: {type: String, required: true},
    balance: {type: Number, required: true},
});

const FinancialBalanceModel = mongoose.model<FinancialBalance>(
    "FinancialBalance",
    financialBalanceSchema
)

export default FinancialBalanceModel;