"use client";
import React from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { Stack } from "@mui/material";

type Proptype = {
  orderNumber: string;
  process: string;
  createdAt: string;
};
export const Zahialga = (props: Proptype) => {
  const { orderNumber, process, createdAt } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 10px",
        justifyContent: "space-between",
        borderBottom: "1px solid #0468C8",

        height: "64px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <div>
          <RadioButtonCheckedIcon
            style={{ color: "#0468C8", fontSize: "40px" }}
          />
        </div>
        <div>
          <div style={{ fontSize: "18px" }}>Захиалга #{orderNumber}</div>
          <div style={{ color: "#0468C8", fontSize: "16px" }}>{process}</div>
        </div>
      </div>

      <div>{createdAt}</div>
    </div>
  );
};

type PropsType = {
  data: Array<object>;
};

export const ZahialgiinTuuh = (props: PropsType) => {
  const { data } = props;
  return (
    <Stack
      sx={{
        width: "432px",
        height: "720px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
        borderRadius: "6px",
        padding: "24px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: "24px" }}>Захиалгын түүх</div>

      <Stack sx={{ marginTop: "20px", overflow: "scroll" }}>
        {data?.map((el: any, index: number) => (
          <div key={index}>
            <Zahialga
              orderNumber={el.ordernumber}
              process={el.process}
              createdAt={el.createdAt.split("T")[0]}
            />
          </div>
        ))}
      </Stack>
    </Stack>
  );
};
