import { Router } from "express";
import { createMWare } from "../../middleware/createMiddleWare.ts/createMWare";
import { createUser, login, update } from "../../controllers";
import { loginMWare } from "../../middleware/loginMWare";
import { numberController } from "../../controllers";
export const router = Router();

router.post("/signup", createMWare, createUser);
// router.post("login",loginUser )
router.post("/login", loginMWare, login);
router.post("/number", numberController);
router.post("/recover", update);
