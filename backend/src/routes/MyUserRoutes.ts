import Express from "express";
import MyUserController from "../controllers/MyUserController";

const router = Express.Router();

router.post("/", MyUserController.createCurrentUser);
export default router;
