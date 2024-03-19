import { CategoryModel } from "../../db";
import { Request } from "express";
export const createCatigory = async (req: Request) => {
  const { name, foodIds } = req.body;
  const result = await CategoryModel.create({
    name,
    foodId: [...foodIds],
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  return result._id;
};
