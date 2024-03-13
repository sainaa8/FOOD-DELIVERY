import { UserProfile } from "@/components/userProfile/UserProfile";
import { Stack } from "@mui/material";
function UserPro() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignContent="center"
      sx={{ height: "100vh", width: "100vw", display: "flex" }}
    >
      <UserProfile />
    </Stack>
  );
}
export default UserPro;
