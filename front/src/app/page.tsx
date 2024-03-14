"use client";

import Image from "next/image";

import { Grid, Box, Stack } from "@mui/material";
import { Option } from "@/components/home/Options";
import { Sale } from "@/components/home/Sale";
import { MainFood } from "@/components/home/MainFood";


import * as React from "react";



export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack sx={{ display: "flex", justifyContent: "center" }}>
      <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
        <Stack
          sx={{
            width: "100vw",
            height: "800px",
            position: "relative",
            marginTop: "40px",
          }}
        >
          <Image src="/desc.png" alt="" layout="fill" />
        </Stack>
        <div
          style={{
            padding: "120px 0",
            gap: "90px",
            display: "flex",
            flexDirection: "column",
            width: "90%",
          }}
        >
          {/* <div onClick={handleOpen}>sadfasdf</div> */}
          <Option />
          <Sale />
          <MainFood handleOpen={handleOpen} />
        </div>
      </Stack>
      
    </Stack>
  );
}
