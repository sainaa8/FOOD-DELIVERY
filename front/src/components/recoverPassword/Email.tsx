import React, { Dispatch, SetStateAction } from "react";
import { InputBase, Paper, Stack, Box } from "@mui/material";

type EmailProps = {
  setEmail: Dispatch<SetStateAction<string>>;
};
export const Email = (props: EmailProps) => {
  const { setEmail } = props;
  return (
    <Stack>
      <Box sx={{ fontFamily: "sans-serif", marginBottom: "10px" }}>И-мэйл</Box>
      <Paper
        variant="outlined"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          height: "58px",
          width: "98%",
          backgroundColor: "#F7F7F8",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="И-мэйл хаягаа оруулна rrrуу"
        />
      </Paper>
    </Stack>
  );
};
