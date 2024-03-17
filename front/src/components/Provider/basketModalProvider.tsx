"use client";
import React from "react";
import { useState, useContext, createContext } from "react";

type BasketContextType = {
  basketModal: boolean;
  setBasketModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export const BasketContext = createContext<BasketContextType>(
  {} as BasketContextType
);
export const BasketProvider = ({ children }: any) => {
  const [basketModal, setBasketModal] = useState(false);
  return (
    <BasketContext.Provider value={{ basketModal, setBasketModal }}>
      {children}
    </BasketContext.Provider>
  );
};