import { Router } from "express";
import OpenAIController from "../controllers/openai.controller";
import UserController from "../controllers/user.controller";
var router = Router();

/* GET home page. */
router.get("/openai/questions", OpenAIController.getQuestions);
router.get("/user/score", UserController.getScore);
router.get("/user/:cpf", UserController.show);
router.post("/user/score", UserController.saveScore);

export default router;
