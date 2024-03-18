"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
// import { AnimatePresence, motion } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import { Search } from "@mui/icons-material";
import { Grid, Stack } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { useContext } from "react";
import { CheckTokenContext } from "../ckeckToken/CheckToken";
import { useRouter } from "next/navigation";
import { SearchContext } from "../Provider/searchProvider";
import { useState } from "react";
import { Basket } from "../basket/basket";
import { BasketContext } from "../Provider/basketModalProvider";
export const HeaderRight = () => {
  const { userData, isLoggedIn } = useContext(CheckTokenContext);
  const { search, setSearch } = useContext(SearchContext);
  const { basketModal, setBasketModal } = useContext(BasketContext);
  const { push } = useRouter();

  const handlerPIZDAA = () => {
    if (search === "") {
      push("/");
    } else {
      push(`/search?id=${search}`);
    }
  };

  const handlerClick = () => {
    if (!isLoggedIn) {
      push("/login");
    } else {
      push("/userProfile");
    }
  };

  const handlerPushToBasket = () => {
    setBasketModal(!basketModal);
  };
  console.log(basketModal);

  return (
    <Stack>
      <Stack
        direction="row"
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
          <IconButton
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handlerPIZDAA}
          >
            <Search />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Хайх "
            onChange={(e) => setSearch(e.target.value)}
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
            cursor: "pointer",
            fontWeight: "700px",
          }}
          onClick={handlerPushToBasket}
        >
          <ShoppingBasketOutlinedIcon sx={{ fontSize: "40px" }} />
          <Box>Сагс</Box>
        </Stack>
        {isLoggedIn ? (
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              width: "38px",
              cursor: "pointer",
              marginLeft: "20px",
              display: "flex",
              fontSize: "26px",
              gap: "10px",
              fontFamily: "sans-serif",
              marginRight: "30px",
              fontWeight: "700px",
              color: "green",
            }}
          >
            <PersonOutlineIcon sx={{ fontSize: "40px" }} />
            <Grid onClick={handlerClick} sx={{ fontWeight: "700px" }}>
              Хэрэглэгч
            </Grid>
          </Stack>
        ) : (
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
              marginRight: "30px",
              fontWeight: "700px",
              cursor: "pointer",
            }}
          >
            <PersonOutlineIcon sx={{ fontSize: "40px" }} />
            <Grid onClick={handlerClick} sx={{ fontWeight: "700px" }}>
              Нэвтрэх
            </Grid>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
