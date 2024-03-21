import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { Stack, Button } from "@mui/material";

import Image from "next/image";

type FoodDitealType = {
  foundFood: FoodType;
  basketObj: {
    foodId: object;
    amount: number;
  };
  handleClose: () => void;
  Buy: () => void;
  hanlerMin: () => void;
  handlerPlus: () => void;
};
export const FoodDiteal = (props: FoodDitealType) => {
  const { foundFood, basketObj, handleClose, Buy, hanlerMin, handlerPlus } =
    props;
  return (
    <Stack direction="row" sx={{ padding: "10px" }}>
      <div style={{ width: "505px", height: "382px", position: "relative" }}>
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
            {Number(foundFood?.price).toLocaleString()} ₮
          </div>
        </Stack>
        <Stack>
          <div style={{ fontSize: "20px", fontFamily: "sans-serif" }}>Орц</div>
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={hanlerMin}
              sx={{
                backgroundColor: "green",
                color: "white",
                borderRadius: "6px",
              }}
            >
              -
            </Button>
            <div style={{ fontFamily: "sans-serif" }}>{basketObj.amount}</div>
            <Button
              onClick={handlerPlus}
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
            onClick={Buy}
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
  );
};
