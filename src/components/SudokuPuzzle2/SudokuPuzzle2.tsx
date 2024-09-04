"use client";

import { useEffect, useState } from "react";

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

type TCells = { status: boolean }[][][];

const initialCells: TCells = Array(3)
  .fill(0)
  .map(() =>
    Array(3)
      .fill(0)
      .map(() => Array(9).fill({ status: true }))
  );

function SudokuPuzzle2() {
  /* -------------------------------------------------------------------------- */
  /*                                    State                                   */
  /* -------------------------------------------------------------------------- */

  const [table, setTable] = useState<TTable>(initialTable);
  const [cells, setCells] = useState<TCells>(initialCells);

  // console.log("table", table);

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  function handleShowError({
    oldValue,
    newValue,
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
  }) {
    const tempCells = cells;
    tempCells[oldValue.rowIndex][oldValue.columnIndex][
      oldValue.innerCellIndex
    ] = {
      status: false,
    };
    tempCells[newValue.indexRow][newValue.indexColumn][
      newValue.indexInnerCell
    ] = {
      status: false,
    };

    setCells(tempCells);
  }

  function setValueToTableCells(
    rowIndex: number,
    columnIndex: number,
    innerCellIndex: number,
    value: string
  ) {
    if (!value) return;

    // console.log("handleOnChange", rowIndex, columnIndex, innerCellIndex, value);

    const tempTable = [...table];

    // To find wrong number in inner cells
    tempTable.forEach((row, indexRow) => {
      if (indexRow !== rowIndex) return;

      row.forEach((column, indexColumn) => {
        if (indexColumn !== columnIndex) return;

        column.forEach((innerCell, indexInnerCell) => {
          if (innerCell === value && value !== "0") {
            handleShowError({
              oldValue: { columnIndex, innerCellIndex, rowIndex },
              newValue: { indexColumn, indexInnerCell, indexRow },
            });
          }
        });
      });
    });

    // To find wrong number in columns
    tempTable.forEach((row, indexRow) => {
      row.forEach((column, indexColumn) => {
        if (indexColumn !== columnIndex) return;

        column.forEach((innerCell, indexInnerCell) => {
          if (
            innerCellIndex % 3 === indexInnerCell % 3 &&
            innerCell === value
          ) {
            handleShowError({
              oldValue: { columnIndex, innerCellIndex, rowIndex },
              newValue: { indexColumn, indexInnerCell, indexRow },
            });
          }
        });
      });
    });

    // To find wrong number in rows
    tempTable.forEach((row, indexRow) => {
      if (indexRow !== rowIndex) return;

      row.forEach((column, indexColumn) => {
        column.forEach((innerCell, indexInnerCell) => {
          if (innerCell === value) {
            if (innerCellIndex < 3 && indexInnerCell < 3) {
              handleShowError({
                oldValue: { columnIndex, innerCellIndex, rowIndex },
                newValue: { indexColumn, indexInnerCell, indexRow },
              });
            }

            if (
              innerCellIndex < 6 &&
              indexInnerCell < 6 &&
              innerCellIndex >= 3 &&
              indexInnerCell >= 3
            ) {
              handleShowError({
                oldValue: { columnIndex, innerCellIndex, rowIndex },
                newValue: { indexColumn, indexInnerCell, indexRow },
              });
            }

            if (innerCellIndex >= 6 && indexInnerCell >= 6) {
              handleShowError({
                oldValue: { columnIndex, innerCellIndex, rowIndex },
                newValue: { indexColumn, indexInnerCell, indexRow },
              });
            }
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
      {cells.map((row, index1) =>
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
