import React from "react";
import { Stack, Box } from "@mui/material";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import Image from "next/image";
type PropsType = {
  zurag: any;
  text: string;
  une: string;
};
export const Options = (props: PropsType) => {
  const { zurag, text, une } = props;
  return (
    <Stack
      sx={{
        width: "400px",
        height: "425px",
        marginLeft: "-14%",
        flexBasis: 300,

        justifyContent: "space-around",
      }}
    >
      <Image alt="" src={zurag} width={510} height={385} />
      <Stack sx={{ marginLeft: "20px" }}>
        <Stack
          sx={{
            fontSize: "30px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            marginBottom: "7px",
          }}
        >
          {text}
        </Stack>
        <Stack
          sx={{
            fontSize: "30px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            color: "green",
          }}
        >
          {une}₮
        </Stack>
      </Stack>
    </Stack>
  );
};