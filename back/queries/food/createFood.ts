import { Request } from "express";
import { FoodModel } from "../../db";

export const createFoodQuery = async (req: Request) => {
  const { name, image, ingredients, price } = req.body;

  const result = await FoodModel.create({ name, image, ingredients, price });
  return result._id;
};
