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
        width: "380px",
        height: "425px",

        flexBasis: 300,
        justifyContent: "space-around",
        transition: "1s",

        "&:hover": { transform: "scale(1.04)", cursor: "pointer" },
        "&:active": { transform: "scale(0.9)" },
      }}
    >
      <Image
        alt=""
        src={zurag}
        width={478}
        height={305}
        style={{ borderRadius: "16px" }}
      />
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
