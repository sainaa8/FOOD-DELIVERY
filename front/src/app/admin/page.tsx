import { Stack } from "@mui/material";
import axios from "axios";
import { AdminInside } from "@/components/admin/AdminPage";
export type CategoriesType = {
  name: string;

  id: string;
};

///ymr lallran bolood baigaag medeh ym alga sda neern
export const GetAllCategories = async () => {
  try {
    const { data } = await axios.get<CategoriesType[]>(
      "http://localhost:8001/getCategories"
    );
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};
async function AdminPage() {
  // const data = await GetAllCategories();
  // console.log(data);

  return (
    <Stack direction="row" sx={{ width: "100vw", justifyContent: "center" }}>
      <AdminInside />
    </Stack>
  );
}

export default AdminPage;
