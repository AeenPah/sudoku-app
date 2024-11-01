import { TCellStatus, TNumberGrid } from "./SudokuPuzzle.type";

/* -------------------------------------------------------------------------- */
/*                                  Initials                                  */
/* -------------------------------------------------------------------------- */

export const initialNumberGrid: TNumberGrid = Array(3)
  .fill(0)
  .map(() =>
    Array(3)
      .fill(0)
      .map(() => Array(9).fill(""))
  );

export const initialCellStatus: TCellStatus = Array(3)
  .fill(0)
  .map(() =>
    Array(3)
      .fill(0)
      .map(() => Array(9).fill({ status: true }))
  );

/* -------------------------------------------------------------------------- */
/*                                    Rules                                   */
/* -------------------------------------------------------------------------- */

const sameBox = (
  row: number,
  column: number,
  _cell: number,
  rowIndex: number,
  columnIndex: number,
  _cellIndex: number
) => row === rowIndex && column === columnIndex;
const sameColumn = (
  _row: number,
  column: number,
  cell: number,
  _rowIndex: number,
  columnIndex: number,
  cellIndex: number
) => column === columnIndex && cell % 3 === cellIndex % 3;
const sameRow = (
  row: number,
  _column: number,
  cell: number,
  rowIndex: number,
  _columnIndex: number,
  cellIndex: number
) =>
  row === rowIndex &&
  ((cell < 3 && cellIndex < 3) ||
    (cell >= 3 && cell < 6 && cellIndex >= 3 && cellIndex < 6) ||
    (cell >= 6 && cellIndex >= 6));

export const validationRules = [
  {
    checkFn: sameBox,
    name: "Box",
  },
  {
    checkFn: sameColumn,
    name: "Column",
  },
  {
    checkFn: sameRow,
    name: "Row",
  },
];
