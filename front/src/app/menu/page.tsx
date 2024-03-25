import { VarietyOfFoods } from "@/components/menu/VarietyOfFoods";
import axios from "axios";

export type CategoriesType = {
  name: string;
  id: string;
};

const getAllCategories = async () => {
  try {
    const { data } = await axios.get<CategoriesType[]>(
      "https://food-delivery-isg2.onrender.com/getCategories"
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

async function Menus() {
  const categories = await getAllCategories();

  return (
    <div>
      <VarietyOfFoods categories={categories as CategoriesType[]} />
    </div>
  );
}

export default Menus;
