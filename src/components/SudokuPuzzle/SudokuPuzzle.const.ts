import { TCellStatus, TNumberGrid } from "./SudokuPuzzle.type";

export const initialNumberGrid: TNumberGrid = Array(3)
  .fill(0)
  .map(() =>
    Array(3)
      .fill(0)
      .map(() => Array(9).fill("0"))
  );

export const initialCellStatus: TCellStatus = Array(3)
  .fill(0)
  .map(() =>
    Array(3)
      .fill(0)
      .map(() => Array(9).fill({ status: true }))
  );
