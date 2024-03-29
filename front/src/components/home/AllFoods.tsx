"use client";
import React from "react";

import { MouseEvent, useEffect, useState } from "react";
import { Options } from "./OneModel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Stack, Box } from "@mui/material";
import Image from "next/image";
import { FoodDiteal } from "../FoodDiteal";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "861px",
  height: "394px",
  gap: "20px",
  p: 1,

  borderRadius: "16px",
  backgroundColor: "white",
};

type AllFoodsProps = {
  foods: FoodType[];
};

type ObjType = {
  _id: string;
  name: string;
  image: string;
  ingredients: string;
  price: string;
};

type Basket = {
  foodId: FoodType;
  amount: number;
};

export const AllFoods = ({ foods }: AllFoodsProps) => {
  const [foundFood, setFoundFood] = useState<FoodType | null>(null);

  const [num, setNum] = useState(12);
  const [moreButton, setMoreButton] = useState(false);

  const [open, setOpenModal] = useState<boolean>(false);
  const [basket, setBasket] = useState<Basket[]>([
    {
      foodId: { _id: "", name: "", image: "", ingredients: "", price: "" },
      amount: 1,
    },
  ]);

  const [basketObj, setBasketObj] = useState<{
    foodId: FoodType;
    amount: number;
  }>({
    foodId: { _id: "", image: "", ingredients: "", name: "", price: "" },
    amount: 1,
  });

  const handleClose = () => setOpenModal(false);
  const handleModalClick = () => setOpenModal(!open);

  const hanlerMin = () => {
    if (basketObj.amount > 1) {
      setBasketObj({ ...basketObj, amount: basketObj.amount - 1 });
    }
  };
  const handlerPlus = () => {
    setBasketObj({ ...basketObj, amount: basketObj.amount + 1 });
  };

  const handleFoodClick = (event: MouseEvent<HTMLDivElement>) => {
    const foodId = event.currentTarget.id;

    const filteredFood = foods.find(({ _id }) => _id === foodId);

    setBasketObj({ ...basketObj, foodId: filteredFood as FoodType });
    setFoundFood(filteredFood as FoodType);
    handleModalClick();
  };

  const itemsInBasket: Basket[] =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("items") || "[]");

  const Buy = () => {
    const filtered = itemsInBasket?.find(
      (el) => el.foodId._id === basketObj.foodId._id
    );

    if (filtered) {
      filtered.amount = filtered.amount + basketObj.amount;

      localStorage.setItem("items", JSON.stringify([...itemsInBasket]));
    } else {
      localStorage.setItem(
        "items",
        JSON.stringify([...itemsInBasket, basketObj])
      );
    }

    handleClose();
    setBasketObj({ ...basketObj, amount: 1 });
  };

  const handlerMore = () => {
    if (!moreButton) {
      setNum(12);
      setMoreButton(true);
    } else {
      setNum(foods.length);
      setMoreButton(false);
    }
  };

  // console.log(basket);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: "92%",

          marginBottom: "30px",
          paddingLeft: "20px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            width: "85%",
          }}
        >
          <Box>
            <Image alt="" src="/star.png" width={40} height={40} />
          </Box>
          <Box
            sx={{
              fontSize: "33px",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Үндсэн хоол
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: "23px",
            fontFamily: "sans-serif",
            color: "green",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
            "&:hover": { color: "orange", cursor: "pointer" },
            "&:active": { transform: "scale(0.9)" },
          }}
          onClick={handlerMore}
        >
          {moreButton ? " Хураах" : "Бүгдийг харах"}

          <ArrowForwardIosIcon />
        </Box>
         
      </Stack>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          gap: "40px",
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {foods?.slice(0, num).map((el: FoodType, index: number) => (
          <div key={index} onClick={handleFoodClick} id={el._id}>
            <Options zurag={el.image} text={el.name} une={el.price} />
          </div>
        ))}
      </Stack>

      <Modal open={open} onClose={handleClose}>
        <div style={style}>
          <FoodDiteal
            foundFood={foundFood as FoodType}
            basketObj={basketObj}
            handleClose={handleClose}
            Buy={Buy}
            hanlerMin={hanlerMin}
            handlerPlus={handlerPlus}
          />
        </div>
      </Modal>
    </div>
  );
};
//////////
///////////////
