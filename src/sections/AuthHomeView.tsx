"use client";
import Loader from "@/components/Loader";
import { Typography } from "@mui/material";
import { useSession } from "next-auth/react";
export default function AuthHomeView() {
  const { data: session, status } = useSession();
  console.log(session?.user?.image);

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <div>
      <Typography>Ahoj, {session?.user?.name} si prihlaseny.</Typography>
    </div>
  );
}
