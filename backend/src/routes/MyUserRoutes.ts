import Express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck } from "../middleware/auth";

const router = Express.Router();

router.post("/",jwtCheck, MyUserController.createCurrentUser);

export default router;
