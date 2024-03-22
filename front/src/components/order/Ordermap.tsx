import { Stack } from "@mui/material";
import Image from "next/image";
import { useContext } from "react";
import { OrderFoodContext } from "../Provider/orderFoodProvider";

type OrderType = {
  image: string;
  name: string;
  ingredients: string;
  price: number;
  amount: string | number;
};

const Model = (props: OrderType) => {
  const { image, name, price, ingredients, amount } = props;
  return (
    <Stack
      direction="row"
      sx={{
        gap: "10px",
        borderTop: "1px solid black",
        marginTop: "6px",
        paddingTop: "6px",
      }}
    >
      <div>
        <Image alt="" src={image} width={184} height={121} />
      </div>
      <Stack style={{ width: "184px", gap: "10px" }}>
        <div style={{ fontWeight: "bold" }}>{name}</div>
        <div style={{ color: "green" }}>{Number(price).toLocaleString()}</div>
        <div style={{ color: "grey" }}>{ingredients}</div>
        <div>({amount}) </div>
      </Stack>
    </Stack>
  );
};

export const OrderMap = () => {
  const orderedFood = JSON.parse(localStorage.getItem("ordered") || "[]");
  console.log(orderedFood, "ordered");
  //
  const itemsInBasket = JSON.parse(localStorage.getItem("items") || "[]");
  console.log(itemsInBasket, "zuu");

  return (
    <Stack>
      {orderedFood?.map((el: any, index: number) => {
        return (
          <div key={index}>
            <Model
              image={el.image}
              name={el.name}
              price={el.price}
              ingredients={el.ingredients}
              amount={el.amount}
            />
          </div>
        );
      })}
    </Stack>
  );
};
