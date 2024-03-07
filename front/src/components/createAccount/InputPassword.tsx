"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";

import { Label, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import { TextField, Stack } from "@mui/material";

import { Button, Grid } from "@mui/material";

type InputPasswordProps = {
  text: string;
  name: string;
  onchange: (even: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputPassword = (props: InputPasswordProps) => {
  const { text, name, onchange } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
          placeholder="Нууц үгээ оруулна уу"
          type={showPassword ? "text" : "password"}
          name={name}
          onChange={onchange}
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
