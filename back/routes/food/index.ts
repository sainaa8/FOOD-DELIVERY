import { Router } from "express";
import { CreateFoodController, GetFoodsController } from "../../controllers";

export const FoodRouter = Router();

FoodRouter.get("/foods", GetFoodsController);
FoodRouter.post("/createFood", CreateFoodController);
