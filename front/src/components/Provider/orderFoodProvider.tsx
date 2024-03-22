"use client";

import React from "react";
import { useState, createContext } from "react";

type Food = {
  amount: number;
  _id: string;
  name: string;
  image: string;
  ingredients: string;
  price: string;
};

type ContextType = {
  orderFood: Food[];
  setOrderFood: React.Dispatch<React.SetStateAction<Food[]>>;
  test: boolean;
  setTest: React.Dispatch<React.SetStateAction<boolean>>;
};

export const OrderFoodContext = createContext<ContextType>({} as ContextType);

export const OrderFoodProvider = ({ children }: any) => {
  const [test, setTest] = useState(false);
  const [orderFood, setOrderFood] = useState<Food[]>([
    {
      amount: 0,
      _id: "",
      name: "",
      image: "",
      ingredients: "",
      price: "",
    },
  ]);

  return (
    <OrderFoodContext.Provider
      value={{ orderFood, setOrderFood, test, setTest }}
    >
      {children}
    </OrderFoodContext.Provider>
  );
};

// amount: 0,
//     _id: "",
//     name: "",
//     image: "",
//     ingredients: "",
//     price: "",
