import { Router } from "express";
import { CreateFoodController, GetFoodsController } from "../../controllers";

export const FoodRouter = Router();

FoodRouter.post("/foods", GetFoodsController);
FoodRouter.post("/createFood", CreateFoodController);
