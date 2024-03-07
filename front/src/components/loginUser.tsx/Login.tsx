"use client";
import React, { ChangeEvent } from "react";
import { Stack, Box, Paper, InputBase, Button } from "@mui/material";
import { InputField } from "../createAccount/Input";
import { InputPassword } from "../createAccount/InputPassword";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export const Login = () => {
  const [userdata, setUserdata] = useState({});
  const [error, setError] = useState("");
  const { push } = useRouter();

  const handleChange = (el: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = el.target;
    setUserdata({ ...userdata, [name]: value });
    console.log(userdata);
  };
  const handleClick = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8001/login",
        userdata
      );
      console.log(data);
      push("/");
    } catch (err: any) {
      console.log(err.response.data);
      setError(err.response.data);
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh", width: "100vw" }}
    >
      <Stack
        sx={{
          width: "448px",
          height: "497px",
          gap: "48px",

          fontFamily: "sans-serif",
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Нэвтрэх
        </Box>
        <Stack sx={{ gap: "10px", position: "relative" }}>
          <InputField
            placeHolder="Имэйл хаягаа оруулна уу"
            text="Имэйл"
            name="email"
            onchange={(el: ChangeEvent<HTMLInputElement>) => handleChange(el)}
          />
          <InputPassword
            text="Нууц үг"
            name="password"
            onchange={(e) => handleChange(e)}
          />
          <Box sx={{ width: "100%", textAlign: "right" }}>Нууц үг сэргээх</Box>
          {error && (
            <Box
              sx={{
                color: "red",
                fontFamily: "fantasy",
                width: "100%",
                textAlign: "center",
                position: "absolute",
                bottom: "-34px",
              }}
            >
              {error}
            </Box>
          )}
        </Stack>
        <Stack alignItems={"center"} sx={{ gap: "32px" }}>
          <Button
            onClick={handleClick}
            variant="outlined"
            sx={{
              height: "48px",
              width: "100%",
              backgroundColor: "#18BA51",
              color: "black",
            }}
          >
            Нэвтрэх
          </Button>
          <Box>Эсвэл</Box>
          <Button
            onClick={() => push("/signUp")}
            variant="outlined"
            sx={{
              height: "48px",
              width: "100%",
              backgroundColor: "white",
              border: "2px solid",
              borderColor: "green",
              color: "black",
            }}
          >
            Бүртгүүлэх
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
