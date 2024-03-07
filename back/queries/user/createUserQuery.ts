import { Request, Response } from "express";
import { UserModel } from "../../db";
import { PasswordHash } from "../../utils";

export const LoginQuery = async (req: Request) => {
  try {
    const { name, email, phone, password } = req.body;
    
    const hash = PasswordHash(password);

    const user = await UserModel.create({
      name,
      email,
      phone,
      password: hash,
    });

    return user;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
