import { connectDB } from "./db/database";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(8001, () => {
  console.log("http://localhost:8001");
});
