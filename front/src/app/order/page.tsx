"use client";

import { Stack } from "@mui/material";
import { OrderFirstStep } from "@/components/order/OrderFirstStep";
import { OrderSecondStep } from "@/components/order/OrderSecondPage";

function Order() {
  return (
    <Stack
      direction="row"
      sx={{
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px 0px",
        gap: "100px",
      }}
    >
      <div
        style={{
          marginTop: "28px",
        }}
      >
        <OrderFirstStep />
      </div>
      <div
        style={{
          marginTop: "28px",
        }}
      >
        <OrderSecondStep />
      </div>
    </Stack>
  );
}

export default Order;
