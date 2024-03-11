import { Request, Response } from "express";
import { UserModel } from "../../db";
import { AxiosError } from "axios";

const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const numberUpdate = async (req: Request, res: Response) => {
  try {
    const { email, number } = req.body;
    const user = await getUserByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }
    await UserModel.findOneAndUpdate(
      { email: user.email },
      { $set: { number: 0 } }
    );
    return user;
  } catch (err: unknown) {
    const error = err as AxiosError;
    throw new Error(error.message);
  }
};
