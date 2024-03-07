"use client";

import React, { ChangeEvent } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, Stack, Button, Checkbox, colors } from "@mui/material";
import { InputField } from "./Input";
import { InputPassword } from "./InputPassword";
import { useState } from "react";
import axios from "axios";

type fieldsType = {};

const fields = [
  { title: "Нэр", name: "name", placeHolder: "Нэрээ оруулна уу" },
  { title: "И-Мэйл", name: "email", placeHolder: "И-мэйл хаягаа оруулна уу" },
  { title: "Утас", name: "phone", placeHolder: "Та хаягаа оруулна уу" },
];
const fieldForPassword = [
  { title: "Нууц үг", name: "password", placeHolder: "Нууц үгээ оруулна уу" },
  {
    title: "Нууц үг давтах",
    name: "password2",
    placeHolder: "Нууц үгээ оруулна уу",
  },
];

type stateType = {
  name: string;
  email: string;
  phone: string;
  password: string;
  password2: string;
};
export const SignUp = () => {
  const [userdata, setUserdata] = useState<stateType>({
    name: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState<string>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
    console.log(userdata);
  };

  const handleClick = async (e: any) => {
    e.preventDefault();

    try {
      if (userdata.password !== userdata.password2) {
        setError("Passwords do not match");
      }
      const { data } = await axios.post(
        "http://localhost:8001/signup",
        userdata
      );
      console.log(data);
    } catch (err: any) {
      console.log(err);
      setError(err.response.data);
    }
  };

  return (
    <Grid sx={{}}>
      <Grid
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: "100vh", width: "100vw" }}
      >
        <Grid
          sx={{
            height: "722px",
            width: "448px",
            paddingBottom: "32px",
            paddingTop: "32px",
            gap: "50px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              width: "100%",
              fontSize: "28px",
              fontWeight: "700px",
              fontFamily: "sans-serif",
            }}
          >
            Бүртгүүлэх
          </Box>
          <Grid
            sx={{
              marginTop: "50px",
            }}
          >
            {fields.map((field, index) => (
              <InputField
                key={index}
                placeHolder={field.placeHolder}
                text={field.title}
                name={field.name}
                onchange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              />
            ))}
            {fieldForPassword.map((field, index) => (
              <InputPassword
                key={index}
                text={field.title}
                name={field.name}
                onchange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              />
            ))}
          </Grid>
          <Stack>
            {error && (
              <Box
                sx={{
                  position: "absolute",
                  textAlign: "center",
                  color: "red",
                  width: "100%",
                  fontFamily: "fantasy",
                }}
              >
                {error}
              </Box>
            )}
          </Stack>
          <Stack sx={{ marginTop: "80px" }}>
            <Box sx={{ fontFamily: "sans-serif" }}>
              <Checkbox />
              Үйлчилгээний нөхцөл зөвшөөрөх
            </Box>
            <Button
              onClick={handleClick}
              variant="contained"
              sx={{ height: "48px", backgroundColor: "#18BA51" }}
            >
              Бүртгүүлэх
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};
// export const LoginLayout = ({ children }: { children: React.ReactNode }) => {
//   return <div>{children}</div>;
// };
