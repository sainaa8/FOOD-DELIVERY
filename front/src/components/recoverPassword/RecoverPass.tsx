"use client";
import React from "react";
import axios, { AxiosError } from "axios";
import { Stack, Box, Button } from "@mui/material";
import { Email } from "./Email";
import { Code } from "./Code";
import { NewPassword } from "./NewPassword";
import { useState } from "react";
import { PasswordInput } from "./PasswordInput";
export const RecoverPass = () => {
  const [stage, setStage] = useState(0);
  const [email, setEmail] = useState({});
  const [code, setCode] = useState(0);
// console.log(code,"codee");

  const handlerClick = async (e: any) => {
    e.preventDefault();

    if (stage === 0) {
      setStage(stage + 1);
      try {
        const { data } = await axios.post("http://localhost:8001/recover", {
          email: email,
        });
        console.log(data);
      } catch (err: unknown) {
        const error = err as AxiosError;
        console.log(error);
      }
    }
    if (stage === 1) {
      try {
        const { data } = await axios.post("http://localhost:8001/number", {
          email: email,
        });
        console.log(data.number);
        if (data.number !== code) {
          throw new Error("code is wrong");
        }
        setStage(stage + 1);
      } catch (err: unknown) {
        const error = err as AxiosError;
        console.log(error);
      }
    }
  };

  return (
    <Stack
      sx={{
        width: "590px",
        height: "432px",

        padding: "32px",
        gap: "50px",
      }}
    >
      <Box
        sx={{
          fontFamily: "sans-serif",
          fontSize: "30px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Нууц үг сэргээх
      </Box>
      {stage === 0 && <Email setEmail={setEmail} />}
      {stage === 1 && <Code setCode={setCode} />}
      {stage === 2 && <NewPassword />}

      <Button
        onClick={handlerClick}
        variant="outlined"
        sx={{
          height: "58px",
          width: "100%",
          backgroundColor: "#F7F7F8",
          borderColor: "grey",
          color: "black",
        }}
      >
        Үргэлжлүүлэх
      </Button>
    </Stack>
  );
};
