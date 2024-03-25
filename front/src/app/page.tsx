import Image from "next/image";

import { Grid, Box, Stack } from "@mui/material";
import { Option } from "@/components/home/Options";
import { MainFood } from "@/components/home/MainFood";
import axios from "axios";

const GetAllFoods = async () => {
  try {
    const { data } = await axios.post<FoodType[]>(
      "https://food-delivery-isg2.onrender.com/foods"
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const data = await GetAllFoods();

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

          <MainFood data={data as FoodType[]} />
        </div>
      </Stack>
    </Stack>
  );
}
