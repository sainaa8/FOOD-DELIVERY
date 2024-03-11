"use client";
import React, { ChangeEvent } from "react";
import { Stack, Box, Paper, InputBase, Button } from "@mui/material";
import { InputPassword } from "../createAccount/InputPassword";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { LoginModal } from "./LoginModal";
export const Login = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh", width: "100vw" }}
    >
      <LoginModal />
    </Stack>
  );
};
