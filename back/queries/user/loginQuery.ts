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

  // try {
  // if (!email || !password) {
  //   throw new Error("email or password missing");
  // }
  const user: any = await getUserByEmail(email);
  console.log(user);

  // if (!user) {
  //   throw new Error("User not Pound");
  // }
  // const isPassword = await PasswordCompare(password, user.password);
  // if (!isPassword) {
  //   throw new Error("wrong email or password");
  // }
  const token = tokenizer(user._id.toString());
  console.log(token);
  return token;
  // } catch (err: any) {
  //   res.status(400).send(err.message);
  // }
};
