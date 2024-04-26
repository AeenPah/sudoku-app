"use client";

import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  /* -------------------------------------------------------------------------- */
  /*                                    Next                                    */
  /* -------------------------------------------------------------------------- */

  const router = useRouter();

  return (
    <Stack alignItems="center" justifyContent="center" height="100vh" gap={4}>
      <Typography variant="h2">Welcome to Sudoku App</Typography>
      <Button onClick={() => router.push("/sudoku-game/game-table")}>
        Start
      </Button>
    </Stack>
  );
}
