import { Request } from "express";
import { FoodModel } from "../../db";

export const getFoodsQuery = async () => {
  const allFoods = FoodModel.find();
  return allFoods;
};
