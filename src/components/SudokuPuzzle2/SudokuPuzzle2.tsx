"use client";

import { ChangeEvent, useState } from "react";

import { Stack } from "@mui/material";

import PuzzleTextField from "../PuzzleTextField/PuzzleTextField";
import limitToLastCharacter from "@/utils/limitToLastCharacter";

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

  function setValueToTableCells(
    index1: number,
    index2: number,
    index3: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    console.log("handleOnChange", index1, index2, index3, e.target.value);

    const tempTable = [...table];
    tempTable[index1][index2][index3] = e.target.value;
    setTable(tempTable);
  }

  return (
    <Stack direction="row" width="460px" flexWrap="wrap">
      {Array(3)
        .fill(0)
        .map((_, index1) =>
          Array(3)
            .fill(0)
            .map((_, index2) => (
              <Stack
                key={`${index1}-${index2}`}
                border="1px solid black"
                flexWrap="wrap"
                direction="row"
                width="152px"
              >
                {Array(9)
                  .fill(0)
                  .map((_, index3) => (
                    <PuzzleTextField
                      key={`${index1}-${index2}-${index3}`}
                      onChange={(e) => {
                        limitToLastCharacter(e);
                        setValueToTableCells(index1, index2, index3, e);
                      }}
                    />
                  ))}
              </Stack>
            ))
        )}
    </Stack>
  );
}

export default SudokuPuzzle2;
