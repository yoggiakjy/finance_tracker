import express, { Request, Response } from "express";
import FinancialRecordModel from "../schema/financial-record";

const router = express.Router();

router.get("/getAllByUserId/:userId", async (req: Request, res: Response): Promise<any> => {
    try {
        const userId = req.params.userId;
        if (!userId) {
            return res.status(404).send("User ID is required!");
        }

        const financialRecords = await FinancialRecordModel.find({userId: userId});
        if (!financialRecords || financialRecords.length === 0) {
            return res.status(404).send("No records found for the user!")
        }

        res.status(200).send(financialRecords);
    } catch (err) {
        res.status(500).send(err);
    }
});

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
            newRecordBody,
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