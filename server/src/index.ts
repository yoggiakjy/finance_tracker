import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from './routes/financial-records';
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI = "mongodb+srv://antonykim:hKgwTS1ckHbktq2l@personalfinancetracker.oj1xa.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("FAILED TO CONNECT TO MONGODB: ", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});
