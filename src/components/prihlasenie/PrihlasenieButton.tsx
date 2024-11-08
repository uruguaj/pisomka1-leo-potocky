// src/components/prihlasenie/PrihlasenieButton.tsx
"use client";
import { signIn } from "next-auth/react";
import { Button } from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";
export default function PrihlasenieButton() {
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };
  return (
    <Button
      fullWidth
      variant="contained"
      startIcon={<GoogleIcon />}
      onClick={handleGoogleSignIn}
      sx={{
        marginTop: 3,
        backgroundColor: "#4285F4",
        color: "#fff",
        "&:hover": { backgroundColor: "#357ae8" },
        borderRadius: 2,
        padding: "10px 20px",
        textTransform: "none",
      }}
    >
      Prihlásiť sa cez Google
    </Button>
  );
}
