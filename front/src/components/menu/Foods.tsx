import React from "react";
import { Stack, Box } from "@mui/material";

import Image from "next/image";
type PropsType = {
  zurag: any;
  text: string;
  une: string;
  undsenUne: string;
};
export const Options = (props: PropsType) => {
  const { zurag, text, une, undsenUne } = props;
  return (
    <Stack
      sx={{
        flexBasis: 300,
        marginTop: "70px",
        justifyContent: "space-around",
        transition: "1s",
        "&:hover": { transform: "scale(1.1)", cursor: "pointer" },
        "&:active": { transform: "scale(0.9)" },
      }}
    >
      <Image alt="" src={zurag} width={282} height={186} />
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
        <Stack direction="row" sx={{ gap: "20px" }}>
          <Box
            sx={{
              fontSize: "30px",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              color: "green",
            }}
          >
            {une}₮
          </Box>{" "}
          <Box
            sx={{
              fontSize: "30px",
              fontFamily: "sans-serif",
              fontWeight: "400px",
              textDecorationLine: "line-through",
              color: "grey",
            }}
          >
            {undsenUne}₮
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export const Foods = () => {
  const moc = [
    {
      zurag: "/pizza.png",
      text: "Food tart",
      une: "22,800",
      undsenUne: "26,000",
    },
    {
      zurag: "/pizza.png",
      text: "Food tart",
      une: "22,800",
      undsenUne: "26,000",
    },
    {
      zurag: "/pizza.png",
      text: "Food tart",
      une: "22,800",
      undsenUne: "26,000",
    },
    {
      zurag: "/pizza.png",
      text: "Food tart",
      une: "22,800",
      undsenUne: "26,000",
    },
    {
      zurag: "/pizza.png",
      text: "Food tart",
      une: "22,800",
      undsenUne: "26,000",
    },
    {
      zurag: "/pizza.png",
      text: "Food tart",
      une: "22,800",
      undsenUne: "26,000",
    },
    {
      zurag: "/pizza.png",
      text: "Food tart",
      une: "22,800",
      undsenUne: "26,000",
    },
    {
      zurag: "/pizza.png",
      text: "Food tart",
      une: "22,800",
      undsenUne: "26,000",
    },
    {
      zurag: "/pizza.png",
      text: "Food tart",
      une: "22,800",
      undsenUne: "26,000",
    },
    {
      zurag: "/pizza.png",
      text: "Food tart",
      une: "22,800",
      undsenUne: "26,000",
    },
    {
      zurag: "/pizza.png",
      text: "Food tart",
      une: "22,800",
      undsenUne: "26,000",
    },
    {
      zurag: "/pizza.png",
      text: "Food tart",
      une: "22,800",
      undsenUne: "26,000",
    },
  ];
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
        {moc?.map((el, index) => (
          <div key={index}>
            <Options
              zurag={el.zurag}
              text={el.text}
              une={el.une}
              undsenUne={el.undsenUne}
            />
          </div>
        ))}
      </Stack>
    </Stack>
  );
};
