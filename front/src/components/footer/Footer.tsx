"use client";
import React from "react";
import Image from "next/image";
import { Stack, Box } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useRouter } from "next/navigation";
import { Basket } from "@/components/basket/basket";
import { useContext } from "react";
import { BasketContext } from "@/components/Provider/basketModalProvider";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { basketModal, setBasketModal } = useContext(BasketContext);
  const { push } = useRouter();

  return (
    <Stack
      sx={{
        width: "100%",
        height: "545px",
        position: "relative",
        backgroundImage: "url(/foo.png)",
      }}
    >
      {basketModal && (
        <div
          onClick={() => setBasketModal(false)}
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            top: "0px",
            left: "0px",
            backgroundColor: "black",
            opacity: "0.5",
            zIndex: "1",
          }}
        ></div>
      )}
      <div>
        <Basket basketModal={basketModal} setBasketModal={setBasketModal} />
      </div>
      <Stack
        sx={{
          position: "absolute",
          height: "322px",
          width: "80%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          justifyContent: "space-between",
        }}
      >
        <Stack
          sx={{
            paddingBottom: "50px",
            borderBottom: " 1px solid white",
            width: "100%",
            display: "flex",

            alignItems: "center",
            gap: "40px",
          }}
        >
          <Box
            sx={{
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "center",
              fontFamily: "sans-serif",
              gap: "10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image src="/log.png" alt="logo" width={32} height={26} />
            <Box>Food Delivery</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              color: "white",
              fontSize: "16px",
              fontFamily: "sans-serif",
            }}
          >
            <Box onClick={() => push("/")} sx={{ cursor: "pointer" }}>
              <div style={{ textDecoration: "underline" }}>Нүүр</div>
            </Box>

            <a
              href="https://www.youtube.com/watch?v=sBj9GDg-FtY"
              target="_blank"
              style={{ cursor: "pointer" }}
            >
              <div style={{ textDecoration: "underline" }}> Холбоо барих</div>
            </a>

            <Box onClick={() => push("/menu")} sx={{ cursor: "pointer" }}>
              <div style={{ textDecoration: "underline" }}>Хоолны цэс</div>
            </Box>

            <Box
              onClick={() => push("/uilchilgeeniiNohtsol")}
              sx={{ cursor: "pointer" }}
            >
              <div style={{ textDecoration: "underline" }}>
                Үйлчилгээний нөхцөл
              </div>
            </Box>

            <Box
              onClick={() => push("hurgeltiinBus")}
              sx={{ cursor: "pointer" }}
            >
              <div style={{ textDecoration: "underline" }}>Хүргэлтийн бүс</div>
            </Box>

            <Box
              onClick={() => push("/nuutslaliinBodlog")}
              sx={{ cursor: "pointer" }}
            >
              <div style={{ textDecoration: "underline" }}>
                Нууцлалын бодлого
              </div>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "16px",
              flexDirection: "row",
            }}
          >
            <div onClick={() => push("https://www.facebook.com/login/")}>
              <FacebookOutlinedIcon
                sx={{ color: "white", fontSize: "40px", cursor: "pointer" }}
              />
            </div>
            <div
              onClick={() => push("https://www.instagram.com/accounts/login/")}
            >
              <InstagramIcon
                sx={{ color: "white", fontSize: "40px", cursor: "pointer" }}
              />
            </div>
            <div onClick={() => push("https://twitter.com/i/flow/login")}>
              <TwitterIcon
                sx={{ color: "white", fontSize: "40px", cursor: "pointer" }}
              />
            </div>
          </Box>
        </Stack>
        <Stack
          sx={{ color: "white", fontFamily: "sans-serif", textAlign: "center" }}
        >
          <Box>© 2024 Pinecone Foods LLC </Box>{" "}
          <Box>Зохиогчийн эрх хуулиар хамгаалагдсан.</Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
