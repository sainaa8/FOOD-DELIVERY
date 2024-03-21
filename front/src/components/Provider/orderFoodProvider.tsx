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
  setOrderFood: React.Dispatch<React.SetStateAction<Food[]>>
};

export const OrderFoodContext = createContext<ContextType>({} as ContextType);

export const OrderFoodProvider = ({ children }: any) => {
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
    <OrderFoodContext.Provider value={{ orderFood, setOrderFood }}>
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
