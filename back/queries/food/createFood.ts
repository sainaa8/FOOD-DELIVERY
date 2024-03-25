import { Request } from "express";
import { CategoryModel, FoodModel } from "../../db";

export const createFoodQuery = async (req: Request) => {
  const { name, image, ingredients, price, category } = req.body;

  const result = await FoodModel.create({ name, image, ingredients, price });

  const newFood = await CategoryModel.findOneAndUpdate(
    {
      name: category,
    },
    {
      $push: {
        foodId: [result._id],
      },
    },
    {
      new: true,
    }
  );

  return newFood;
};
