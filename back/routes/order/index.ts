import { Router } from "express";
import { CreateOrderController } from "../../controllers";
import { GetOrderController } from "../../controllers";
export const OrderRouter = Router();

OrderRouter.post("/order", CreateOrderController);
OrderRouter.get("/getOrder", GetOrderController);
