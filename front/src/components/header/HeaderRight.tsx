import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import { Login } from "../loginUser.tsx/Login";

import IconButton from "@mui/material/IconButton";
import { Search } from "@mui/icons-material";
import { Grid, Stack } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";

import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { LoginModal } from "../loginUser.tsx/LoginModal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "448px",
  height: "557px",

  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

export const HeaderRight = () => {
  // const [loginMoadal, setLoginmodal] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid
      sx={{
        width: "fit-content",
        display: "flex",
        gap: "100px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        variant="outlined"
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 300,
          borderRadius: "8px",
          borderColor: "black",
          marginTop: "20px",
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="search">
          <Search />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Хайх "
          inputProps={{ "aria-label": "search google maps" }}
        />
      </Paper>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          width: "38px",

          display: "flex",
          fontSize: "26px",
          gap: "10px",
          fontFamily: "sans-serif",

          fontWeight: "700px",
        }}
      >
        <ShoppingBasketOutlinedIcon sx={{ fontSize: "40px" }} />
        <Box>Сагс</Box>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          width: "38px",

          marginLeft: "20px",
          display: "flex",
          fontSize: "26px",
          gap: "10px",
          fontFamily: "sans-serif",

          fontWeight: "700px",
        }}
      >
        <PersonOutlineIcon sx={{ fontSize: "40px" }} />
        <Grid onClick={handleOpen} sx={{ fontWeight: "700px" }}>
          Нэвтрэх
        </Grid>
      </Stack>
      <Modal
        // aria-labelledby="transition-modal-title"
        // aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <LoginModal setOpen={setOpen} />
          </Box>
        </Fade>
      </Modal>
    </Grid>
  );
};
