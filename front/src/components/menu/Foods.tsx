import { Options } from "./Modal";
import { Stack } from "@mui/material";
import axios from "axios";
import { useState, MouseEvent } from "react";
import { FoodDiteal } from "../FoodDiteal";
import Modal from "@mui/material/Modal";

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

type DataType = {
  name: string;
  foodId: FoodType[];
  id: string;
};
type SS = {
  data: DataType;
};
type Basket = {
  foodId: object;
  amount: number;
};

export const Foods = (props: SS) => {
  const { data } = props;

  const [open, setOpenModal] = useState<boolean>(false);
  const [foundFood, setFoundFoood] = useState<FoodType>();
  const [basket, setBasket] = useState<Basket[]>([]);
  const [basketObj, setBasketObj] = useState<{
    foodId: object;
    amount: number;
  }>({
    foodId: {},
    amount: 0,
  });

  const handleClose = () => setOpenModal(false);
  const handleModalClick = () => setOpenModal(!open);

  const hanlerMin = () => {
    if (basketObj.amount > 1) {
      setBasketObj({ ...basketObj, amount: basketObj.amount - 1 });
    }
  };
  const handlerPlus = () => {
    setBasketObj({ ...basketObj, amount: basketObj.amount + 1 });
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const targetId = event.currentTarget.id;
    const filteredfood = data.foodId.find(({ _id }) => _id === targetId);
    setBasketObj({ ...basketObj, foodId: filteredfood as FoodType });
    setFoundFoood(filteredfood as FoodType);
    handleModalClick();
  };

  const itemsInBasket = JSON.parse(localStorage.getItem("items") || "[]");

  const Buy = () => {
    setBasket((prev) => {
      localStorage.setItem(
        "items",
        JSON.stringify([...itemsInBasket, basketObj])
      );
      return [...prev, basketObj];
    });
    handleClose();
  };

  return (
    <Stack
      sx={{
        padding: "20px 30px",

        direction: "row",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Stack
        direction="row"
        sx={{
          gap: "30px",
          alignItems: "center",
          direction: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginBottom: "40px",
          width: "91%",
        }}
      >
        {data.foodId.map((el: any, index: number) => (
          <div key={index} onClick={handleClick} id={el._id}>
            <Options zurag={el.image} text={el.name} une={el.price} />
          </div>
        ))}
      </Stack>

      <Modal open={open} onClose={handleClose}>
        <div style={style}>
          <FoodDiteal
            foundFood={foundFood as FoodType}
            basketObj={basketObj}
            handleClose={handleClose}
            Buy={Buy}
            hanlerMin={hanlerMin}
            handlerPlus={handlerPlus}
          />
        </div>
      </Modal>
    </Stack>
  );
};
