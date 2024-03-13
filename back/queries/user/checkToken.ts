import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { UserModel } from "../../db";

const getUserById = async (id: string) => {
  const user = await UserModel.findOne({ _id: id });
  return user;
};

export const checkToken = async (req: Request, res: Response) => {
  const header = req.headers.authorization;
  try {
    if (!header) {
      res.status(400).send("token not found");
      return;
    }
    const token = header.split(" ")[1];
    const data: any = jwt.decode(token);

    const user = await getUserById(data.userId);
    console.log(user);

    jwt.verify(token, "secret", (err, result) => {
      if (err) {
        throw new Error("provided token is not valid");
      } else {
        console.log(result, "asd");
      }
    });
    return user;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
