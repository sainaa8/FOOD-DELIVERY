import React from "react";
import Image from "next/image";
import { Stack } from "@mui/material";
import { useContext } from "react";
import { CheckTokenContext } from "../ckeckToken/CheckToken";

type TypeOfUserdata = {
  userData: FoodType;
};
export const Photo = (props: TypeOfUserdata) => {
  const { userData } = props;
  // const { userData, isLoggedIn } = useContext(CheckTokenContext);

  return (
    <Stack sx={{ alignItems: "center", gap: "30px" }}>
      <Image alt="" src="/Photo.png" width={100} height={100} />
      <Stack sx={{ fontFamily: "sans-serif", fontSize: "30px" }}>
        {userData?.name}
      </Stack>
    </Stack>
  );
};
