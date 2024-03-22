import { CategoriesType } from "@/app/admin/page";
import { FoodMenu } from "./FoodMenu";
import { GetAllCategories } from "@/app/admin/page";

export const AdminInside = async () => {
  const category = await GetAllCategories();
  console.log(category, "sda");

  return (
    <div style={{ width: "90%", backgroundColor: "yellow" }}>
      <FoodMenu category={category} />
    </div>
  );
};
