"use client";

import { Stack, Button } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

import { OrderMap } from "./Ordermap";
import { useContext, useEffect, useState } from "react";
import { BasketContext } from "../Provider/basketModalProvider";
import { useRouter } from "next/navigation";
import { CheckTokenContext } from "../ckeckToken/CheckToken";
import axios from "axios";

type Arrey = {
  amount: number;
  image: string;
  ingredients: string;
  name: string;
  price: string;
  _id: string;
};
type AxiosType = {
  userId: string;
  foods: Arrey;
  address: string;
  nemelt: string;
};

export const OrderSecondStep = () => {
  const { input, setInput, nemelt, SetNemelt } = useContext(BasketContext);
  const { userData } = useContext(CheckTokenContext);
  const inTotal = JSON.parse(localStorage.getItem("total") || "[]");
  const orderedFood = JSON.parse(localStorage.getItem("ordered") || "[]");

  const { push } = useRouter();

  const handleClick = async () => {
    try {
      const { data } = await axios.post<AxiosType>(
        "http://localhost:8001/order",
        {
          userId: userData._id,
          foods: orderedFood,
          address: input,
          nemelt: nemelt,
        }
      );
      console.log(data);
      window.location.href = "/orderHistory";
      // localStorage.removeItem("ordered");
      // localStorage.removeItem("total");
    } catch (err: any) {
      console.log(err.messaage);
    }
  };

  return (
    <Stack
      sx={{
        fontFamily: "sans-serif",
        width: "432px",

        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",

        padding: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ color: "blue", fontSize: "70px" }}>
          <RadioButtonCheckedIcon style={{ fontSize: "50px" }} />
        </div>

        <Stack>
          <div style={{ color: "grey", fontSize: "15px" }}>Алхам 2</div>
          <div style={{ fontSize: "20px" }}>Хаягийн мэдээлэл оруулах</div>
          <div style={{ color: "blue", fontSize: "16px" }}>Хүлээгдэж байна</div>
        </Stack>
      </div>

      <Stack
        sx={{
          width: "100%",
          height: "360px",
          marginTop: "40px",
          overflow: "scroll",
        }}
      >
        <OrderMap />
      </Stack>
      <Stack
        direction="row"
        sx={{
          marginBottom: "4px",
          width: "100%",

          justifyContent: "space-around",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "20px",
          }}
        >
          <div>Нийт төлөх дүн</div>
          <div style={{ fontWeight: "bold" }}>
            {" "}
            {Number(inTotal).toLocaleString()}₮
          </div>
        </div>
        <Button
          onClick={handleClick}
          sx={{
            backgroundColor: "green",
            color: "white",
            padding: "10px 40px",
          }}
        >
          Захиалга хийх
        </Button>
      </Stack>
    </Stack>
  );
};
