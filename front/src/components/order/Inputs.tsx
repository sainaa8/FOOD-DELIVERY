"use client";
import axios from "axios";
// import { IoLocationOutline } from "react-icons/io5";
import { Stack } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState, useEffect, useContext } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { BasketContext } from "../Provider/basketModalProvider";

export const InputsFields = () => {
  const { input, setInput, nemelt, SetNemelt } = useContext(BasketContext);

  const [search, setSearch] = useState(false);

  const [address, setAddress] = useState<any[]>([]);


  const url = `https://z4ryw4kny0.execute-api.ap-southeast-1.amazonaws.com/production/searchByAddress?address=`;

  const fetchAddress = async (i: string) => {
    try {
      const response = await axios.get(`${url}${i}`);
      setAddress(response.data.data);
      return;
    } catch (error: any) {}
  };

  const handleClick = (i: string) => {
    setInput(i);
    setSearch(false);
  };

  useEffect(() => {
    fetchAddress(input);
  }, [input]);

  useEffect(() => {
    if (input.length > 0) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  }, [input]);

  return (
    <Stack sx={{ padding: "24px", width: "383px", gap: "30px" }}>
      <Stack sx={{ gap: "16px" }}>
        <div>Хаяг аа оруулна уу</div>
        <div
          style={{
            position: "relative",
            height: "40px",
            width: "100%",
            display: "flex",
            backgroundColor: "#D9D9D9",
            alignItems: "center",
            borderRadius: "6px",
            paddingLeft: "20px",
            gap: "10px",
          }}
        >
          <LocationOnIcon style={{ color: "white" }} />
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="duuregee songonuu"
            style={{
              backgroundColor: "#D9D9D9",
              border: "none",
              outline: "none",
              width: "80%",
            }}
          />{" "}
          {search && (
            <div
              style={{
                top: "100%",
                position: "absolute",
                zIndex: "1",
                height: "384px",
                width: "100%",
                overflow: "scroll",
                backgroundColor: "white",
              }}
            >
              {address.length > 0 &&
                address?.map((com, i: number) => {
                  return (
                    <div
                      style={{ display: "plex" }}
                      key={i}
                      id={i.toString()}
                      onClick={() => {
                        handleClick(com.bairname);
                      }}
                    >
                      <LocationOnIcon />
                      <div id={`loc${i}`}>{com.bairname}</div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </Stack>
      <Stack sx={{ gap: "16px" }}>
        <div>Нэмэлт мэдээлэл</div>
        <div
          style={{
            position: "relative",
            height: "40px",
            width: "100%",
            display: "flex",
            backgroundColor: "#D9D9D9",
            alignItems: "center",
            borderRadius: "6px",
            paddingLeft: "20px",
            gap: "10px",
          }}
        >
          <input
            onChange={(e) => {
              SetNemelt(e.target.value);
            }}
            placeholder="utasaa oruulan uu"
            style={{
              backgroundColor: "#D9D9D9",
              border: "none",
              outline: "none",
              width: "80%",
            }}
          />
        </div>
      </Stack>
      <Stack sx={{ gap: "16px" }}>
        <div>Утасны дугаар</div>
        <div
          style={{
            position: "relative",
            height: "40px",
            width: "100%",
            display: "flex",
            backgroundColor: "#D9D9D9",
            alignItems: "center",
            borderRadius: "6px",
            paddingLeft: "20px",
            gap: "10px",
          }}
        >
          <input
            placeholder="utasaa oruulan uu"
            style={{
              backgroundColor: "#D9D9D9",
              border: "none",
              outline: "none",
              width: "80%",
            }}
          />
        </div>
      </Stack>

      <div>
        <p>Төлбөр төлөх </p>
        <div
          style={{
            width: "100%",
            display: "flex",

            justifyContent: "space-around",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "black",
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
              />
            }
            label="Бэлнээр"
            sx={{
              color: "#8B8E95s",
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "black",
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
              />
            }
            label="Картаар"
            sx={{
              color: "#8B8E95s",
            }}
          />
        </div>
      </div>
    </Stack>
  );
};
