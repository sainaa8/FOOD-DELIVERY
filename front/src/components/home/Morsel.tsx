import React from "react";
import { Stack, Box } from "@mui/material";

import { Options } from "./OneModel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
export const Morsel = () => {
  const moc = [
    {
      zurag: "/pizza.png",
      text: "Food tart",
      une: "22,800",
    },
    {
      zurag: "/pizza.png",
      text: "Food tart",
      une: "22,800",
    },
    {
      zurag: "/pizza.png",
      text: "Food tart",
      une: "22,800",
    },
    {
      zurag: "/pizza.png",
      text: "Food tart",
      une: "22,800",
    },
  ];
  return (
    <Stack
      sx={{
        padding: "20px 30px",

        direction: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: "92%",
          marginBottom: "30px",
          paddingLeft: "20px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            width: "85%",
          }}
        >
          <Box>
            <Image alt="" src="/star.png" width={40} height={40} />
          </Box>
          <Box
            sx={{
              fontSize: "33px",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Салад ба зууш{" "}
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: "23px",
            fontFamily: "sans-serif",
            color: "green",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          Бүгдийг харах
          <ArrowForwardIosIcon />
        </Box>
         
      </Stack>
      <Stack
        direction="row"
        sx={{
          gap: "30px",
          alignItems: "center",
          direction: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {moc?.map((el, index) => (
          <div key={index}>
            <Options zurag={el.zurag} text={el.text} une={el.une} />
          </div>
        ))}
      </Stack>
    </Stack>
  );
};
