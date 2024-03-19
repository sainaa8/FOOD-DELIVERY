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

import { userUpdatQuery } from "../../queries/user/userUpdate";
export const userUpController = async (req: Request, res: Response) => {
  try {
    const tempup = await userUpdatQuery(req, res);
    res.send(tempup);
  } catch (err: any) {
    res.send(err.message);
  }
};

import { createFoodQuery } from "../../queries/food/createFood";
export const CreateFoodController = async (req: Request, res: Response) => {
  try {
    const tempCF = await createFoodQuery(req);
    res.send(tempCF);
  } catch (err: any) {
    res.send(err.message);
  }
};

import { getFoodsQuery } from "../../queries/food/getFoodsQuery";
export const GetFoodsController = async (req: Request, res: Response) => {
  try {
    const tempGD = await getFoodsQuery(req);
    res.send(tempGD);
  } catch (err: any) {
    res.send(err.message);
  }
};
import { createCatigory } from "../../queries/category/create-catigory-query";
export const createCategoryController = async (req: Request, res: Response) => {
  try {
    const result = await createCatigory(req);
    res.status(200).send(result);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};

import { getCatigoryQuery } from "../../queries/category/get-catigory-query";
import { getCatigoriesQuery } from "../../queries/category/get-categories-query";

export const getCatiController = async (req: Request, res: Response) => {
  try {
    const result = await getCatigoryQuery(req);
    res.status(200).send(result);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};

export const getCatigoriesController = async (
  request: Request,
  res: Response
) => {
  try {
    const result = await getCatigoriesQuery();
    res.status(200).send(result);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
