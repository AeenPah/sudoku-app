"use client";

import { useState } from "react";

import { Stack } from "@mui/material";

import restrictToSingleDigit from "@/utils/restrictToSingleDigit";

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

  const updateCellStatus = (
    row: number,
    column: number,
    innerCell: number,
    hasError: boolean
  ) => {
    const updatedCells = cellStatus;

    updatedCells[row][column][innerCell] = {
      status: !hasError,
    };

    setCellStatus(updatedCells);
  };

  function refreshInvalidCells() {
    const errorCells = cellStatus.flatMap((row, rowIndex) =>
      row.flatMap((column, columnIndex) =>
        column
          .map((innerCell, innerCellIndex) => ({
            rowIndex,
            columnIndex,
            innerCellIndex,
            isError: !innerCell.status,
          }))
          .filter((cell) => cell.isError)
      )
    );

    errorCells.forEach(({ rowIndex, columnIndex, innerCellIndex }) => {
      validateAndUpdateCell(
        rowIndex,
        columnIndex,
        innerCellIndex,
        numberGrid[rowIndex][columnIndex][innerCellIndex],
        false
      );
    });
  }

  function validateAndUpdateCell(
    row: number,
    column: number,
    innerCell: number,
    inputValue: string,
    clearErrors: boolean
  ): void {
    if (!inputValue) return;

    let isThisCellWrong = false;
    const thisCellStatus = cellStatus[row][column][innerCell];

    // Create a deep copy of the current grid state to avoid direct mutation.
    const updatedNumberGrid: TNumberGrid = JSON.parse(
      JSON.stringify(numberGrid)
    );

    // Helper function to validate cells and mark errors if necessary.
    const validateCells = (
      grid: TNumberGrid,
      checkFn: (
        currentInnerCell: string,
        indexRow: number,
        indexColumn: number,
        indexInnerCell: number
      ) => boolean
    ) => {
      grid.forEach((currentRow, indexRow) => {
        currentRow.forEach((currentColumn, indexColumn) => {
          currentColumn.forEach((currentInnerCell, indexInnerCell) => {
            // avoid check cell with its own cell value
            if (
              row === indexRow &&
              column === indexColumn &&
              innerCell === indexInnerCell
            )
              return;

            if (
              checkFn(currentInnerCell, indexRow, indexColumn, indexInnerCell)
            ) {
              updateCellStatus(indexRow, indexColumn, indexInnerCell, true);
              updateCellStatus(row, column, innerCell, true);

              isThisCellWrong = true;
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
    setNumberGrid((prev) => {
      prev[row][column][innerCell] = inputValue;

      return [...prev];
    });

    // Reset cell color if it is not wrong
    if (!isThisCellWrong && !thisCellStatus.status) {
      updateCellStatus(row, column, innerCell, false);
    }

    if (clearErrors) {
      refreshInvalidCells();
    }
  }

  return (
    <Stack direction="row" width="460px" flexWrap="wrap">
      {cellStatus.map((row, indexRow) =>
        row.map((column, indexColumn) => (
          <Stack
            key={`${indexRow}-${indexColumn}`}
            border="1px solid black"
            flexWrap="wrap"
            direction="row"
            width="152px"
          >
            {column.map((innerCell, indexInnerCell) => (
              <PuzzleTextField
                status={innerCell.status}
                key={`${indexRow}-${indexColumn}-${indexInnerCell}`}
                onChange={(event) => {
                  restrictToSingleDigit(event);
                  validateAndUpdateCell(
                    indexRow,
                    indexColumn,
                    indexInnerCell,
                    event.target.value,
                    true
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
