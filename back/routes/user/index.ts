import { Router } from "express";
import { createMWare } from "../../middleware/createMiddleWare.ts/createMWare";
import { createUser, login } from "../../controllers";
import { loginMWare } from "../../middleware/loginMWare";

export const router = Router();

router.post("/signup", createMWare, createUser);
// router.post("login",loginUser )
router.post("/login", loginMWare, login);
