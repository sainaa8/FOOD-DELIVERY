"use client";

import Image from "next/image";

import { Button, Typography } from "@mui/material";

import { Grid, Box, Stack } from "@mui/material";
import { Options } from "@/components/home/Options";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SetMealOutlinedIcon from "@mui/icons-material/SetMealOutlined";

export default function Home() {
  const moc = [
    {
      icon: <AutoStoriesOutlinedIcon />,
      text1: "Хүргэлтийн төлөв хянах",
      text2: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <AutoStoriesOutlinedIcon />,
      text1: "Шуурхай хүргэлт",
      text2: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <AutoStoriesOutlinedIcon />,
      text1: "Эрүүл, баталгаат орц",
      text2: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <AutoStoriesOutlinedIcon />,
      text1: "Хоолны өргөн сонголтх",
      text2: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];

  return (
    <Stack sx={{ display: "flex", justifyContent: "center" }}>
      <Stack>
        <Stack sx={{ width: "100vw", height: "790px", position: "relative" }}>
          <Image src="/desc.png" alt="" layout="fill" />
        </Stack>

        <Stack
          direction="row"
          sx={{
            padding: "120px 0",
            alignItems: "center",
            direction: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {moc?.map((el, index) => (
            <div key={index}>
              <Options icon={el.icon} text1={el.text1} text2={el.text2} />
            </div>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
