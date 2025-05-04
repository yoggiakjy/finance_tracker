import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import financialBalanceRouter from "./routes/financial-balance";
import investmentRecordRouter from "./routes/investment-records";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  throw new Error("MongoDB URI is not defined in environment variables.");
}

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("FAILED TO CONNECT TO MONGODB: ", err));

app.use("/financial-records", financialRecordRouter);
app.use("/financial-balance", financialBalanceRouter);
app.use("/investment-records", investmentRecordRouter);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
