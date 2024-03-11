import { AxiosError } from "axios";
import { Request, Response } from "express";
import { UserModel } from "../../db";

// import nodemailer, { Transport, TransportOptions } from "nodemailer";
import { transport } from "../../utils";

const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const upQuery = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const user = await getUserByEmail(email);
    console.log(user);

    if (!user) {
      throw new Error("User not found");
    }
    const randomNumber = Math.floor(Math.random() * 1000000);
    console.log(randomNumber);

    const options = {
      from: "gnasainaa4@gmail.com",
      to: email,
      subject: "Password reset",
      text: `Your password reset code is  ${randomNumber}`,
    };
    await transport.sendMail(options);

    const updatedUser = await UserModel.findOneAndUpdate(
      { email: user.email },
      { $set: { number: randomNumber } }
    );

    return updatedUser;
  } catch (err: unknown) {
    const error = err as AxiosError;
    throw new Error(error.message);
  }
};
