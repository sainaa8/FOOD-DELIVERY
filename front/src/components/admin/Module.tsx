import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

type SS = {
  handleClose: () => void;
};
export const Modul = (props: SS) => {
  const { handleClose } = props;
  const [name, setName] = useState();
  console.log(name);

  const handleCraete = async () => {
    try {
      const { data } = await axios.post(
        "https://food-delivery-isg2.onrender.com/category",
        {
          name: name,
        }
      );
      console.log(data);
      handleClose();
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div style={{ height: "170px" }}>
      <div
        style={{
          borderBottom: "1px solid black",
          display: "flex",
          width: "100%",
        }}
      >
        <div>
          <ClearIcon />
        </div>
        <div
          style={{
            fontWeight: "bold",
            marginLeft: "100px",
            fontSize: "25px",
            marginBottom: "20px",
          }}
        >
          Create new category
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div>Category name</div>
        <div
          style={{
            width: "100%",
            height: "40px",
            backgroundColor: "grey",
            display: "flex",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <input
            onChange={(e: any) => setName(e.target.value)}
            placeholder="name"
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "grey",
              marginLeft: "30px",
            }}
          />
        </div>
      </div>

      <Button
        onClick={handleCraete}
        sx={{
          backgroundColor: "blue",
          color: "white",
          width: "200px",
          marginLeft: "200px",
          marginTop: "20px",
        }}
      >
        Continue
      </Button>
    </div>
  );
};
