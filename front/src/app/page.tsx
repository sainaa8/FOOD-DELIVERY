import Image from "next/image";

import { Grid, Box, Stack } from "@mui/material";
import { Option } from "@/components/home/Options";
import { Sale } from "@/components/home/Sale";
import { MainFood } from "@/components/home/MainFood";
import axios from "axios";
import * as React from "react";

const getAllFoods = async () => {
  try {
    const { data } = await axios.post<FoodType[]>(
      "http://localhost:8001/foods"
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const data = await getAllFoods();
  console.log(data);

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
          <MainFood data={data} />
        </div>
      </Stack>
    </Stack>
  );
}
