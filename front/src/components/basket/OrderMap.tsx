"use client";
import React, { useContext, useEffect, useState } from "react";
import { OrderFoodContext } from "../Provider/orderFoodProvider";
import { MouseEvent } from "react";
import { BasketContext } from "../Provider/basketModalProvider";

import { ModelForMap } from "./ModelForMap";
//import { useEffect } from "react";
type OrderMapTuype = {
  setInTotal: React.Dispatch<React.SetStateAction<number>>;
};

/* 
hoolni object 
dotroo id image price title
backruugaa yavuulahdaa ter object dotor ni amount aa oruulaad yavuulchihna

*/

export const OrderMap = (props: OrderMapTuype) => {
  const { setInTotal } = props;
  const { orderFood, setOrderFood, test, setTest } =
    useContext(OrderFoodContext);
  const { input, nemelt } = useContext(BasketContext);
  console.log(orderFood, "orderFood");

  const [localData, setLocalData] = useState([]);
  const [tempTotal, setTempTotla] = useState([]);

  // console.log(tempTotal);

  const itemsInBasket = JSON.parse(localStorage.getItem("items") || "[]");

  useEffect(() => {
    setLocalData(itemsInBasket);
  }, []);

  const deleteItem = (event: MouseEvent<HTMLDivElement>) => {
    const foodId = event.currentTarget.id;

    // console.log(foodId);
    const newItems = itemsInBasket.filter(
      (el: any) => el.foodId._id !== foodId
    );
    localStorage.setItem("items", JSON.stringify(newItems));
    setLocalData(newItems);
  };

  const addButton = (index: number) => {
    const newObj: any = [...localData];
    newObj[index].amount = newObj[index].amount + 1;
    setLocalData(newObj);
    localStorage.setItem("items", JSON.stringify(newObj));
  };

  const minusButton = (index: number) => {
    const newObj: any = [...localData];
    if (newObj[index].amount > 1) {
      newObj[index].amount = newObj[index].amount - 1;
      setLocalData(newObj);
      localStorage.setItem("items", JSON.stringify(newObj));
    }
  };

  useEffect(() => {
    let price = 0;
    itemsInBasket?.map((item: any, index: number) => {
      const num = Number(item.foodId.price) * Number(item.amount);
      price = price + num;
    });
    setInTotal(price);

    ////gertee ochood martchiwaa odoo hudaldan awah button darahaad is loggid inee shalgaad ai sda min untkushde

    setOrderFood(
      localData?.map((el: any, index: number) => {
        el.foodId.amount = el.amount;
        return el.foodId;
      })
    );
  }, [localData]);

  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      {itemsInBasket &&
        localData?.map((el: any, index: number) => {
          return (
            <div key={index}>
              <ModelForMap
                setTempTotla={setTempTotla}
                minusButton={() => minusButton(index)}
                addButton={() => addButton(index)}
                deleteItem={deleteItem}
                id={el.foodId._id}
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

// const filtered = itemsInBasket?.filter(
//   (el) => el.foodId._id === basketObj.foodId._id
// );
// if (filtered) {
//   localStorage.setItem(
//     "items",
//     JSON.stringify([
//       ...itemsInBasket,
//       (filtered.amout = filtered.amout + basketObj.amount),
//     ])
//   );
//   return [...prev];
// }
