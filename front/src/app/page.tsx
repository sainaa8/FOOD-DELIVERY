"use client";

import Image from "next/image";

import { Grid, Box, Stack } from "@mui/material";
import { Option } from "@/components/home/Options";
import { Sale } from "@/components/home/Sale";
import { MainFood } from "@/components/home/MainFood";
import { Morsel } from "@/components/home/Morsel";
import { Sweet } from "@/components/home/Sweet";

export default function Home() {
  return (
    <Stack sx={{ display: "flex", justifyContent: "center" }}>
      <Stack>
        <Stack
          sx={{
            width: "100vw",
            height: "790px",
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
          }}
        >
          <Option />
          <Sale />
          <MainFood />
          <Morsel />
          <Sweet />
        </div>
      </Stack>
    </Stack>
  );
}
