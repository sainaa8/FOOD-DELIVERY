"use client";
import { Stack, Button } from "@mui/material";
import React, { ChangeEvent } from "react";

import { Photo } from "./Photo";
import CustomizedInputBase from "./Input";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { useContext, useState, useEffect } from "react";
import { CheckTokenContext } from "../ckeckToken/CheckToken";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "20px",
};

export const UserProfile = () => {
  const { userData, isLoggedIn } = useContext(CheckTokenContext);
  console.log(userData);

  const [edit, setEdit] = useState(false);

  type UserUpType = {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
  const [userUpdate, setUserUpdate] = useState<UserUpType>({
    id: "",
    name: "",
    email: "",
    phone: "",
  });
  ///////gertee hiinee
  // useEffect(() => {
  //   setUserUpdate({
  //     ...userData,
  //     id: userData._id,
  //     email: userData.email,
  //     name: userData.name,
  //     phone: userData.phone,
  //   });
  // }, [edit]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setUserUpdate({ ...userUpdate, id: userData._id });
    const { name, value } = e.target;
    setUserUpdate({ ...userUpdate, [name]: value });
    console.log(userUpdate);
  };
  const handleClick = () => {
    // setUserUpdate({ ...userUpdate, id: userData._id });
    console.log(userUpdate);
  };
  // console.log(userData.name);
  // console.log(isLoggedIn);

  // const;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const exit = () => {
    localStorage.removeItem("Token");
    window.location.href = "/";
  };

  return (
    <Stack
      sx={{
        width: "448px",
        height: "497px",

        fontFamily: "sans-serif",

        alignItems: "center",
        gap: "30px",
      }}
    >
      <Photo />

      <Stack sx={{ gap: "20px" }}>
        <CustomizedInputBase
          name="name"
          title="Таны нэр"
          value={userData.name}
          setEdit={setEdit}
          edit={edit}
          onchange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <CustomizedInputBase
          name="phone"
          title="Утасны дугаар"
          value={userData.phone}
          setEdit={setEdit}
          edit={edit}
          onchange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <CustomizedInputBase
          name="email"
          title="Имэйл хаяг"
          value={userData.email}
          setEdit={setEdit}
          edit={edit}
          onchange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        {!edit ? (
          <div
            style={{ gap: "12px", display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginLeft: "20px",
              }}
            >
              <div
                style={{
                  padding: "7px 9px",
                  border: "1px solid black",
                  borderRadius: "50%",
                }}
              >
                <RestoreOutlinedIcon />
              </div>
              Захиалгын түүх
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginLeft: "20px",
              }}
            >
              <div
                style={{
                  padding: "7px 9px",
                  border: "1px solid black",
                  borderRadius: "50%",
                }}
                onClick={handleOpen}
              >
                <ExitToAppOutlinedIcon />
              </div>
              Гарах
            </div>
          </div>
        ) : (
          <Button
            onClick={handleClick}
            variant="contained"
            sx={{ backgroundColor: "green", color: "white" }}
          >
            Хадгалах
          </Button>
        )}{" "}
      </Stack>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Stack
            sx={{
              width: "382px",
              height: "153px",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
              fontFamily: "sans-serif",
              fontWeight: "600px",
              textAlign: "center",
            }}
          >
            Та системээс гарахдаа итгэлтэй байна уу?
          </Stack>
          <Stack direction="row" sx={{ width: "100%" }}>
            <div
              onClick={exit}
              style={{
                width: "50%",
                backgroundColor: "#d1f1dc",
                padding: "25px 0px",
                display: "flex",
                justifyContent: "center",
                fontSize: "20px",
                fontFamily: "sans-serif",
                fontWeight: "600px",
                color: "black",
              }}
            >
              Тийм
            </div>
            <div
              onClick={handleClose}
              style={{
                width: "50%",
                backgroundColor: "#18ba51",
                padding: "25px 0px",
                display: "flex",
                justifyContent: "center",
                borderBottomRightRadius: "20px",
                fontSize: "20px",
                fontFamily: "sans-serif",
                fontWeight: "600px",
                color: "white",
              }}
            >
              Үгүй
            </div>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
};
