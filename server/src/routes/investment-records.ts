import express, { Request, Response } from "express";
import InvestmentRecordModel from "../schema/investment-record";

const router = express.Router();

router.get(
  "/getAllByUserId/:userId",
  async (req: Request, res: Response): Promise<any> => {
    try {
      const userId = req.params.userId;
      if (!userId) {
        return res.status(404).send("User ID is required!");
      }

      const investmentRecords = await InvestmentRecordModel.find({
        userId: userId,
      });
      if (!investmentRecords || investmentRecords.length === 0) {
        return res.status(404).send("No records found for the user!");
      }

      res.status(200).send(investmentRecords);
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

router.post("/", async (req: Request, res: Response): Promise<any> => {
  try {
    const newRecordBody = req.body;
    const newRecord = new InvestmentRecordModel(newRecordBody);
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
    const record = await InvestmentRecordModel.findByIdAndUpdate(
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
    const record = await InvestmentRecordModel.findByIdAndDelete(id);
    if (!record) return res.status(404).send();
    res.status(200).send(record);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
