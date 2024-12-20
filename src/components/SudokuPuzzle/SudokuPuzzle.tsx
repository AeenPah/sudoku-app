"use client";

import { useEffect, useState } from "react";

import { Button, Stack } from "@mui/material";

import restrictToSingleDigit from "@/utils/restrictToSingleDigit";

import PuzzleTextField from "../PuzzleTextField/PuzzleTextField";

import {
  answer,
  initialCellStatus,
  initialNumberGrid,
  validationRules,
} from "./SudokuPuzzle.const";
import { TCellStatusList, TNumberGrid } from "./SudokuPuzzle.type";

function SudokuPuzzle(): JSX.Element {
  /* -------------------------------------------------------------------------- */
  /*                                    States                                  */
  /* -------------------------------------------------------------------------- */

  const [numberGrid, setNumberGrid] = useState<TNumberGrid>(initialNumberGrid);
  const [cellStatus, setCellStatus] =
    useState<TCellStatusList>(initialCellStatus);

  /* -------------------------------------------------------------------------- */
  /*                                   Effect                                   */
  /* -------------------------------------------------------------------------- */

  // TODO: May change this by update states
  useEffect(() => {
    const tempCellStatus = cellStatus;
    answer.forEach((item) => {
      tempCellStatus[item[0]][item[1]][item[2]] = {
        status: true,
        changeable: true,
      };

      setNumberGrid((prev) => {
        prev[item[0]][item[1]][item[2]] = item[3];

        return [...prev];
      });
    });

    setCellStatus(tempCellStatus);
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  function updateCellStatus(
    row: number,
    column: number,
    innerCell: number,
    hasError: boolean
  ): void {
    const updatedCells = cellStatus;

    updatedCells[row][column][innerCell] = {
      ...updatedCells[row][column][innerCell],
      status: !hasError,
    };

    setCellStatus(updatedCells);
  }

  function refreshInvalidCells(): void {
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

  function checkForDuplicates(
    row: number,
    column: number,
    cell: number,
    inputValue: string
  ): boolean {
    const updatedGrid: TNumberGrid = JSON.parse(JSON.stringify(numberGrid));
    const errorCells: {
      rowIndex: number;
      columnIndex: number;
      cellIndex: number;
    }[] = [];

    validationRules.forEach(({ checkFn }) => {
      updatedGrid.forEach((r, rowIndex) =>
        r.forEach((c, columnIndex) =>
          c.forEach((ce, cellIndex) => {
            // avoid check cell with its own cell value
            if (
              row === rowIndex &&
              column === columnIndex &&
              cell === cellIndex
            )
              return;

            if (
              checkFn(row, column, cell, rowIndex, columnIndex, cellIndex) &&
              ce === inputValue
            ) {
              errorCells.push({ rowIndex, columnIndex, cellIndex });
            }
          })
        )
      );
    });

    errorCells.forEach(({ rowIndex, columnIndex, cellIndex }) =>
      updateCellStatus(rowIndex, columnIndex, cellIndex, true)
    );

    return errorCells.length > 0;
  }

  function validateAndUpdateCell(
    row: number,
    column: number,
    cell: number,
    value: string,
    clearErrors: boolean
  ): void {
    if (!value) return;

    const hasError = checkForDuplicates(row, column, cell, value);

    // set value to the right place at the state.
    setNumberGrid((prev) => {
      prev[row][column][cell] = value;

      return [...prev];
    });

    updateCellStatus(row, column, cell, hasError);
    if (clearErrors) refreshInvalidCells();
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
                changeable={innerCell.changeable}
                status={innerCell.status}
                value={numberGrid[indexRow][indexColumn][indexInnerCell]}
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

      <Stack justifyContent="center" width={1} direction="row" gap={2} my={2}>
        <Button onClick={() => console.log(numberGrid)}>Done</Button>
        <Button onClick={() => window.location.reload()}>Reset</Button>
      </Stack>
    </Stack>
  );
}

export default SudokuPuzzle;
