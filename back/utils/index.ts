import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
