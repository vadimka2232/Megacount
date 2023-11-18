import { Wallet } from "../models/models";
import { Request, Response } from "express";

class WalletController {
    async create(req: Request, res: Response) {
        const { userId, title, incomes, expenses } = req.body;
        const wallet = await Wallet.create({
            userId,
            title,
            incomes,
            expenses,
        });

        return res.json(wallet);
    }

    async getAll(res: Response) {
        const wallet = await Wallet.findAll();
        res.json(wallet);
    }

    async delete(req: Request, res: Response) {}

    async getOne(req: Request, res: Response) {
        const { id } = req.params;
        const wallet = await Wallet.findOne({
            where: { id },
        });

        const title = wallet?.dataValues.title;

        return res.json(title);
    }
}

export default WalletController;
