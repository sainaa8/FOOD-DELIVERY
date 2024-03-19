import { Request } from "express";
import { CategoryModel } from "../../db";
export const getCatigoriesQuery = async () => {
  const categories = await CategoryModel.find();
  const newCategories = categories.map((item) => {
    return {
      name: item.name,
      id: item._id,
    };
  });

  return newCategories;
};
