import { Request, Response } from "express";
import { LoginQuery } from "../../queries";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await LoginQuery(req);

    res.send({ message: "Success", user });
  } catch (err: any) {
    res.send(err.message);
  }
};

import { loginQuery } from "../../queries";
export const login = async (req: Request, res: Response) => {
  try {
    const result = await loginQuery(req, res);

    res.send({ message: "Success", result });
  } catch (err: any) {
    res.send(err.message);
  }
};
