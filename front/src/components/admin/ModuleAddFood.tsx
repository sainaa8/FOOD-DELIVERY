"use client";
import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { ChangeEvent } from "react";

import React from "react";

type SS = {
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ModuleAddFood = (props: SS) => {
  const { handleClose } = props;
  const [newFood, setNewFood] = useState({
    name: "",
    image: "",
    ingredients: "",
    price: "",
    category: "",
  });

  const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewFood({ ...newFood, [name]: value });
  };

  const handleCloseOpenAddFood = () => {
    window.location.href = "/admin";
    handleClose(false);
  };
  const handleCraete = async () => {
    console.log(newFood, "newfood ");
    try {
      const { data } = await axios.post(
        "http://localhost:8001/createFood",
        newFood
      );
      handleCloseOpenAddFood();
      console.log(data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div
        style={{
          borderBottom: "1px solid black",
          display: "flex",
          width: "100%",
        }}
      >
        <div>
          <ClearIcon />
        </div>
        <div
          style={{
            fontWeight: "bold",
            marginLeft: "100px",
            fontSize: "25px",
            marginBottom: "20px",
          }}
        >
          Add new food
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div>
          <div>Food name</div>
          <div
            style={{
              width: "100%",
              height: "40px",
              backgroundColor: "grey",
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <input
              onChange={handlechange}
              name="name"
              placeholder="Food name"
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "grey",
                marginLeft: "30px",
              }}
            />
          </div>
        </div>
        <div>
          <div>ingredients</div>
          <div
            style={{
              width: "100%",
              height: "40px",
              backgroundColor: "grey",
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <input
              name="ingredients"
              onChange={handlechange}
              // onChange={(e: any) => setName(e.target.value)}
              placeholder="ingredients"
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "grey",
                marginLeft: "30px",
              }}
            />
          </div>
        </div>
        <div>
          <div>Price</div>
          <div
            style={{
              width: "100%",
              height: "40px",
              backgroundColor: "grey",
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <input
              name="price"
              onChange={handlechange}
              placeholder="Price"
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "grey",
                marginLeft: "30px",
              }}
            />
          </div>
        </div>
        <div>
          <div>Category</div>
          <div
            style={{
              width: "100%",
              height: "40px",
              backgroundColor: "grey",
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <input
              name="category"
              onChange={handlechange}
              placeholder="Category"
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "grey",
                marginLeft: "30px",
              }}
            />
          </div>
        </div>
        <div>
          <div>Food Image</div>
          <div
            style={{
              width: "100%",
              height: "40px",
              backgroundColor: "grey",
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <input
              type="file"
              name="image"
              onChange={handlechange}
              placeholder="Food image"
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "grey",
                marginLeft: "30px",
              }}
            />
          </div>
        </div>
      </div>

      <Button
        onClick={handleCraete}
        sx={{
          backgroundColor: "blue",
          color: "white",
          width: "200px",
          marginLeft: "200px",
          marginTop: "20px",
        }}
      >
        Continue
      </Button>
    </div>
  );
};
