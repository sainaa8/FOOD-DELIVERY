import React from "react";
import { Stack, Box } from "@mui/material";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";

type PropsType = {
  icon: any;
  text1: string;
  text2: string;
};
export const Options = (props: PropsType) => {
  const { icon, text1, text2 } = props;
  return (
    <Stack
      sx={{
        width: "400px",
        height: "225px",
        border: "1px solid grey",
        flexBasis: 300,
        borderRadius: "16px",
        boxShadow: "5px 5px 20px grey",
        padding: "20px 20px",
        justifyContent: "space-around",
      }}
    >
      <Stack
        sx={{
          color: "green",
          fontSize: "60px",
          marginLeft: "20px",
          marginTop: "20px",
        }}
      >
        {icon}
      </Stack>
      <Stack>
        <Box
          sx={{
            fontSize: "30px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
          }}
        >
          {text1}
        </Box>
        <Box
          sx={{
            fontSize: "24px",
            fontFamily: "sans-serif",
            color: "#272727",
            marginTop: "5px",
          }}
        >
          {text2}
        </Box>
      </Stack>
    </Stack>
  );
};
