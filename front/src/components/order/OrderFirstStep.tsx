import { Stack } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState, useEffect } from "react";
import { InputsFields } from "./Inputs";
export const OrderFirstStep = () => {
  return (
    <Stack
      sx={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        width: "432px",
        padding: "30px",
      }}
    >
      <Stack
        direction="row"
        sx={{
          fontFamily: "sans-serif",
          width: "432px",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <div style={{ color: "blue", fontSize: "70px" }}>
          <RadioButtonCheckedIcon style={{ fontSize: "50px" }} />
        </div>

        <Stack>
          <div style={{ color: "grey", fontSize: "15px" }}>Алхам 1</div>
          <div style={{ fontSize: "20px" }}>Хаягийн мэдээлэл оруулах</div>
          <div style={{ color: "blue", fontSize: "16px" }}>Хүлээгдэж байна</div>
        </Stack>
      </Stack>
      <InputsFields />
    </Stack>
  );
};
