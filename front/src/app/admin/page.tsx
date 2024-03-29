import { Stack } from "@mui/material";
import axios from "axios";
import { AdminInside } from "@/components/admin/AdminPage";
export type CategoriesType = {
  name: string;

  id: string;
};

///ymr lallran bolood baigaag medeh ym alga sda neern
const GetAllCategories = async () => {
  try {
    const { data } = await axios.get<CategoriesType[]>(
      "https://food-delivery-isg2.onrender.com/getCategories"
    );
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};
async function AdminPage() {
  const data = await GetAllCategories();


  return (
    <Stack direction="row" sx={{ width: "100vw", justifyContent: "center" }}>
      <AdminInside category={data as CategoriesType[]}/>
    </Stack>
  );
}

export default AdminPage;
