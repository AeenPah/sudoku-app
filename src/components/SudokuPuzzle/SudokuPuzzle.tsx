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

  function markCellsAsError(
    oldValue: {
      rowIndex: number;
      columnIndex: number;
      innerCellIndex: number;
    },
    newValue: {
      indexRow: number;
      indexColumn: number;
      indexInnerCell: number;
    }
  ): void {
    const { indexColumn, indexInnerCell, indexRow } = newValue;
    const { columnIndex, innerCellIndex, rowIndex } = oldValue;
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
    inputValue: string,
    bool: boolean
  ): void {
    if (!inputValue) return;

    let isThisCellWrong = false;
    const thisCellStatus = cellStatus[row][column][innerCell];
    const wrongCellArray: [number, number, number][] = [];

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
              const oldValue = {
                columnIndex: indexColumn,
                innerCellIndex: indexInnerCell,
                rowIndex: indexRow,
              };
              const newValue = {
                indexColumn: column,
                indexInnerCell: innerCell,
                indexRow: row,
              };

              markCellsAsError(oldValue, newValue);

              wrongCellArray.push([indexRow, indexColumn, indexInnerCell]);

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
      const tempCellStatus = cellStatus;
      tempCellStatus[row][column][innerCell] = { status: true };
      setCellStatus(tempCellStatus);
    }

    if (bool) {
      unwatchWrongCells();
    }
  }

  function unwatchWrongCells() {
    const item: [number, number, number][] = [];
    cellStatus.forEach((row, indexRow) =>
      row.forEach((column, indexColumn) =>
        column.forEach((innerCell, indexInnerCell) => {
          if (!innerCell.status) {
            item.push([indexRow, indexColumn, indexInnerCell]);
          }
        })
      )
    );

    if (item.length > 0) {
      item.forEach(([indexRow, indexColumn, indexInnerCell]) => {
        validateAndSetCellValue(
          indexRow,
          indexColumn,
          indexInnerCell,
          numberGrid[indexRow][indexColumn][indexInnerCell],
          false
        );
      });
    }
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
                  restrictToSingleDigit(event);
                  validateAndSetCellValue(
                    index1,
                    index2,
                    index3,
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
