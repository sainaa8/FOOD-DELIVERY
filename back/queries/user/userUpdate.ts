import { Request, Response } from "express";
import { UserModel } from "../../db";

const getUserById = async (id: string) => {
  const user = await UserModel.findOne({ _id: id });
  return user;
};

export const userUpdatQuery = async (req: Request, res: Response) => {
  try {
    const { id, name, email, phone } = req.body;
    console.log(id);

    const user = await getUserById(id);
    if (!user) {
      return "user not found";
    }
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: user._id },
      { $set: { name: name, email: email, phone: phone } }
    );

    return updatedUser;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
