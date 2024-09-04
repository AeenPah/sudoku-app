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
    const updatedCells = JSON.parse(JSON.stringify(cellStatus));

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

    // Validate against rows to find duplicates and mark errors.
    updatedNumberGrid.forEach((currentRow, rowIndex) => {
      if (rowIndex !== row) return;

      currentRow.forEach((currentColumn, ColumnIndex) => {
        if (ColumnIndex !== column) return;

        currentColumn.forEach((currentInnerCell, innerCellIndex) => {
          if (currentInnerCell === inputValue && inputValue !== "0") {
            markCellsAsError({
              oldValue: {
                columnIndex: column,
                innerCellIndex: innerCell,
                rowIndex: row,
              },
              newValue: {
                indexColumn: ColumnIndex,
                indexInnerCell: innerCellIndex,
                indexRow: rowIndex,
              },
            });
          }
        });
      });
    });

    // To find wrong number in columns
    updatedNumberGrid.forEach((currentRow, rowIndex) => {
      currentRow.forEach((currentColumn, columnIndex) => {
        if (columnIndex !== column) return;

        currentColumn.forEach((CurrentInnerCell, innerCellIndex) => {
          if (
            innerCell % 3 === innerCellIndex % 3 &&
            CurrentInnerCell === inputValue
          ) {
            markCellsAsError({
              oldValue: {
                columnIndex: column,
                innerCellIndex: innerCell,
                rowIndex: row,
              },
              newValue: {
                indexColumn: columnIndex,
                indexInnerCell: innerCellIndex,
                indexRow: rowIndex,
              },
            });
          }
        });
      });
    });

    // To find wrong number in rows
    updatedNumberGrid.forEach((currentRow, rowIndex) => {
      if (rowIndex !== row) return;

      currentRow.forEach((currentColumn, columnIndex) => {
        currentColumn.forEach((currentInnerCell, innerCellIndex) => {
          if (
            currentInnerCell === inputValue &&
            ((innerCell < 3 && innerCellIndex < 3) ||
              (innerCell >= 3 &&
                innerCell < 6 &&
                innerCellIndex >= 3 &&
                innerCellIndex < 6) ||
              (innerCell >= 6 && innerCellIndex >= 6))
          ) {
            markCellsAsError({
              oldValue: {
                columnIndex: column,
                innerCellIndex: innerCell,
                rowIndex: row,
              },
              newValue: {
                indexColumn: columnIndex,
                indexInnerCell: innerCellIndex,
                indexRow: rowIndex,
              },
            });
          }
        });
      });
    });

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
