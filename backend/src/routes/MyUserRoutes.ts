import Express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";

const router = Express.Router();

router.post("/",jwtCheck, MyUserController.createCurrentUser);
router.post("/",jwtCheck,jwtParse, MyUserController.updateCurrentUser);


export default router;
