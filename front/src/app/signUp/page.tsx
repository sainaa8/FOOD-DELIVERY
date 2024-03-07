import { Grid, Stack } from "@mui/material";
import { SignUp } from "@/components/createAccount/SingUp";
function HomeSignUp() {
  return (
    <Stack
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <SignUp />
    </Stack>
  );
}
export default HomeSignUp;
