"use client";
import { Stack } from "@mui/material";

import { Options } from "../home/OneModel";

type Sda = {
  data: FoodType[];
};
export const SearchMap = (props: Sda) => {
  const { data } = props;
  console.log(data);

  return (
    <Stack>
      <Stack
        direction="row"
        sx={{
          gap: "120px",
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {data.length > 0 ? (
          <div>
            {data?.map((el: FoodType, index: number) => (
              <div key={index} id={el._id}>
                <Options zurag={el.image} text={el.name} une={el.price} />
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[100px] w-[100px]">hailt hooson</div>
        )}
      </Stack>
    </Stack>
  );
};
