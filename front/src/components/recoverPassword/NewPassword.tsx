import React from "react";
import { RePass } from "./RePass";
import { Stack } from "@mui/material";

type PassType = {
  onchange: (even: React.ChangeEvent<HTMLInputElement>) => void;
};
export const NewPassword = (props: PassType) => {
  const { onchange } = props;

  return (
    <Stack>
      <RePass text="Нууц үг " name="password" onchange={onchange} />
      <RePass text="Нууц үг давтах " name="repassword" onchange={onchange} />
    </Stack>
  );
};
