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

import { upQuery } from "../../queries/user/upQuery";
export const update = async (req: Request, res: Response) => {
  try {
    const temp = await upQuery(req, res);
    res.send({ message: "code sent", temp });
  } catch (err: any) {
    res.send(err.message);
  }
};

import { numberUpdate } from "../../queries/user/numberUpdate";
export const numberController = async (req: Request, res: Response) => {
  try {
    const tempNu = await numberUpdate(req, res);
    res.send(tempNu);
  } catch (err: any) {
    res.send(err.message);
  }
};

import { rePassword } from "../../queries/user/rePassword";
export const rePasswordController = async (req: Request, res: Response) => {
  try {
    const temp = await rePassword(req, res);
    res.send(temp);
  } catch (err: any) {
    res.send(err.message);
  }
};

import { checkToken } from "../../queries/user/checkToken";
export const checkTokenController = async (req: Request, res: Response) => {
  try {
    const temp = await checkToken(req, res);
    res.send(temp);
  } catch (err: any) {
    res.send(err.message);
  }
};
