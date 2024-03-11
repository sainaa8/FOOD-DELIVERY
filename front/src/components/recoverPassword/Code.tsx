import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Stack } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { PasswordInput } from "./PasswordInput";

type CodeType = {
  setCode: React.Dispatch<React.SetStateAction<number>>;
};
export const Code = (props: CodeType) => {
  const { setCode } = props;
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Stack>
      <Stack
        sx={{
          marginBottom: "30px",
          fontSize: "23px",
          fontFamily: "sans-serif",
        }}
      >
        Таны example@pinecone.mn хаяг руу сэргээх код илгээх болно.
      </Stack>

      <PasswordInput
        text=" Нууц үг сэргээх код"
        name="number"
        setCode={setCode}
      />
    </Stack>
  );
};
