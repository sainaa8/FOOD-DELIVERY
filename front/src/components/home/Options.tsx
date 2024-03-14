import React from "react";
import { Stack, Box } from "@mui/material";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";

type PropsType = {
  icon: any;
  text1: string;
  text2: string;
};
export const Opt = (props: PropsType) => {
  const { icon, text1, text2 } = props;

  return (
    <Stack
      sx={{
        width: "370px",
        height: "195px",
        border: "1px solid grey",
        flexBasis: 300,
        borderRadius: "16px",
        boxShadow: "5px 5px 20px grey",
        padding: "20px 20px",
        justifyContent: "space-around",
        transition: "1s",
        "&:hover": { transform: "scale(1.1)", cursor: "pointer" },
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
// import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SetMealOutlinedIcon from "@mui/icons-material/SetMealOutlined";

export const Option = () => {
  const moc = [
    {
      icon: <AutoStoriesOutlinedIcon fontSize="40px" />,
      text1: "Хүргэлтийн төлөв хянах",
      text2: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <AccessTimeOutlinedIcon fontSize="40px" />,
      text1: "Шуурхай хүргэлт",
      text2: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <SetMealOutlinedIcon fontSize="40px" />,
      text1: "Эрүүл, баталгаат орц",
      text2: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <AutoStoriesOutlinedIcon fontSize="40px" />,
      text1: "Хоолны өргөн сонголтх",
      text2: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        gap: "30px",
        direction: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {moc?.map((el, index) => (
        <div key={index}>
          <Opt icon={el.icon} text1={el.text1} text2={el.text2} />
        </div>
      ))}
    </Stack>
  );
};
