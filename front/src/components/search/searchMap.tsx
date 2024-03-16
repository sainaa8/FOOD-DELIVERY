"use client";
import { Stack } from "@mui/material";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import { Options } from "../home/OneModel";
import { Modal, Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
// import  from "@mui/material";

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

type Sda = {
  data: FoodType[];
};
export const SearchMap = (props: Sda) => {
  const { data } = props;
  console.log(data);

  const [foundFood, setFoundFood] = useState<FoodType | null>(null);
  const [open, setOpenModal] = useState<boolean>(false);
  const handleClose = () => setOpenModal(false);

  const handleModalClick = () => setOpenModal(!open);

  const handleFoodClick = (event: MouseEvent<HTMLDivElement>) => {
    const foodId = event.currentTarget.id;
    console.log(foodId);
    const filteredFood = data.find((el) => el._id === foodId);
    setFoundFood(filteredFood as FoodType);
    handleModalClick();
  };

  console.log(foundFood);

  return (
    <Stack>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {data.length > 0 ? (
          <div>
            <Stack
              direction="row"
              sx={{
                gap: "30px",
                flexWrap: "wrap",
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                marginBottom: "90px",
              }}
            >
              {data?.map((el: FoodType, index: number) => (
                <div key={index} id={el._id} onClick={handleFoodClick}>
                  <Options zurag={el.image} text={el.name} une={el.price} />
                </div>
              ))}
            </Stack>
          </div>
        ) : (
          <Stack
            sx={{
              alignItems: "center",
              justifyContent: "center",
              padding: "170px 100px",
            }}
          >
            <Image alt="" src="/box.png" width={133} height={133} />
            <div
              style={{
                fontFamily: "sans-serif",
                fontSize: "20px",
                color: "grey",
                marginTop: "30px",
              }}
            >
              Уучлаарай илэрц олдсонгүй...
            </div>
          </Stack>
        )}
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
    </Stack>
  );
};
