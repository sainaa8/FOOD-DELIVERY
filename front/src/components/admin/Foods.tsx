import { Stack } from "@mui/material";
import { Options } from "../menu/Modal";
type DataType = {
  name: string;
  foodId: FoodType[];
  id: string;
};
type SS = {
  data: DataType;
};
export const AdminFoods = (props: SS) => {
  const { data } = props;
  return (
    <Stack>
      <div
        style={{
          width: "100%",
          display: "flex",
          marginTop: "50px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          BreakFast
        </div>
        <div
          style={{
            marginRight: "110px",
            marginLeft: "30px",
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            backgroundColor: "green",
            padding: "10px 30px",
            borderRadius: "8px",
          }}
        >
          Add new food
        </div>
      </div>
      <Stack
        direction="row"
        sx={{
          gap: "30px",
          alignItems: "center",
          direction: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginBottom: "200px",
          width: "91%",
        }}
      >
        {data.foodId.map((el: any, index: number) => (
          <div key={index}>
            <Options zurag={el.image} text={el.name} une={el.price} />
          </div>
        ))}
      </Stack>
    </Stack>
  );
};
