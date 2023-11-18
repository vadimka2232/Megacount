import Router from "express";
import WalletController from "../controllers/walletController";

const controller = new WalletController();
const router = Router();

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.delete("/", controller.delete);

export default router;
