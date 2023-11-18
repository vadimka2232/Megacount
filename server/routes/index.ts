import { Router } from "express";
import userRouter from "./userRouter";
import walletRouter from "./walletRouter";

const router = Router();

router.use("/user", userRouter);
router.use("/wallet", walletRouter);

export default router;
