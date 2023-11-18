import Router from "express";
import UserController from "../controllers/userController";
import auth from "../middleware/auth";

const userController = new UserController();

const router = Router();
router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", auth, userController.check);

export default router;
