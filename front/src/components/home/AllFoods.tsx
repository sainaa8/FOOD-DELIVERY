"use client";

import { MouseEvent, useState } from "react";
import { Options } from "./OneModel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";

import { Stack, Box } from "@mui/material";
import Image from "next/image";

import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "861px",
  height: "394px",
  gap: "20px",
  p: 1,

  borderRadius: "16px",
  backgroundColor: "white",
};

type AllFoodsProps = {
  foods: FoodType[];
};

export const AllFoods = ({ foods }: AllFoodsProps) => {
  const [foundFood, setFoundFood] = useState<FoodType | null>(null);
  const [open, setOpenModal] = useState<boolean>(false);
  const handleClose = () => setOpenModal(false);

  const handleModalClick = () => setOpenModal(!open);

  const handleFoodClick = (event: MouseEvent<HTMLDivElement>) => {
    const foodId = event.currentTarget.id;
    const filteredFood = foods.find(({ _id }) => _id === foodId);
    handleModalClick();
    setFoundFood(filteredFood as FoodType);
  };
  //   console.log(foundFood);

  const [num, setNum] = useState(12);
  const [moreButton, setMoreButton] = useState(false);
  console.log(num);
  const handlerMore = () => {
    if (moreButton) {
      setNum(foods.length);
      setMoreButton(false);
    } else {
      setNum(12);
      setMoreButton(true);
    }
  };
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Stack
        direction="row"
        sx={{
          width: "92%",
          marginBottom: "30px",
          paddingLeft: "20px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            width: "85%",
          }}
        >
          <Box>
            <Image alt="" src="/star.png" width={40} height={40} />
          </Box>
          <Box
            sx={{
              fontSize: "33px",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Үндсэн хоол
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: "23px",
            fontFamily: "sans-serif",
            color: "green",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
            "&:hover": { color: "orange", cursor: "pointer" },
            "&:active": { transform: "scale(0.9)" },
          }}
          onClick={handlerMore}
        >
          {moreButton ? "Бүгдийг харах" : " Хураах"}

          <ArrowForwardIosIcon />
        </Box>
         
      </Stack>
      <Stack
        direction="row"
        sx={{
          gap: "120px",
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {foods?.slice(0, num).map((el: FoodType, index: number) => (
          <div key={index} onClick={handleFoodClick} id={el._id}>
            <Options zurag={el.image} text={el.name} une={el.price} />
          </div>
        ))}
      </Stack>

      <Modal open={open} onClose={handleClose}>
        <div style={style}>
          <Stack direction="row" sx={{ padding: "10px" }}>
            <div
              style={{ width: "505px", height: "382px", position: "relative" }}
            >
              {foundFood?.image && (
                <Image
                  src={foundFood?.image}
                  alt=""
                  layout="fill"
                  style={{ borderRadius: "6px" }}
                />
              )}
            </div>
            <Stack sx={{ gap: "20px", paddingLeft: "30px" }}>
              <div
                style={{
                  width: "370px",
                  display: "flex",
                  justifyContent: "end",
                  paddingRight: "20px",
                }}
              >
                <div onClick={handleClose}>
                  <ClearIcon />
                </div>
              </div>
              <Stack sx={{}}>
                <div
                  style={{
                    fontSize: "29px",
                    fontFamily: "sans-serif",
                    fontWeight: "700px",
                  }}
                >
                  {foundFood?.name}
                </div>
                <div
                  style={{
                    fontSize: "29px",
                    fontFamily: "sans-serif",

                    color: "green",
                  }}
                >
                  {foundFood?.price} ₮
                </div>
              </Stack>
              <Stack>
                <div style={{ fontSize: "20px", fontFamily: "sans-serif" }}>
                  Орц
                </div>
                <div
                  style={{
                    width: "86%",
                    backgroundColor: "#F6F6F6",
                    padding: "5px 5px",
                    borderRadius: "6px",
                    marginTop: "7px",
                    fontFamily: "sans-serif",
                    fontSize: "12px",
                    color: "grey",
                  }}
                >
                  {foundFood?.ingredients}
                </div>
              </Stack>
              <Stack sx={{ gap: "10px" }}>
                <div style={{ fontFamily: "sans-serif" }}>Тоо</div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    sx={{
                      backgroundColor: "green",
                      color: "white",
                      borderRadius: "6px",
                    }}
                  >
                    -
                  </Button>
                  <div style={{ fontFamily: "sans-serif" }}>1</div>
                  <Button
                    sx={{
                      backgroundColor: "green",
                      color: "white",
                      borderRadius: "6px",
                    }}
                  >
                    +
                  </Button>
                </div>
                <Button
                  sx={{
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  Сагслах
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </Modal>
    </div>
  );
};
