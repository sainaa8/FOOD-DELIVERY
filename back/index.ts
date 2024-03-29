import { connectDB } from "./db/database";
import express, { type Application } from "express";
import cors from "cors";
import { router, FoodRouter, CategoryRouter, OrderRouter } from "./routes";

import dotenv from "dotenv";

dotenv.config();
connectDB();

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use(router);
app.use(FoodRouter);
app.use(CategoryRouter);
app.use(OrderRouter);

// Define the port to run the server on)

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
