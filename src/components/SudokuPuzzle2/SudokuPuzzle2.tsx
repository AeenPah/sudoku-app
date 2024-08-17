"use client";

import { useState } from "react";

import { Stack } from "@mui/material";

import PuzzleTextField from "../PuzzleTextField/PuzzleTextField";

function SudokuPuzzle2() {
  type TTable = string[][][];

  const initialTable: TTable = Array(3)
    .fill(0)
    .map(() =>
      Array(3)
        .fill(0)
        .map(() => Array(9).fill(0))
    );

  const [table, setTable] = useState<TTable>(initialTable);

  console.log("initialTable", initialTable);

  return (
    <Stack direction="row" width="450px" flexWrap="wrap">
      {Array(81)
        .fill(0)
        .map(() => (
          <PuzzleTextField />
        ))}
    </Stack>
  );
}

export default SudokuPuzzle2;
