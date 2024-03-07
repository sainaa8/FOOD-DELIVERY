import { Request, Response, NextFunction } from "express";
import { UserModel } from "../db";
import { PasswordCompare } from "../utils";

const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const loginMWare = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("email and password are required");
    }
    const user = await getUserByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }
    const isPassword = await PasswordCompare(password, user.password);
    if (!isPassword) {
      throw new Error("wrong email or password");
    }

    next();
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
