"use client";
import { Stack, Box, Paper, InputBase, Button } from "@mui/material";
import { InputField } from "../createAccount/Input";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { InputPassword } from "../createAccount/InputPassword";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";

// type LoginModalProps = {
//   setOpen: Dispatch<SetStateAction<boolean>>;
// };

export const LoginModal = () => {
  // const { setOpen } = props;
  const [userdata, setUserdata] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState<any>();
  const { push } = useRouter();

  const handleChange = (el: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = el.target;
    setUserdata({ ...userdata, [name]: value });
    console.log(userdata);
  };

  useEffect(() => {
    if (userdata.email !== "" && userdata.password !== "") {
      setDisable(false);
      console.log(disable);
    } else if (userdata.email === "" && userdata.password === "") {
      setDisable(true);
    }
  }, [userdata]);

  const handleClick = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8001/login",
        userdata
      );

      localStorage.setItem("Token", data.result);
      ///loading
      window.location.href = "/";
      // push("/");

      // setOpen(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setError(error.response?.data);
    }
  };

  const handlePushToRecoverpage = () => {
    push("/recover");
  };

  return (
    <div>
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
          <Box
            sx={{
              width: "100%",
              textAlign: "right",
              textDecoration: "underline",
              color: "blue",
              cursor: "pointer",
            }}
            onClick={handlePushToRecoverpage}
          >
            Нууц үг сэргээх ?
          </Box>
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
              backgroundColor: `${disable ? "grey" : "green"}`,
              color: "black",
            }}
            disabled={disable ? true : false}
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
    </div>
  );
};
