import { Request } from "express";
import { CategoryModel } from "../../db";

export const getCatigoryQuery = async (req: Request) => {
  const { id } = req.body;
  try {
    const category = await CategoryModel.findById({ _id: id }).populate(
      "foodId"
    );
    return category;
  } catch (err: any) {
    throw new Error(err);
  }
};
