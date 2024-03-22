"use client";
import { Stack } from "@mui/material";
import { CategoriesType } from "@/app/admin/page";
import { MouseEvent } from "react";
import axios from "axios";
type DataType = {
  name: string;
  foodId: FoodType[];
  id: string;
};

type Ss = {
  category: CategoriesType[];
};
export const FoodMenu = (props: Ss) => {
  const { category } = props;
  console.log(category, "dks;jsdnn''asmdálsmás;;;;;");

  const handleClick = async (event: MouseEvent<HTMLDivElement>) => {
    const CatId = event.currentTarget.id;
    console.log(CatId);

    try {
      const { data } = await axios.post<DataType>(
        "http://localhost:8001/getCategory",
        {
          id: CatId,
        }
      );
      console.log(data);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return (
    <Stack
      direction="row"
      sx={{ width: "100%", backgroundColor: "grey", fontFamily: "sans-serif" }}
    >
      <Stack sx={{ width: "300px" }}>
        <div
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            marginBottom: "40px",
          }}
        >
          Food menu
        </div>
        <Stack sx={{ gap: "10px", fontSize: "18px" }}>
          {category?.map((el: any, index: number) => (
            <div key={index} onClick={handleClick} id={el.id}>
              {el.name}
            </div>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
