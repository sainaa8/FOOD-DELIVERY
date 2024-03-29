import * as React from "react";

import { Stack } from "@mui/material";

import { PasswordInput } from "./PasswordInput";

type CodeType = {
  email: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
};
export const Code = (props: CodeType) => {
  const { setCode, email } = props;

  return (
    <Stack>
      <Stack
        sx={{
          marginBottom: "",
          fontSize: "23px",
          fontFamily: "sans-serif",
        }}
      >
        Таны {email && <span style={{ color: "green" }}>{email}</span>} хаяг
        руу сэргээх код илгээх болно.
      </Stack>

      <PasswordInput
        text=" Нууц үг сэргээх код"
        name="number"
        setCode={setCode}
      />
    </Stack>
  );
};
