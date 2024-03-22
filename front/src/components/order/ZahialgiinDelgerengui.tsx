"use client";
import React, { useState } from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { Stack } from "@mui/material";

type Prop = {
  names: string[];
  amount: string;
};
export const Delgerengui = (props: Prop) => {
  const { names, amount } = props;
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
      <div>({names},)</div>
      <div>({amount})</div>
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
            <Delgerengui
              names={el.foods.map((el2: any, index2: number) => {
                return el2.name;
              })}
              amount={el.amount}
            />
          </div>
        ))}
      </Stack>
    </Stack>
  );
};
