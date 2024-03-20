import { Response, Request } from "express";
import { UserModel } from "../../db";
import { PasswordCompare } from "../../utils";
import { tokenizer } from "../../utils";

const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const loginQuery = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user: any = await getUserByEmail(email);

  const token = tokenizer(user._id.toString());
  console.log(token);
  return token;
};
