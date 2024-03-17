"use client";
import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

type OpenModalType = {
  open: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  foundFood: FoodType | null;
  setFoundFood: React.Dispatch<React.SetStateAction<FoodType | null>>;
};

export const OpenModalContext = createContext<OpenModalType>(
  {} as OpenModalType
);

export const OpenModalProvider = ({ children }: any) => {
  const [open, setOpenModal] = useState(false);
  const [foundFood, setFoundFood] = useState<FoodType | null>(null);

  return (
    <OpenModalContext.Provider
      value={{ open, setOpenModal, foundFood, setFoundFood }}
    >
      {children}
    </OpenModalContext.Provider>
  );
};
