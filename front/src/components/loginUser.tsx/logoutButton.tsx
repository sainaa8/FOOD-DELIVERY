import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
export const GooogleButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <Button
        onClick={() => logout()}
        variant="outlined"
        sx={{
          height: "48px",
          width: "100%",
          backgroundColor: "whithe",
          borderRadius: "10px",
          color: "black",
        }}
      >
        logout
      </Button>
    )
  );
};
