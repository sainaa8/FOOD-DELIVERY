"use client";
import { Stack, Button } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { OrderMap } from "./Ordermap";
import { useContext } from "react";
import { BasketContext } from "../Provider/basketModalProvider";
export const OrderSecondStep = () => {
  const { inTotal } = useContext(BasketContext);
  return (
    <Stack
      sx={{
        fontFamily: "sans-serif",
        width: "432px",

        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",

        padding: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ color: "blue", fontSize: "70px" }}>
          <RadioButtonCheckedIcon style={{ fontSize: "50px" }} />
        </div>

        <Stack>
          <div style={{ color: "grey", fontSize: "15px" }}>Алхам 2</div>
          <div style={{ fontSize: "20px" }}>Хаягийн мэдээлэл оруулах</div>
          <div style={{ color: "blue", fontSize: "16px" }}>Хүлээгдэж байна</div>
        </Stack>
      </div>

      <Stack
        sx={{
          width: "100%",
          height: "360px",
          marginTop: "40px",
          overflow: "scroll",
        }}
      >
        <OrderMap />
      </Stack>
      <Stack
        direction="row"
        sx={{
          marginBottom: "4px",
          width: "100%",

          justifyContent: "space-around",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "20px",
          }}
        >
          <div>Нийт төлөх дүн</div>
          <div style={{ fontWeight: "bold" }}>
            {" "}
            {Number(inTotal).toLocaleString()}₮
          </div>
        </div>
        <Button
          //   onClick={BuyFood}
          sx={{
            backgroundColor: "green",
            color: "white",
            padding: "10px 40px",
          }}
        >
          Захиалга хийх
        </Button>
      </Stack>
    </Stack>
  );
};
