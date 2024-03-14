import * as React from "react";

import InputBase from "@mui/material/InputBase";
import { Stack, IconButton, Paper } from "@mui/material";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

type InputType = {
  name: string;
  title: string;
  value: string;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  edit: boolean;
  onchange: (even: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function CustomizedInputBase(props: InputType) {
  const { name, title, value, setEdit, edit, onchange } = props;
  const handleEdit = () => {
    setEdit((prov) => !prov);
  };
  return (
    <Paper
      variant="outlined"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 350,
        backgroundColor: "#F6F6F6",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex" }}>
        <IconButton
          sx={{ p: "10px", backgroundColor: "white" }}
          aria-label="menu"
        >
          <PersonOutlinedIcon />
        </IconButton>
        <Stack sx={{ ml: 1 }}>
          <Stack sx={{ fontSize: "12px", color: "gray" }}>{title}</Stack>
          <InputBase
            sx={{ flex: 1 }}
            defaultValue={value}
            readOnly={!edit}
            name={name}
            onChange={onchange}
          />
        </Stack>
      </div>

      <IconButton
        type="button"
        sx={{ p: "10px", color: "green" }}
        aria-label="search"
        onClick={handleEdit}
      >
        <EditOutlinedIcon />
      </IconButton>
    </Paper>
  );
}
