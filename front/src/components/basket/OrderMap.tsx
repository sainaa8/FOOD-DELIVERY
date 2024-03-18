"use client";
import React from "react";
import Image from "next/image";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { MouseEvent } from "react";

type OrderDiteal = {
  price: string | number;
  image: string;
  name: string;
  amount: number | string;
  ingredients: string[];
};
export const ModelForMap = (props: OrderDiteal) => {
  const { price, image, name, amount, ingredients } = props;

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
          <div>
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

export const OrderMap = () => {
  const itemsInBasket = JSON.parse(localStorage.getItem("items") || "[]");
  console.log(itemsInBasket);

  const deleteItem = (event: MouseEvent<HTMLDivElement>) => {
    const foodId = event.currentTarget.id;

    console.log(foodId);
    const newItems = itemsInBasket.filter(
      (el: any) => el.foodId._id !== foodId
    );
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      {itemsInBasket &&
        itemsInBasket?.map((el: any, index: number) => {
          return (
            <div key={index} onClick={deleteItem} id={el.foodId._id}>
              <ModelForMap
                price={el.foodId.price}
                image={el.foodId.image}
                name={el.foodId.name}
                amount={el.amount}
                ingredients={el.foodId.ingredients}
              />
            </div>
          );
        })}
    </div>
  );
};
