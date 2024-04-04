import { Router } from "express";
import {
  createCategoryController,
  getCatiController,
  getCatigoriesController,
  DeleteCategoryController,
} from "../../controllers";

export const CategoryRouter = Router();

CategoryRouter.post("/category", createCategoryController);
CategoryRouter.post("/getCategory", getCatiController);
CategoryRouter.get("/getCategories", getCatigoriesController);
CategoryRouter.post("/deleteCategory", DeleteCategoryController);
