import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const PasswordHash = (password: string) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};
export const PasswordCompare = async (password: string, hash: string) => {
  const compare = await bcrypt.compareSync(password, hash);
  return compare;
};

export const tokenizer = async (userId: string) => {
  const token = await jwt.sign({ userId }, "secret", { expiresIn: "1d" });
  return token;
};

import nodemailer, { Transport, TransportOptions } from "nodemailer";

const password = process.env.APP_HOST_EMAIL_PASSWORD;

export const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "gnasainaa4@gmail.com",
    pass: password,
    // pass: "maojfktndbavihkv",
  },
});
