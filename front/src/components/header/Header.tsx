"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { HeaderRight } from "./HeaderRight";
import { useLocation } from "react-router-dom";
// import { Pathname } from "react-router-dom";
import { usePathname } from "next/navigation";

export const Header = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const handleClickMenu = () => {
    push("/menu");
    console.log("asd");
  };

  const handleClickHome = () => {
    push("/");
  };

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
          onClick={handleClickHome}
          sx={{
            marginBottom: "17px",
            color: `${pathname === "/" ? "green" : "black"}`,
            cursor: "pointer",
          }}
        >
          НҮҮР
        </Stack>
        <Stack
          onClick={handleClickMenu}
          sx={{
            marginBottom: "17px",
            color: `${pathname === "/menu" ? "green" : "black"}`,
            cursor: "pointer",
          }}
        >
          ХООЛНЫ ЦЭС
        </Stack>
        <Stack
          sx={{
            marginBottom: "17px",
            cursor: "pointer",
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
