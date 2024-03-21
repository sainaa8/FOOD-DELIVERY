import { Router } from "express";
import { CreateOrderController } from "../../controllers";

export const OrderRouter = Router();

OrderRouter.post("/order", CreateOrderController);
