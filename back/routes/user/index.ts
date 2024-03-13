import { Router } from "express";
import { createMWare } from "../../middleware/createMiddleWare.ts/createMWare";
import {
  createUser,
  login,
  update,
  rePasswordController,
  numberController,
  checkTokenController,
} from "../../controllers";
import { loginMWare } from "../../middleware/loginMWare";

export const router = Router();

router.post("/signup", createMWare, createUser);
// router.post("login",loginUser )
router.post("/login", loginMWare, login);
router.post("/number", numberController);
router.post("/recover", update);
router.post("/repassword", rePasswordController);
router.post("/checkToken", checkTokenController);
