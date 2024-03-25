import { VarietyOfFoods } from "@/components/menu/VarietyOfFoods";
import axios from "axios";

export type CategoriesType = {
  name: string;

  id: string;
};
export const GetAllCategories = async () => {
  try {
    const { data } = await axios.get<CategoriesType[]>(
      "https://food-delivery-isg2.onrender.com/getCategories"
    );
    // console.log(data);

    return data;
  } catch (err) {
    console.log(err);
  }
};

async function Menu() {
  const categories = await GetAllCategories();

  return <VarietyOfFoods categories={categories as CategoriesType[]} />;
}
export default Menu;
