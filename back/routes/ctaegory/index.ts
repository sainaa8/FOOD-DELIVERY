import { Router } from "express";
import {
  createCategoryController,
  getCatiController,
  getCatigoriesController,
} from "../../controllers";

export const CategoryRouter = Router();

CategoryRouter.post("/category", createCategoryController);
CategoryRouter.post("/getCategory", getCatiController);
CategoryRouter.get("/getCategories", getCatigoriesController);
