import jwt from "jsonwebtoken";
import { Secret, GetPublicKeyOrSecret } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export default function (req: Request, res: Response, next: NextFunction) {
    if (req.method === "OPTIONS") {
        next();
    }

    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Не авторизован" });
        }

        const SECRET_KEY = process.env.SECRET_KEY;

        if (!SECRET_KEY) return;

        const decoded = jwt.verify(token, SECRET_KEY);

        //@ts-ignore
        req.user = decoded;

        next();
    } catch (e) {
        res.status(401).json({ message: "Не авторизован" });
    }
}
