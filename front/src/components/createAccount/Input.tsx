import React from "react";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Grid } from "@mui/material";
import Box from "@mui/material";

type inputFieldType = {
  placeHolder: string;
  text: string;
  name: string;
  onchange: any;
};

export const InputField = (props: inputFieldType) => {
  const { placeHolder, text, name, onchange } = props;
  return (
    <Grid
      container
      sx={{
        gap: "10px",
        display: "flex",
        direction: "column",
        fontFamily: "sans-serif",
        marginTop: "10px",
      }}
    >
      <Grid>{text}</Grid>
      <Paper
        variant="outlined"
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "48px",
          backgroundColor: "#F5F5F5",
          borderRadius: "4px",
        }}
      >
        <InputBase
          required
          sx={{ ml: 1, flex: 1 }}
          placeholder={placeHolder}
          name={name}
          inputProps={{ "aria-label": "" }}
          // onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e)}
          onChange={onchange}
        />
      </Paper>
    </Grid>
  );
};
