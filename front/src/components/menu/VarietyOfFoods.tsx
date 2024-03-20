"use client";
import React from "react";
import { Stack, Button } from "@mui/material";
import { Foods } from "./Foods";
import { CategoriesType } from "@/app/menu/page";
import { useState, useEffect } from "react";
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
  const [catId, setCatId] = useState("");
  console.log(catId);

  const [data, setData] = useState<DataType>({
    name: "",
    foodId: [],
    id: "",
  });

  useEffect(() => {
    const defaultdata = async () => {
      try {
        const { data } = await axios.post<DataType>(
          "http://localhost:8001/getCategory",
          {
            id: categories[0].id,
          }
        );
        console.log(data);
        setData(data);
        setCatId(categories[0].id);
      } catch (err) {
        console.log(err);
      }
    };
    defaultdata();
  }, []);

  const handleClick = async (event: MouseEvent<HTMLDivElement>) => {
    const foodId = event.currentTarget.id;
    console.log(foodId);

    try {
      const { data } = await axios.post<DataType>(
        "http://localhost:8001/getCategory",
        {
          id: foodId,
        }
      );
      console.log(data);
      setData(data);
      setCatId(foodId);
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
            width: "85%",
            marginTop: "70px",
          }}
        >
          {categories?.map((el: any, index: number) => (
            <div
              key={index}
              style={{
                borderRadius: "10px",
                cursor: "pointer",
                border: "1px solid grey",
                display: "flex",
                backgroundColor: `${el.id == catId ? "green" : "white"}`,
              }}
              onClick={handleClick}
              id={el.id}
            >
              <Button
                // checked="checked"

                sx={{
                  width: "283px",
                  height: "40px",
                  color: `${el.id == catId ? "white" : "black"}`,
                }}
              >
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
