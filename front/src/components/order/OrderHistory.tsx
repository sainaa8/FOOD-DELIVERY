import React from "react";
import { Stack } from "@mui/material";
import { ZahialgiinTuuh } from "./ZahialgiinTuuh";
import { ZahialgiinDelgerengui } from "./ZahialgiinDelgerengui";

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

export const OrderHistory = async (props: PropsType) => {
  const { data } = props;

  return (
    <Stack
      direction="row"
      sx={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: "180px",
        padding: "100px 0px",
      }}
    >
      <ZahialgiinTuuh data={data} />
      <ZahialgiinDelgerengui data={data} />
    </Stack>
  );
};
