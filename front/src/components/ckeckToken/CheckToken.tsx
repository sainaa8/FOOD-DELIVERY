"use client";
import React from "react";
import { useState, createContext, useEffect } from "react";
import axios from "axios";

import { Stack } from "@mui/material";
type UserData = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  isAdmin: string;
};

type DataContextType = {
  isLoggedIn: boolean;
  userData: UserData;
};

export const CheckTokenContext = createContext<DataContextType>(
  {} as DataContextType
);
export const CheckTokenProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    _id: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    isAdmin: "",
  });

  const token = typeof window !== "undefined" && localStorage.getItem("Token");

  useEffect(() => {
    if (token) {
      const getUserToken = async () => {
        try {
          const { data } = await axios.post(
            "http://localhost:8001/checkToken",
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );

          setUserData(data);
          setIsLoggedIn(true);
        } catch (error) {
          console.log("errorororro");
        }
      };
      getUserToken();
    } else {
      console.log("sda");
      setIsLoggedIn(false);
    }
  }, [token]);
  // console.log(userData);
  // console.log(isLoggedIn);

  return (
    <CheckTokenContext.Provider value={{ userData, isLoggedIn }}>
      {children}
    </CheckTokenContext.Provider>
  );
};
