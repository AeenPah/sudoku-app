"use client";

import { useState } from "react";

import { Stack } from "@mui/material";

import limitToLastCharacter from "@/utils/limitToLastCharacter";

import PuzzleTextField from "../PuzzleTextField/PuzzleTextField";

import { TCellStatus, TNumberGrid } from "./SudokuPuzzle.type";
import { initialCellStatus, initialNumberGrid } from "./SudokuPuzzle.const";

function SudokuPuzzle() {
  /* -------------------------------------------------------------------------- */
  /*                                    State                                   */
  /* -------------------------------------------------------------------------- */

  const [numberGrid, setNumberGrid] = useState<TNumberGrid>(initialNumberGrid);
  const [cellStatus, setCellStatus] = useState<TCellStatus>(initialCellStatus);

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  function markCellsAsError({
    oldValue: { rowIndex, columnIndex, innerCellIndex },
    newValue: { indexRow, indexColumn, indexInnerCell },
  }: {
    oldValue: {
      rowIndex: number;
      columnIndex: number;
      innerCellIndex: number;
    };
    newValue: {
      indexRow: number;
      indexColumn: number;
      indexInnerCell: number;
    };
  }): void {
    const updatedCells = cellStatus;

    updatedCells[rowIndex][columnIndex][innerCellIndex] = {
      status: false,
    };
    updatedCells[indexRow][indexColumn][indexInnerCell] = {
      status: false,
    };

    setCellStatus(updatedCells);
  }

  function validateAndSetCellValue(
    row: number,
    column: number,
    innerCell: number,
    inputValue: string
  ): void {
    if (!inputValue) return;

    // console.log("handleOnChange", rowIndex, columnIndex, innerCellIndex, value);

    // Create a deep copy of the current grid state to avoid direct mutation.
    const updatedNumberGrid: TNumberGrid = JSON.parse(
      JSON.stringify(numberGrid)
    );

    // Helper function to validate cells and mark errors if necessary.
    const validateCells = (grid: TNumberGrid, checkFn: Function) => {
      grid.forEach((currentRow, indexRow) => {
        currentRow.forEach((currentColumn, indexColumn) => {
          currentColumn.forEach((currentInnerCell, indexInnerCell) => {
            if (
              checkFn(currentInnerCell, indexRow, indexColumn, indexInnerCell)
            ) {
              // TODO: review this function later.
              markCellsAsError({
                oldValue: {
                  columnIndex: column,
                  innerCellIndex: innerCell,
                  rowIndex: row,
                },
                newValue: {
                  indexColumn: indexColumn,
                  indexInnerCell: indexInnerCell,
                  indexRow: indexRow,
                },
              });
            }
          });
        });
      });
    };

    /* --------------- Check for duplicates in the same box of 9*9 -------------- */
    validateCells(
      updatedNumberGrid,
      (currentInnerCell: string, indexRow: number, indexColumn: number) =>
        indexRow === row &&
        indexColumn === column &&
        currentInnerCell === inputValue
    );

    /* ----------------- Check for duplicates in the same column ---------------- */
    validateCells(
      updatedNumberGrid,
      (
        currentInnerCell: string,
        _indexRow: number,
        indexColumn: number,
        indexInnerCell: number
      ) =>
        indexColumn === column &&
        innerCell % 3 === indexInnerCell % 3 &&
        currentInnerCell === inputValue
    );

    /* ------------------ Check for duplicates in the same row ------------------ */
    validateCells(
      updatedNumberGrid,
      (
        currentInnerCell: string,
        indexRow: number,
        _indexColumn: number,
        indexInnerCell: number
      ) =>
        indexRow === row &&
        currentInnerCell === inputValue &&
        ((innerCell < 3 && indexInnerCell < 3) ||
          (innerCell >= 3 &&
            innerCell < 6 &&
            indexInnerCell >= 3 &&
            indexInnerCell < 6) ||
          (innerCell >= 6 && indexInnerCell >= 6))
    );

    // set value to the right place at the state.
    updatedNumberGrid[row][column][innerCell] = inputValue;
    setNumberGrid(updatedNumberGrid);
  }

  return (
    <Stack direction="row" width="460px" flexWrap="wrap">
      {cellStatus.map((row, index1) =>
        row.map((column, index2) => (
          <Stack
            key={`${index1}-${index2}`}
            border="1px solid black"
            flexWrap="wrap"
            direction="row"
            width="152px"
          >
            {column.map((innerCell, index3) => (
              <PuzzleTextField
                status={innerCell.status}
                key={`${index1}-${index2}-${index3}`}
                onChange={(event) => {
                  limitToLastCharacter(event);
                  validateAndSetCellValue(
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

export default SudokuPuzzle;
