"use client";
import React from "react";
import { Stack, Button } from "@mui/material";
import { Foods } from "./Foods";
import { CategoriesType } from "@/app/menu/page";
import { useState } from "react";
import axios from "axios";
import { MouseEvent } from "react";
// export type CategoriesType = {
//   name: string;
//   foodId: string;
//   id: string;
// };

type DataType = {
  name: string;
  foodId: FoodType[];
  id: string;
};

type CatiType = {
  categories: CategoriesType[];
};

export const VarietyOfFoods = ({ categories }: CatiType) => {
  // const [categoryID, setCategoryID] = useState("");
  // console.log(categoryID);
  const [data, setData] = useState<DataType>({
    name: "",
    foodId: [],
    id: "",
  });
  const handleClick = async (event: MouseEvent<HTMLDivElement>) => {
    const foodId = event.currentTarget.id;

    // console.log(foodId);

    try {
      const { data } = await axios.post<DataType>(
        "http://localhost:8001/getCategory",
        {
          id: foodId,
        }
      );
      console.log(data);
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack sx={{ display: "flex", justifyContent: "center" }}>
      <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          {categories?.map((el: any, index: number) => (
            <div
              key={index}
              style={{ display: "flex" }}
              onClick={handleClick}
              id={el.id}
            >
              <Button variant="outlined" sx={{ margin: "10px" }}>
                {el.name}
              </Button>
            </div>
          ))}
        </div>
      </Stack>
      <Foods data={data} />
    </Stack>
  );
};
