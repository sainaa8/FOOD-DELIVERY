import React from "react";
import { Stack } from "@mui/material";
import { Foods } from "./Foods";
export const VarietyOfFoods = () => {
  return (
    <Stack sx={{ display: "flex", justifyContent: "center" }}>
      <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
          }}
        >
          <Stack
            direction="row"
            sx={{
              padding: " 60px 0",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <Stack
              sx={{
                padding: "10px 0px",
                width: "410px",
                border: "1px solid black",
                borderRadius: "8px",
                fontSize: "25px",
                fontFamily: "sans-serif",
                alignItems: "center",
              }}
            >
              Breakfast{" "}
            </Stack>
            <Stack
              sx={{
                padding: "10px 0px",
                width: "410px",
                border: "1px solid black",
                borderRadius: "8px",
                fontSize: "25px",
                fontFamily: "sans-serif",
                alignItems: "center",
              }}
            >
              Soup
            </Stack>
            <Stack
              sx={{
                padding: "10px 0px",
                width: "410px",
                border: "1px solid black",
                borderRadius: "8px",
                fontSize: "25px",
                fontFamily: "sans-serif",
                alignItems: "center",
              }}
            >
              Main Course
            </Stack>
            <Stack
              sx={{
                padding: "10px 0px",
                width: "410px",
                alignItems: "center",
                border: "1px solid black",
                borderRadius: "8px",
                fontSize: "25px",
                fontFamily: "sans-serif",
              }}
            >
              Dessert
            </Stack>
          </Stack>
          <Stack>
            <Foods />
          </Stack>
        </div>
      </Stack>
    </Stack>
  );
};
