import { Request, Response } from "express";
import { FoodModel, OrderModel, UserModel } from "../../db";
import { login } from "../../controllers";
import { ORDER_PROCESS } from "../../constant";

type Arrey = {
  amount: number;
  image: string;
  ingredients: string;
  name: string;
  price: string;
  _id: string;
};

const getfoodPrice = async (foodIds: Arrey[]) => {
  const prices = Promise.all(
    foodIds.map(async (el) => {
      const result = await FoodModel.findById({ _id: el._id });
      return Number(result?.price) * Number(el.amount);
    })
  );
  console.log(prices, "price");
  return prices;
};

export const CreateOrderQuery = async (req: Request) => {
  const { userId, foods, address, nemelt } = req.body;

  try {
    const isUserExist = await UserModel.findById({ _id: userId });
    if (!isUserExist) {
      throw new Error("User not found");
    }

    const earlytoday = new Date();
    earlytoday.setHours(0, 0, 0, 0);

    const now = new Date();

    const howManyAreThere = await OrderModel.countDocuments({
      createdAt: {
        $gte: earlytoday,
        $lte: now,
      },
    });

    const totalPrice = await getfoodPrice(foods);

    const sumOfTotalPrice = totalPrice.reduce(
      (accumulator: number, currentValue) => accumulator + Number(currentValue),
      0
    );

    const amounts = foods
      .filter((el: any) => el.hasOwnProperty("amount"))
      .map((el: any) => el.amount);

    const amount = amounts.reduce(
      (accumulator: number, currentValue: number) =>
        accumulator + Number(currentValue),
      0
    );
    console.log(amount, "ämountsss");

    // console.log(foods, "foods");
    console.log(totalPrice, "totalPrice");
    console.log(sumOfTotalPrice, "sumtotalPrice");

    const result = await OrderModel.create({
      userId,
      foods,
      address,
      nemelt,
      amount: amount,
      ordernumber: howManyAreThere + 1,
      totalPrice: sumOfTotalPrice.toString(),
      process: ORDER_PROCESS.PENDING,
    });
    return result;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
