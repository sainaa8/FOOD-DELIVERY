import React from "react";
import { PasswordInput } from "./PasswordInput";
import { Stack } from "@mui/material";
export const NewPassword = () => {
  return (
    <Stack>
      <PasswordInput text="Нууц үг " name="password" />
      <PasswordInput text="Нууц үг давтах " name="repassword" />
    </Stack>
  );
};
