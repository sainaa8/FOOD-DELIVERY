import React from "react";
import { Stack, Box } from "@mui/material";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
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
        marginLeft: "-14%",
        flexBasis: 300,

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
// import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SetMealOutlinedIcon from "@mui/icons-material/SetMealOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Sale = () => {
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
  ];
  return (
    <Stack
      sx={{
        padding: "20px 30px",
        width: "100%",
        direction: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: "92%",
          marginBottom: "30px",
          paddingLeft: "20px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            width: "85%",
          }}
        >
          <Box>
            <Image alt="" src="/star.png" width={40} height={40} />
          </Box>
          <Box
            sx={{
              fontSize: "33px",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Хямдралтай
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: "23px",
            fontFamily: "sans-serif",
            color: "green",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
            "&:hover": { color: "orange", cursor: "pointer" },
            "&:active": { transform: "scale(0.9)" },
          }}
        >
          Бүгдийг харах
          <ArrowForwardIosIcon />
        </Box>
         
      </Stack>
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
