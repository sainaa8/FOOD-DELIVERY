"use actions";
import { Options } from "./Modal";
import { Stack } from "@mui/material";
import axios from "axios";
import { useState } from "react";

type DataType = {
  name: string;
  foodId: FoodType[];
  id: string;
};
type SS = {
  data: DataType;
};
export const Foods = (props: SS) => {
  const { data } = props;

  const [foodidData, setFoodIDdata] = useState();

  // console.log(data);

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
        {data.foodId.map((el: any, index: number) => (
          <div key={index}>
            <Options
              zurag={el.image}
              text={el.name}
              une={el.price}
            
            />
          </div>
        ))}
      </Stack>
    </Stack>
  );
};
