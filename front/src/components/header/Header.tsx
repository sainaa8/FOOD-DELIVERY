"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Stack } from "@mui/material";

import { Container } from "postcss";

import { HeaderRight } from "./HeaderRight";
export const Header = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{
        height: "60px",
        padding: "0 151px",
        width: "100vw",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          width: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "10px",
          fontFamily: "sans-serif",
          fontWeight: "600",
        }}
      >
        <Image alt="" src={"/Vector.png"} width={50} height={40} />
        <Stack
          sx={{
            marginBottom: "17px",
          }}
        >
          НҮҮР
        </Stack>
        <Stack
          sx={{
            marginBottom: "17px",
          }}
        >
          ХООЛНЫ ЦЭС
        </Stack>
        <Stack
          sx={{
            marginBottom: "17px",
          }}
        >
          ХҮРГЭЛТИЙН БҮС
        </Stack>
      </Stack>
      <Stack>
        <HeaderRight />
      </Stack>
    </Grid>
  );
};
