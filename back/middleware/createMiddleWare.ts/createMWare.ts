import { Request, Response, NextFunction } from "express";
export const createMWare = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, phone, password } = req.body;
    if (!name || !email || !phone || !password) {
      throw new Error("pls fill all fields");
    }
    next();
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
