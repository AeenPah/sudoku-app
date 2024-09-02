"use client";

import { useState } from "react";

import { Stack } from "@mui/material";

import PuzzleTextField from "../PuzzleTextField/PuzzleTextField";
import limitToLastCharacter from "@/utils/limitToLastCharacter";

type TTable = string[][][];

const initialTable: TTable = Array(3)
  .fill(0)
  .map(() =>
    Array(3)
      .fill(0)
      .map(() => Array(9).fill("0"))
  );

function SudokuPuzzle2() {
  /* -------------------------------------------------------------------------- */
  /*                                    State                                   */
  /* -------------------------------------------------------------------------- */

  const [table, setTable] = useState<TTable>(initialTable);

  // console.log("table", table);

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  function setValueToTableCells(
    rowIndex: number,
    columnIndex: number,
    innerCellIndex: number,
    value: string
  ) {
    if (!value) return;

    // console.log("handleOnChange", rowIndex, columnIndex, innerCellIndex, value);

    const tempTable = [...table];

    // for find wrong number in inner cells
    tempTable.forEach((row, indexRow) => {
      if (indexRow !== rowIndex) return;

      row.forEach((column, indexColumn) => {
        if (indexColumn !== columnIndex) return;

        column.forEach((innerCell) => {
          if (innerCell === value) console.log("wrong innerCell");
        });
      });
    });

    // for find wrong number in columns
    tempTable.forEach((row) => {
      row.forEach((column, indexColumn) => {
        if (indexColumn !== columnIndex) return;

        column.forEach((innerCell, indexInnerCell) => {
          // console.log(innerCellIndex % 3);
          if (innerCellIndex % 3 === indexInnerCell % 3 && innerCell === value)
            console.log("wrong column");
        });
      });
    });

    // for find wrong number in rows
    tempTable.forEach((row, indexRow) => {
      if (indexRow !== rowIndex) return;

      row.forEach((column) => {
        column.forEach((innerCell, indexInnerCell) => {
          if (innerCellIndex < 3 && indexInnerCell < 3 && innerCell === value) {
            console.log("Wrong row 1");
          }

          if (
            innerCellIndex < 6 &&
            indexInnerCell < 6 &&
            innerCellIndex >= 3 &&
            indexInnerCell >= 3 &&
            innerCell === value
          ) {
            console.log("Wrong row 2");
          }

          if (
            innerCellIndex >= 6 &&
            indexInnerCell >= 6 &&
            innerCell === value
          ) {
            console.log("Wrong row 3");
          }
        });
      });
    });

    // set value to the right place at the state.
    tempTable[rowIndex][columnIndex][innerCellIndex] = value;
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
                      onChange={(event) => {
                        limitToLastCharacter(event);
                        setValueToTableCells(
                          index1,
                          index2,
                          index3,
                          event.target.value
                        );
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
