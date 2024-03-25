"use client";
import React, { ChangeEvent } from "react";
import axios, { AxiosError } from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { Stack, Box, Button } from "@mui/material";
import { Email } from "./Email";
import { Code } from "./Code";
import { NewPassword } from "./NewPassword";
import { useState, useEffect } from "react";
import { PasswordInput } from "./PasswordInput";
import { useRouter } from "next/navigation";
import { strict } from "assert";

export const RecoverPass = () => {
  const [stage, setStage] = useState(0);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [disabledd, setDisabled] = useState<boolean>(true);
  const [success, setSuccess] = useState(false);

  const [password, setPassword] = useState<{
    password: string;
    repassword: string;
  }>({ password: "", repassword: "" });

  const [error, setError] = useState<any>();
  const { push } = useRouter();

  useEffect(() => {
    setError("");
    setDisabled(true);
  }, [stage]);

  const handleChange = (el: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = el.target;
    setPassword({ ...password, [name]: value });
  };

  useEffect(() => {
    if (password.password !== "" && password.repassword !== "") {
      setDisabled(false);
      console.log(disabledd);
    } else if (password.password === "" && password.repassword === "") {
      setDisabled(true);
    }
  }, [password]);

  useEffect(() => {
    if (email !== "") {
      setDisabled(false);
      console.log(disabledd);
    } else if (email === "") {
      setDisabled(true);
    }
  }, [email]);

  useEffect(() => {
    if (code !== "") {
      setDisabled(false);
      console.log(disabledd);
    } else if (code === "") {
      setDisabled(true);
    }
  }, [code]);

  const handlerClick = async (e: any) => {
    e.preventDefault();

    if (stage === 0) {
      console.log(disabledd);

      try {
        const { data } = await axios.post("https://food-delivery-isg2.onrender.com/recover", {
          email: email,
        });

        // console.log(data.temp);

        if (data.temp === "User not found" || data.temp === "") {
          setError("User not found");
        } else {
          setStage(stage + 1);
        }
        console.log(error);
      } catch (err: any) {
        console.log(err);
        setError(error.message);
      }
    }

    if (stage === 1) {
      try {
        const { data } = await axios.post("https://food-delivery-isg2.onrender.com/number", {
          email: email,
        });
        console.log(data);

        if (data.number !== code) {
          setError("code is wrong");
          throw new Error("code is wrong");
        }
        setStage(stage + 1);
      } catch (err: unknown) {
        const error = err as AxiosError;
        // setError(error);
        console.log(error);
      }
    }
    console.log(error);

    if (stage === 2) {
      try {
        if (password.password !== password.repassword) {
          setError("password is not same");
          throw new Error("password is not same");
        }
        const { data } = await axios.post("https://food-delivery-isg2.onrender.com/repassword", {
          email: email,
          password: password.password,
        });
        console.log(data);
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
          push("/login");
        }, 2000);
      } catch (err: unknown) {
        const error = err as AxiosError;
        console.log(error);
      }
    }
  };

  return (
    <Stack
      sx={{
        width: "490px",
        height: "532px",

        padding: "32px",
        gap: "50px",
      }}
    >
      <div>
        <AnimatePresence>{success && <Success />}</AnimatePresence>
      </div>

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
      {stage === 1 && <Code setCode={setCode} email={email} />}
      {stage === 2 && (
        <NewPassword
          onchange={(el: ChangeEvent<HTMLInputElement>) => handleChange(el)}
        />
      )}
      {error && (
        <Box
          sx={{
            fontFamily: "fantasy",
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "center",
            color: "red",
          }}
        >
          {error}
        </Box>
      )}

      <Button
        onClick={handlerClick}
        variant="outlined"
        sx={{
          height: "58px",
          width: "100%",
          backgroundColor: `${disabledd ? "grey" : "green"}`,
          borderColor: "grey",
          color: `${disabledd ? "black" : "white"}`,
        }}
        disabled={disabledd ? true : false}

        // disabled={false}
      >
        Үргэлжлүүлэх
      </Button>
    </Stack>
  );
};

const Success = () => {
  return (
    <motion.div
      initial={{ top: -100 }}
      animate={{ top: 100, transition: { duration: 0.3, bounce: 0.3 } }}
      exit={{ top: -100 }}
      style={{
        position: "absolute",

        right: "50px",
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
      Нууц үг амжилттай шинэчлэгдлээ
    </motion.div>
  );
};
