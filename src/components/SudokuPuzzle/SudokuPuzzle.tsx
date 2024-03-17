"use client";

import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import "./style.css";

/* -------------------------------------------------------------------------- */
/*                                    Type                                    */
/* -------------------------------------------------------------------------- */

type TSquareList = {
  one: boolean;
  two: boolean;
  three: boolean;
  four: boolean;
  five: boolean;
  six: boolean;
  seven: boolean;
  eight: boolean;
  nine: boolean;
};

/* -------------------------------------------------------------------------- */
/*                                Initial Data                                */
/* -------------------------------------------------------------------------- */

const initialSquareList: TSquareList = {
  one: false,
  two: false,
  three: false,
  four: false,
  five: false,
  six: false,
  seven: false,
  eight: false,
  nine: false,
};

function SudokuPuzzle() {
  /* -------------------------------------------------------------------------- */
  /*                                    State                                   */
  /* -------------------------------------------------------------------------- */

  const [squareList1, setSquareList1] =
    useState<TSquareList>(initialSquareList);

  /* -------------------------------------------------------------------------- */
  /*                                  Function                                  */
  /* -------------------------------------------------------------------------- */

  function handleOnClick(value: string, inputId: number) {
    console.log("inputId", inputId);

    switch (value) {
      case "1":
        setSquareList1({ ...squareList1, one: true });
        break;
      case "2":
        setSquareList1({ ...squareList1, two: true });
        break;
      case "3":
        setSquareList1({ ...squareList1, three: true });
        break;
      case "4":
        setSquareList1({ ...squareList1, four: true });
        break;
      case "5":
        setSquareList1({ ...squareList1, five: true });
        break;
      case "6":
        setSquareList1({ ...squareList1, six: true });
        break;
      case "7":
        setSquareList1({ ...squareList1, seven: true });
        break;
      case "8":
        setSquareList1({ ...squareList1, eight: true });
        break;
      case "9":
        setSquareList1({ ...squareList1, nine: true });
        break;
    }
  }

  useEffect(() => {
    console.log("squareList1", squareList1);
  }, [squareList1]);

  return (
    <Grid container width="320px" boxSizing="border-box">
      <Grid item xs={4} border="1px solid black">
        <input
          type="number"
          onChange={(e) => handleOnClick(e.target.value, 1)}
        />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
      </Grid>
      <Grid item xs={4} border="1px solid black">
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
      </Grid>
      <Grid item xs={4} border="1px solid black">
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
      </Grid>
      <Grid item xs={4} border="1px solid black">
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
      </Grid>
      <Grid item xs={4} border="1px solid black">
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
      </Grid>
      <Grid item xs={4} border="1px solid black">
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
      </Grid>
      <Grid item xs={4} border="1px solid black">
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
      </Grid>
      <Grid item xs={4} border="1px solid black">
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
      </Grid>
      <Grid item xs={4} border="1px solid black">
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
      </Grid>
    </Grid>
  );
}

export default SudokuPuzzle;
