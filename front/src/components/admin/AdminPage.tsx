import { CategoriesType } from "@/app/admin/page";
import { FoodMenu } from "./FoodMenu";
// import { GetAllCategories } from "@/app/admin/page";

type SS = {
  category: CategoriesType[];
};
export const AdminInside = async (props: SS) => {
  const { category } = props;
  // const category = await GetAllCategories();

  return (
    <div style={{ width: "90%" }}>
      <FoodMenu category={category as CategoriesType[]} />
    </div>
  );
};
