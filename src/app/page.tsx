"use client";

import { useRouter } from "next/navigation";
import { Button, Stack, Typography } from "@mui/material";

export default function Home() {
  /* -------------------------------------------------------------------------- */
  /*                                    Next                                    */
  /* -------------------------------------------------------------------------- */

  const router = useRouter();

  return (
    <Stack alignItems="center" justifyContent="center" height="100vh" gap={4}>
      <Typography variant="h2">Welcome to Sudoku App</Typography>
      <Button onClick={() => router.push("/sudoku-game")}>Start</Button>
    </Stack>
  );
}
