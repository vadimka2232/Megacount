import ApiError from "../error/ApiError";
import { Request, Response, NextFunction } from "express";

export default function (
    err: ApiError,
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (err instanceof ApiError) {
        res.status(err.status).json({ message: err.message });
    }
    return res.status(500).json({ message: "Непредвидена ошибка" });
}
