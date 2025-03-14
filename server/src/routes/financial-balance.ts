import express, { Request, Response } from "express";
import FinancialBalanceModel from "../schema/financial-balance";

const router = express.Router();

router.get("/getBalanceByUserId/:userId", async (req: Request, res: Response): Promise<any> => {
    try {
        const userId = req.params.userId;
        if (!userId) {
            return res.status(404).send("User ID is required!");
        }

        const financialBalance = await FinancialBalanceModel.find({userId: userId});
        if (!financialBalance || financialBalance.length === 0) {
            return res.status(404).send("No records found for the user!");
        }

        res.status(200).send(financialBalance);
    } catch (err) {
        res.status(500).send(err);
    };
});

router.post("/", async (req: Request, res: Response): Promise<any> => {
    try {
        const newBalanceBody = req.body;
        const newBalance = new FinancialBalanceModel(newBalanceBody);
        const savedBalance = await newBalance.save();

        res.status(200).send(savedBalance);
    } catch (err) {
        res.status(500).send(err);
    };
});

router.put("/:id", async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id;
        const newBalanceBody = req.body;
        const balance = await FinancialBalanceModel.findByIdAndUpdate(
            id,
            newBalanceBody,
        );

        if (!balance) return res.status(404).send("Could not find a balance.");
        res.status(200).send(balance); 
    } catch (err) {
        res.status(404).send(err);
    };
});

router.delete("/:id", async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id;
        const balance = await FinancialBalanceModel.findByIdAndDelete(id);
        if (!balance) return res.status(404).send("Could not find a balance.");
        res.status(200).send(balance);
    } catch (err) {
        res.status(500).send(err);
    };
});

export default router;