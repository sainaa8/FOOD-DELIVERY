"use client";

import Image from "next/image";

import { Button, Typography } from "@mui/material";
import { SignUp } from "@/components/createAccount/SingUp";
import { Grid, Box } from "@mui/material";

export default function Home() {
  // const str: string = "fasdf";
  // const num: number = 45;
  // const bool: boolean = true;
  // const obj: object = {};
  // const obj1: { [key: string]: string } = {
  //   name: "sd",
  // };
  // const arr: string[] = [""];
  // const obj2: Record<string, number> = {};
  return (
    <Grid
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {/* <SignUp /> */}
      <Box>hallo world</Box>
    </Grid>
  );
}
