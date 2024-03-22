"use client";
import React, { useState } from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { Stack } from "@mui/material";

type Prop = {
  names: string[];
};
export const Delgerengui = (props: Prop) => {
  const { names } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 10px",
        justifyContent: "space-between",
        borderBottom: "1px solid #0468C8",

        height: "64px",
      }}
    >
      <div>({names})</div>
      <div>(3)</div>
    </div>
  );
};
type Food = {
  amount: number;
  _id: string;

  name: string;
  image: string;
  ingredients: string;
  price: string;
};
type Fo = {
  foods: Food[];
};
type PropsType = {
  data: Fo[];
};
export const ZahialgiinDelgerengui = (props: PropsType) => {
  const { data } = props;

  console.log(data);

  // const [names, setNames] = useState<string[]>([]);
  //   const [test, setTest] = useState<Food>({
  //     amount: 0,
  //     _id: "",
  //     name: "",
  //     image: "",
  //     ingredients: "",
  //     price: "",
  //   });

  console.log(data[0].foods);

  return (
    <Stack
      sx={{
        width: "432px",
        height: "720px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
        borderRadius: "6px",
        padding: "24px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: "24px" }}>Захиалгын дэлгэрэнгүй</div>

      <Stack sx={{ marginTop: "20px", overflow: "scroll" }}>
        {data?.map((el: any, index: number) => (
          <div key={index}>
            {/* {el.foods.map((el2: any, index2: number) => (
              <div key={index2}>
                <Delgerengui
                 names={el[index].el2[index2]? }
                />
              </div>
            ))} */}
            shaasanguude
          </div>
        ))}
      </Stack>
    </Stack>
  );
};
