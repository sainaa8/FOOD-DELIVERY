"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";

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
      <Grid
        container
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
        <Grid
          item
          sx={{
            marginBottom: "17px",
          }}
        >
          <Box>НҮҮР</Box>
        </Grid>
        <Grid
          item
          sx={{
            marginBottom: "17px",
          }}
        >
          <Box>ХООЛНЫ ЦЭС</Box>
        </Grid>
        <Grid
          item
          sx={{
            marginBottom: "17px",
          }}
        >
          <Box>ХҮРГЭЛТИЙН БҮС</Box>
        </Grid>
      </Grid>
      <Grid>
        <HeaderRight />
      </Grid>
    </Grid>
  );
};
