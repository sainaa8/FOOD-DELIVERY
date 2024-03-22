import React from "react";
import { Stack } from "@mui/material";
import { ZahialgiinTuuh } from "./ZahialgiinTuuh";
import { ZahialgiinDelgerengui } from "./ZahialgiinDelgerengui";
import { GetOrder } from "@/app/orderHistory/page";

export const OrderHistory = async () => {
  const data = await GetOrder();


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
