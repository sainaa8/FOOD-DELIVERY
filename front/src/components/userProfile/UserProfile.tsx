"use client";
import { Stack, Button } from "@mui/material";
import React, { ChangeEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Photo } from "./Photo";
import CustomizedInputBase from "./Input";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { useContext, useState, useEffect } from "react";
import { CheckTokenContext } from "../ckeckToken/CheckToken";
import axios from "axios";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
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
  const { userData, isLoggedIn, isAdmin } = useContext(CheckTokenContext);
  const [error, setError] = useState("");
  const [edit, setEdit] = useState(false);
  const [success, setSuccess] = useState(false);
  const [datas, setData] = useState({
    _id: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    isAdmin: "",
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [userUpdate, setUserUpdate] = useState<UserUpType>({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  type UserUpType = {
    id: string;
    name: string;
    email: string;
    phone: string;
  };

  console.log(isAdmin, "propage");

  ///////gertee hiinee
  useEffect(() => {
    setUserUpdate({
      ...userUpdate,
      id: userData._id,
      email: userData.email,
      name: userData.name,
      phone: userData.phone,
    });
  }, [] || [edit]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserUpdate({ ...userUpdate, [name]: value });
  };
  const handleClick = async () => {
    setError(" ");
    if (!userUpdate.email || !userUpdate.name || !userUpdate.phone) {
      setError("pls fill all fields");
      return;
    }

    try {
      const { data } = await axios.post(
        "https://food-delivery-isg2.onrender.com/userup",
        userUpdate
      );
      setData(data);
      setEdit(false);
      setSuccess(true);
      // console.log(userUpdate);
      // location.reload(s);
    } catch (err) {
      console.log(err);
      setError("Updating failed");
    }
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };
  console.log(datas);

  const exit = () => {
    localStorage.removeItem("Token");
    window.location.href = "/";
  };

  const toAdminPage = () => {
    window.location.href = "/admin";
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
      <AnimatePresence>{success && <Success />}</AnimatePresence>

      <Stack sx={{ alignItems: "center", gap: "30px" }}>
        <Image alt="" src="/Photo.png" width={100} height={100} />
        <Stack sx={{ fontFamily: "sans-serif", fontSize: "30px" }}>
          {userUpdate.name}
        </Stack>
      </Stack>

      <Stack sx={{ gap: "20px" }}>
        <CustomizedInputBase
          name="name"
          title="Таны нэр"
          value={userUpdate.name}
          setEdit={setEdit}
          edit={edit}
          onchange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <CustomizedInputBase
          name="phone"
          title="Утасны дугаар"
          value={userUpdate.phone}
          setEdit={setEdit}
          edit={edit}
          onchange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <CustomizedInputBase
          name="email"
          title="Имэйл хаяг"
          value={userUpdate.email}
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
                borderRadius: "50%",
              }}
            >
              <div
                style={{
                  padding: "7px 9px",
                  border: "1px solid black",
                  borderRadius: "50%",
                  cursor: "pointer",
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
                  cursor: "pointer",
                }}
                onClick={handleOpen}
              >
                <ExitToAppOutlinedIcon />
              </div>
              Гарах
            </div>
            {isAdmin && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginLeft: "20px",
                  borderRadius: "50%",
                }}
              >
                <div
                  onClick={toAdminPage}
                  style={{
                    padding: "7px 9px",
                    border: "1px solid black",
                    borderRadius: "50%",
                    cursor: "pointer",
                    backgroundColor: "green",
                    color: "white",
                  }}
                >
                  <AdminPanelSettingsIcon />
                </div>
                Админ
              </div>
            )}
          </div>
        ) : (
          <>
            <Button
              onClick={handleClick}
              variant="contained"
              sx={{
                backgroundColor: "green",
                color: "white",
                cursor: "pointer",
              }}
            >
              Хадгалах
            </Button>
            {error && (
              <div
                style={{
                  color: "red",
                  textAlign: "center",
                  fontFamily: "sans-serif",
                }}
              >
                {error}
              </div>
            )}
          </>
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
                WebkitBorderBottomLeftRadius: "20px",
                cursor: "pointer",
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
                cursor: "pointer",
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

const Success = () => {
  return (
    <motion.div
      initial={{ top: -100 }}
      animate={{ top: 270, transition: { duration: 0.3, bounce: 0.3 } }}
      exit={{ top: -100 }}
      style={{
        position: "absolute",
        borderRadius: "24px",
        padding: "10px 30px",
        display: "flex",
        gap: "5px",
        alignItems: "center",
        boxShadow: "1px 1px 10px 1px green",
        backgroundColor: "white",
        color: "green",
      }}
    >
      <div style={{ marginRight: "5px" }}>✔</div>
      Мэдээлэл амжилттай хадгалагдлаа
    </motion.div>
  );
};
