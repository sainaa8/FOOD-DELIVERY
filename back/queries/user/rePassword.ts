import { Request, Response } from "express";
import { AxiosError } from "axios";
import { UserModel } from "../../db";
import { PasswordHash } from "../../utils";


const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const rePassword = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }
    const hash = PasswordHash(password);
    await UserModel.findOneAndUpdate(
      { email: user.email },
      { $set: { password: hash } }
    );
    
  } catch (err: unknown) {
    const error = err as AxiosError;
    throw new Error(error.message);
  }
};
