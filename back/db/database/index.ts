import { connect, set } from "mongoose";

// const CONNECTION_STRING: string =
//   "mongodb+srv://sainaa:Jargal88856025@sainaa.p2haqu5.mongodb.net/";

import dotenv from "dotenv";
dotenv.config();

const CONNECTION_STRING: string = process.env.CONNECTION_STRING || "";

export const connectDB = async () => {
  set("strictQuery", false);
  try {
    await connect(CONNECTION_STRING);
    console.log("dbinit is ");
  } catch (err) {
    console.log("dbinit is not");
  }
};
