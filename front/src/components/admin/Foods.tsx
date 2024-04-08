"use client";
import { Stack } from "@mui/material";
import { Options } from "../menu/Modal";
import { Modul } from "./Module";
import { ModuleAddFood } from "./ModuleAddFood";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";

import React from "react";
type DataType = {
  name: string;
  foodId: FoodType[];
  id: string;
};
type SS = {
  data: DataType;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const AdminFoods = (props: SS) => {
  const { data } = props;

  const [openAddFood, setOpenAddFood] = React.useState(false);
  const handleOpenAddFood = () => setOpenAddFood(true);
  const handleCloseOpenAddFood = () => {
    window.location.href = "/admin";
    setOpenAddFood(false);
  };

  return (
    <Stack>
      <div
        style={{
          width: "100%",
          display: "flex",
          marginTop: "50px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          BreakFast
        </div>
        <div
          onClick={handleOpenAddFood}
          style={{
            marginRight: "110px",
            marginLeft: "30px",
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            backgroundColor: "green",
            padding: "10px 30px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Add new food
        </div>
      </div>
      <Stack
        direction="row"
        sx={{
          gap: "30px",
          alignItems: "center",
          direction: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginBottom: "200px",
          width: "91%",
        }}
      >
        {data.foodId.map((el: any, index: number) => (
          <div key={index}>
            <Options zurag={el.image} text={el.name} une={el.price} />
          </div>
        ))}
      </Stack>
      <Modal
        open={openAddFood}
        onClose={() => setOpenAddFood(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModuleAddFood handleClose={setOpenAddFood} />
        </Box>
      </Modal>
    </Stack>
  );
};
