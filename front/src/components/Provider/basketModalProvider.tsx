"use client";
import React from "react";
import { useState, useContext, createContext } from "react";

type BasketContextType = {
  basketModal: boolean;
  inTotal: number;
  setInTotal: React.Dispatch<React.SetStateAction<number>>;
  setBasketModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export const BasketContext = createContext<BasketContextType>(
  {} as BasketContextType
);
export const BasketProvider = ({ children }: any) => {
  const [basketModal, setBasketModal] = useState(false);
  const [inTotal, setInTotal] = useState(0);
  return (
    <BasketContext.Provider
      value={{ basketModal, setBasketModal, inTotal, setInTotal }}
    >
      {children}
    </BasketContext.Provider>
  );
};
