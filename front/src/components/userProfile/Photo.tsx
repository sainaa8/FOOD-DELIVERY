import React from "react";
import Image from "next/image";
import { Stack } from "@mui/material";
export const Photo = () => {
  return (
    <Stack sx={{ alignItems: "center", gap: "30px" }}>
      <Image alt="" src="/Photo.png" width={100} height={100} />
      <Stack sx={{ fontFamily: "sans-serif", fontSize: "30px" }}>Sainaa_</Stack>
    </Stack>
  );
};
