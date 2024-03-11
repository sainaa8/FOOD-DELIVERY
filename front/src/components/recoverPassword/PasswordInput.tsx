import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Stack } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type InputPasswordProps = {
  text: string;
  name: string;
  setCode: React.Dispatch<React.SetStateAction<number>>;
};
export const PasswordInput = (props: InputPasswordProps) => {
  const { text, name, setCode } = props;
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Stack sx={{ mt: "20px" }}>
      <Box sx={{ fontFamily: "sans-serif", mb: "10px" }}>{text}</Box>
      <FormControl sx={{ mb: 1 }} fullWidth variant="outlined">
        {/* <InputLabel htmlFor="outlined-adornment-password">{text}</InputLabel> */}
        <OutlinedInput
          sx={{
            backgroundColor: "#F5F5F5",
            borderRadius: "4px",
            borderColor: "grey",
          }}
          id="outlined-adornment-password"
          placeholder="*********"
          type={showPassword ? "number" : "password"}
          name={name}
          onChange={(e: any) => setCode(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Stack>
  );
};
