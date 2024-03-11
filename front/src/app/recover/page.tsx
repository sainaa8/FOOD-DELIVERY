import { RecoverPass } from "@/components/recoverPassword/RecoverPass";
import { Stack } from "@mui/material";
function RecoverPassPage() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "960px", width: "100vw" }}
    >
      <RecoverPass />;
    </Stack>
  );
}
export default RecoverPassPage;
