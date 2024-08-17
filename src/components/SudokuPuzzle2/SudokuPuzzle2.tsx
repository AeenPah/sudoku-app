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

  console.log("table", table);

  return (
    <Stack direction="row" width="460px" flexWrap="wrap">
      {Array(3)
        .fill(0)
        .map((item1, index1) =>
          Array(3)
            .fill(0)
            .map((item2, index2) => (
              <Stack
                key={`${index1}-${index2}`}
                border="1px solid black"
                flexWrap="wrap"
                direction="row"
                width="152px"
              >
                {Array(9)
                  .fill(0)
                  .map((item3, index3) => (
                    <PuzzleTextField key={`${index1}-${index2}-${index3}`} />
                  ))}
              </Stack>
            ))
        )}
    </Stack>
  );
}

export default SudokuPuzzle2;
