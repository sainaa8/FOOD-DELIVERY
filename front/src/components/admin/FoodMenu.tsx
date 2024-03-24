"use client";
import { Stack } from "@mui/material";
import { CategoriesType } from "@/app/admin/page";
import { MouseEvent, useState, useEffect } from "react";
import axios from "axios";
import { AdminFoods } from "./Foods";

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
  const [data, setData] = useState<DataType>({
    name: "",
    foodId: [],
    id: "",
  });

  const [catId, setCatId] = useState("");

  useEffect(() => {
    const defaultdata = async () => {
      try {
        const { data } = await axios.post<DataType>(
          "http://localhost:8001/getCategory",
          {
            id: category[0].id,
          }
        );
        console.log(data);
        setData(data);
        setCatId(category[0].id);
      } catch (err) {
        console.log(err);
      }
    };
    defaultdata();
  }, []);

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
      setData(data);
      setCatId(CatId);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  console.log(data);

  return (
    <Stack direction="row" sx={{ width: "100%", fontFamily: "sans-serif" }}>
      <Stack sx={{ width: "300px" }}>
        <div
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            marginBottom: "40px",
            marginTop: "40px",
          }}
        >
          Food menu
        </div>
        <Stack sx={{ gap: "10px", fontSize: "18px" }}>
          {category?.map((el: any, index: number) => (
            <div
              key={index}
              onClick={handleClick}
              id={el.id}
              style={{
                borderRadius: "8px",
                width: "300px",
                padding: "10px 0px",
                border: "1px solid black",
                backgroundColor: `${el.id == catId ? "green" : "white"}`,
                color: `${el.id == catId ? "white" : "black"}`,
              }}
            >
              {el.name}
            </div>
          ))}
        </Stack>
      </Stack>
      <div style={{ marginLeft: "40px", width: "100%" }}>
        <AdminFoods data={data} />
      </div>
    </Stack>
  );
};
