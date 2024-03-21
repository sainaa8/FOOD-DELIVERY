"use client";
import React from "react";
import { Stack, Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { OrderMap } from "./OrderMap";
import { useState, useContext } from "react";
import { BasketContext } from "../Provider/basketModalProvider";
import { CheckTokenContext } from "../ckeckToken/CheckToken";
type ModalType = {
  basketModal: boolean;
  setBasketModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Basket = (props: ModalType) => {
  const { basketModal, setBasketModal } = props;

  return (
    <Stack>
      <AnimatePresence>
        {basketModal && (
          <div>
            <BasketModal />
          </div>
        )}
      </AnimatePresence>
    </Stack>
  );
};
const BasketModal = () => {
  const { userData, isLoggedIn, isAdmin } = useContext(CheckTokenContext);
  const { basketModal, setBasketModal } = useContext(BasketContext);
  const [inTotal, setInTotal] = useState(0);
  // console.log(userData, isLoggedIn, );

  const itemsInBasket = JSON.parse(localStorage.getItem("items") || "[]");

  console.log(itemsInBasket, "itemsInBasket");

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0, transition: { duration: 1 } }}
      exit={{ x: "100%" }}
      style={{
        position: "fixed",
        backgroundColor: "white",
        width: "586px",
        height: "100vh",
        zIndex: "2",
        top: "0px",
        right: "0px",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Stack
        direction="row"
        sx={{
          margin: "30px",
          padding: "30px 0px",
          borderBottom: "1px solid black",
        }}
      >
        <div
          onClick={() => setBasketModal(false)}
          style={{ cursor: "pointer" }}
        >
          <ArrowBackIosIcon />
        </div>

        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
            marginLeft: "150px",
            fontFamily: "sans-serif",
          }}
        >
          Таны сагс
        </div>
      </Stack>

      <Stack sx={{ height: "100%", overflowY: "scroll", margin: "10px 30px" }}>
        <OrderMap setInTotal={setInTotal} />
      </Stack>

      <Stack
        direction="row"
        sx={{
          marginBottom: "4px",
          width: "100%",
          padding: "40px 0px",
          justifyContent: "space-around",
          alignItems: "center",
          display: "flex",
          boxShadow:
            "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
        }}
      >
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "20px",
          }}
        >
          <div>Нийт төлөх дүн</div>
          <div style={{ fontWeight: "bold" }}>
            {Number(inTotal).toLocaleString()}₮
          </div>
        </div>
        <Button
          sx={{
            backgroundColor: "green",
            color: "white",
            padding: "10px 40px",
          }}
        >
          Захиалга хийх
        </Button>
      </Stack>
    </motion.div>
  );
};
