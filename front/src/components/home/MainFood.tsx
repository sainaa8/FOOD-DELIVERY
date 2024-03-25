import { Stack, Box } from "@mui/material";
import axios from "axios";

import { AllFoods } from "./AllFoods";
import Image from "next/image";

import { get } from "http";
//////////////////////server side
type ddda = {
  data: FoodType[];
};

export const MainFood = async (props: ddda) => {
  const { data } = props;

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
          gap: "30px",
          alignItems: "center",
          direction: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <AllFoods foods={data as FoodType[]} />
      </Stack>
    </Stack>
  );
};
