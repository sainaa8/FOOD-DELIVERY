import { Request } from "express";
import { CategoryModel } from "../../db";

export const deleteCategoryQuery = async (req: Request) => {
  const { id } = req.body;

  const deletedFood = await CategoryModel.findOneAndDelete(
    {
      _id: id,
    },

    {
      new: true,
    }
  );

  return deletedFood;
};
