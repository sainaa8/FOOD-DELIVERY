"use client";
import React from "react";
import { useState, useContext, createContext } from "react";

type BasketContextType = {
  basketModal: boolean;
  inTotal: number;
  setInTotal: React.Dispatch<React.SetStateAction<number>>;
  setBasketModal: React.Dispatch<React.SetStateAction<boolean>>;
  input: string;
  nemelt: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  SetNemelt: React.Dispatch<React.SetStateAction<string>>;
};
export const BasketContext = createContext<BasketContextType>(
  {} as BasketContextType
);
export const BasketProvider = ({ children }: any) => {
  const [basketModal, setBasketModal] = useState(false);
  const [inTotal, setInTotal] = useState(0);

  const [input, setInput] = useState("");
  const [nemelt, SetNemelt] = useState("");
  return (
    <BasketContext.Provider
      value={{
        basketModal,
        setBasketModal,
        inTotal,
        setInTotal,
        input,
        setInput,
        nemelt,
        SetNemelt,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
