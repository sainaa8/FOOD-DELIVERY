"use client";
import { Stack, Button } from "@mui/material";
import React, { ChangeEvent } from "react";

import { Photo } from "./Photo";
import CustomizedInputBase from "./Input";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { useContext, useState, useEffect } from "react";
import { CheckTokenContext } from "../ckeckToken/CheckToken";

export const UserProfile = () => {
  const { userData, isLoggedIn } = useContext(CheckTokenContext);

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
                  // width: "30px",
                  // height: "30px",
                  padding: "7px 9px",
                  border: "1px solid black",
                  borderRadius: "50%",
                }}
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
        )}
      </Stack>
    </Stack>
  );
};
