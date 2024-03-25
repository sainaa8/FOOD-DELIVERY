"use client";
import { Stack } from "@mui/material";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import { Options } from "../home/OneModel";
import { Modal, Button } from "@mui/material";

import { FoodDiteal } from "../FoodDiteal";
// import  from "@mui/material";

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

type Sda = {
  data: FoodType[];
};
type Basket = {
  foodId: FoodType;
  amount: number;
};

export const SearchMap = (props: Sda) => {
  const { data } = props;

  const [foundFood, setFoundFood] = useState<FoodType | null>(null);
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

    const filteredFood = data.find((el) => el._id === foodId);
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

  return (
    <Stack>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {data.length > 0 ? (
          <div>
            <Stack
              direction="row"
              sx={{
                gap: "30px",
                flexWrap: "wrap",
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                marginBottom: "90px",
              }}
            >
              {data?.map((el: FoodType, index: number) => (
                <div key={index} id={el._id} onClick={handleFoodClick}>
                  <Options zurag={el.image} text={el.name} une={el.price} />
                </div>
              ))}
            </Stack>
          </div>
        ) : (
          <Stack
            sx={{
              alignItems: "center",
              justifyContent: "center",
              padding: "170px 100px",
            }}
          >
            <Image alt="" src="/box.png" width={133} height={133} />
            <div
              style={{
                fontFamily: "sans-serif",
                fontSize: "20px",
                color: "grey",
                marginTop: "30px",
              }}
            >
              Уучлаарай илэрц олдсонгүй...
            </div>
          </Stack>
        )}
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
    </Stack>
  );
};
