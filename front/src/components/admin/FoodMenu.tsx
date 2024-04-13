"use client";
import { Stack } from "@mui/material";
import { CategoriesType } from "@/app/admin/page";
import { MouseEvent, useState, useEffect } from "react";
import axios from "axios";
import { AdminFoods } from "./Foods";
import { Modul } from "./Module";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Module } from "module";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

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

type DataType = {
  name: string;
  foodId: FoodType[];
  id: string;
};

type Ss = {
  category: CategoriesType[];
};
export const FoodMenu = (props: Ss) => {
  const { category } = props;

  const [data, setData] = useState<DataType>({
    name: "",
    foodId: [],
    id: "",
  });

  const [catId, setCatId] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    window.location.href = "/admin";
    setOpen(false);
  };

  useEffect(() => {
    const defaultdata = async () => {
      try {
        const { data } = await axios.post<DataType>(
          "https://food-delivery-isg2.onrender.com/getCategory",
          {
            id: category[0].id,
          }
        );

        setData(data);
        setCatId(category[0].id);
      } catch (err) {
        console.log(err);
      }
    };
    defaultdata();
  }, []);

  const handleClick = async (event: MouseEvent<HTMLDivElement>) => {
    const CatId = event.currentTarget.id;

    try {
      const { data } = await axios.post<DataType>(
        "https://food-delivery-isg2.onrender.com/getCategory",
        {
          id: CatId,
        }
      );
      setData(data);
      setCatId(CatId);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const handleFelete = async (event: MouseEvent<HTMLDivElement>) => {
    try {
      const categoryId = event.currentTarget.id;
      const { data } = await axios.post(
        "https://food-delivery-isg2.onrender.com/deleteCategory",
        {
          id: categoryId,
        }
      );
      window.location.href = "/admin";
      console.log(data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <Stack direction="row" sx={{ width: "100%", fontFamily: "sans-serif" }}>
      <Stack sx={{ width: "300px" }}>
        <div
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            marginBottom: "40px",
            marginTop: "40px",
          }}
        >
          Food menu
        </div>
        <Stack sx={{ gap: "10px", fontSize: "18px" }}>
          {category?.map((el: any, index: number) => (
            <div
              key={index}
              onClick={handleClick}
              id={el.id}
              style={{
                borderRadius: "8px",
                width: "300px",
                padding: "10px 20px",
                border: "1px solid black",
                backgroundColor: `${el.id == catId ? "green" : "white"}`,
                color: `${el.id == catId ? "white" : "black"}`,
                cursor: "pointer",
                paddingLeft: "30px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>{el.name}</div>
              <div id={el.id} onClick={handleFelete}>
                <DeleteForeverIcon />
              </div>
            </div>
          ))}
          <div
            onClick={handleOpen}
            style={{
              fontSize: "18px",
              cursor: "pointer",
              marginTop: "40px",
              borderRadius: "8px",
              width: "300px",
              padding: "10px 0px",
              border: "1px solid black",
              paddingLeft: "30px",
            }}
          >
            + Craete New Category
          </div>
        </Stack>
      </Stack>
      <div style={{ marginLeft: "40px", width: "100%" }}>
        <AdminFoods data={data} />
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Modul handleClose={handleClose as () => void} />
        </Box>
      </Modal>
    </Stack>
  );
};
