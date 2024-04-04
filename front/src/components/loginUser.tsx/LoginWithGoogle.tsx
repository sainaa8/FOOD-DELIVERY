import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const GoogleButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter") {
      loginWithRedirect({ connection: "google-oauth2" });
    }
  };

  return (
    <button
      onClick={() => loginWithRedirect({ connection: "google-oauth2" })}
      onKeyDown={handleKeyDown}
    >
      Log in with Google
    </button>
  );
};
