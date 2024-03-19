"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { MouseEvent } from "react";
import { only } from "node:test";

type OrderDiteal = {
  price: number;
  image: string;
  name: string;
  amount: number | string;
  ingredients: string[];
  deleteItem: (event: MouseEvent<HTMLDivElement>) => void;
  id: any;
  addButton: () => void;
  minusButton: () => void;
  setTempTotla: React.Dispatch<React.SetStateAction<never[]>>;
};
export const ModelForMap = (props: OrderDiteal) => {
  const {
    price,
    image,
    name,
    amount,
    ingredients,
    deleteItem,
    id,
    addButton,
    minusButton,
    setTempTotla,
  } = props;

  const [test, setTest] = useState<any>([]);
  //   console.log(test);

  //   console.log(Number(price) * Number(amount));
//   let urjwer = Number(price) * Number(amount);
//   console.log(urjwer);

//   useEffect(() => {
  

//     setTempTotla(urjwer);
//   }, [price, amount]);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <div>
        <Image alt="" src={image} width={240} height={150} />
      </div>
      <div
        style={{
          width: "250px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "sans-serif",
          }}
        >
          <div>
            <div>{name}</div>
            <div style={{ color: "green" }}>{price}$</div>
          </div>
          <div onClick={deleteItem} id={id} style={{ cursor: "pointer" }}>
            <ClearOutlinedIcon />
          </div>
        </div>
        <div style={{ color: "grey" }}>{ingredients}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            onClick={minusButton}
            style={{
              padding: "6px 6px",
              backgroundColor: "green",
              color: "white",
            }}
          >
            <RemoveOutlinedIcon />
          </Button>
          <div>{amount}</div>
          <Button
            onClick={addButton}
            style={{
              padding: "6px 0px",
              backgroundColor: "green",
              color: "white",
            }}
          >
            <AddIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
