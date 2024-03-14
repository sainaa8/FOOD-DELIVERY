import { Stack, Box } from "@mui/material";
import axios from "axios";

import { AllFoods } from "./AllFoods";
import Image from "next/image";

//////////////////////server side

const getAllFoods = async () => {
  try {
    const { data } = await axios.get<FoodType[]>("http://localhost:8001/foods");

    return data;
  } catch (error) {
    console.log(error);
  }
};

type OpenModelType = {
  handleOpen: () => void;
};

export const MainFood = async (props: OpenModelType) => {
  const data = await getAllFoods();

  return (
    <Stack
      sx={{
        padding: "20px 30px",
        direction: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {/*  */}
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
