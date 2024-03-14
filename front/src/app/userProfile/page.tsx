import { UserProfile } from "@/components/userProfile/UserProfile";
import { Stack } from "@mui/material";
function UserPro() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignContent="center"
      sx={{ width: "100vw", display: "flex", padding: "220px 0px" }}
    >
      <UserProfile />
    </Stack>
  );
}
export default UserPro;
