import express, { Request, Response } from "express";
import FinancialRecordModel from "../schema/financial-record";

const router = express.Router();

router.get( 
  "/getAllByUserId/:userId",
  async (req: Request, res: Response): Promise<any> => {
    try {
      const userId = req.params.userId;
      if (!userId) {
        return res.status(404).send("User ID is required!");
      }

      const financialRecords = await FinancialRecordModel.find({
        userId: userId,
      });
      if (!financialRecords || financialRecords.length === 0) {
        return res.status(404).send("No records found for the user!");
      }

      res.status(200).send(financialRecords);
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

router.get(
  "/getAllByUserId/:userId/:year/:month",
  async (req: Request, res: Response): Promise<any> => {
    const { userId, month, year } = req.params;
    const monthNum = Number(month);
    const yearNum = Number(year);

    if (!userId) {
        return res.status(400).send("User ID is required!");
    }
    if (!month || !year) {
      return res.status(400).send("Month and year are required!");
    }
    if (monthNum < 1 || monthNum > 12) {
      return res.status(400).send("Invalid month, must be between 1 and 12!");
    }
    if (yearNum < 2000 || yearNum > 2100) {
      return res
        .status(400)
        .send("Year out of range, must be between 2000 and 2100!");
    }

    try {
      const startDate = new Date(yearNum, monthNum - 1, 1);
      const endDate = new Date(yearNum, monthNum, 0);
        
      const financialRecords = await FinancialRecordModel.find({
        userId: userId,
        date: { $gte: startDate, $lte: endDate },
      });

      if (!financialRecords || financialRecords.length === 0) {
        return res.status(404).send("No records found for the user!");
      }

      res.status(200).send(financialRecords);
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

router.post("/", async (req: Request, res: Response): Promise<any> => {
  try {
    const newRecordBody = req.body;
    const newRecord = new FinancialRecordModel(newRecordBody);
    const savedRecord = await newRecord.save();

    res.status(200).send(savedRecord);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/:id", async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id;
    const newRecordBody = req.body;
    const record = await FinancialRecordModel.findByIdAndUpdate(
      id,
      newRecordBody
    );

    if (!record) return res.status(404).send();
    res.status(200).send(record);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.delete("/:id", async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id;
    const record = await FinancialRecordModel.findByIdAndDelete(id);
    if (!record) return res.status(404).send();
    res.status(200).send(record);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
