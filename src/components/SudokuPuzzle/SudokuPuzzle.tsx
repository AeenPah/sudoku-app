"use client";

import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import "./style.css";

/* -------------------------------------------------------------------------- */
/*                                    Type                                    */
/* -------------------------------------------------------------------------- */

type TSquareGroup = {
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

type TInputValue = {
  value: string;
  isWrongAnswer?: boolean;
};

/* -------------------------------------------------------------------------- */
/*                                Initial Data                                */
/* -------------------------------------------------------------------------- */

const initialSquareGroup: TSquareGroup = {
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

const initialInputValue: TInputValue = {
  value: "",
};

function SudokuPuzzle() {
  /* -------------------------------------------------------------------------- */
  /*                                    State                                   */
  /* -------------------------------------------------------------------------- */

  /* ------------------------------ Square Group ------------------------------ */
  const [squareGroup1, setSquareGroup1] =
    useState<TSquareGroup>(initialSquareGroup);
  const [squareGroup2, setSquareGroup2] =
    useState<TSquareGroup>(initialSquareGroup);
  const [squareGroup3, setSquareGroup3] =
    useState<TSquareGroup>(initialSquareGroup);
  const [squareGroup4, setSquareGroup4] =
    useState<TSquareGroup>(initialSquareGroup);
  const [squareGroup5, setSquareGroup5] =
    useState<TSquareGroup>(initialSquareGroup);
  const [squareGroup6, setSquareGroup6] =
    useState<TSquareGroup>(initialSquareGroup);
  const [squareGroup7, setSquareGroup7] =
    useState<TSquareGroup>(initialSquareGroup);
  const [squareGroup8, setSquareGroup8] =
    useState<TSquareGroup>(initialSquareGroup);
  const [squareGroup9, setSquareGroup9] =
    useState<TSquareGroup>(initialSquareGroup);

  /* ------------------------------ Input Value ------------------------------ */
  const [inputValue11, setInputValue11] =
    useState<TInputValue>(initialInputValue);
  const [inputValue12, setInputValue12] =
    useState<TInputValue>(initialInputValue);
  const [inputValue13, setInputValue13] =
    useState<TInputValue>(initialInputValue);
  const [inputValue14, setInputValue14] =
    useState<TInputValue>(initialInputValue);
  const [inputValue15, setInputValue15] =
    useState<TInputValue>(initialInputValue);
  const [inputValue16, setInputValue16] =
    useState<TInputValue>(initialInputValue);
  const [inputValue17, setInputValue17] =
    useState<TInputValue>(initialInputValue);
  const [inputValue18, setInputValue18] =
    useState<TInputValue>(initialInputValue);
  const [inputValue19, setInputValue19] =
    useState<TInputValue>(initialInputValue);

  /* -------------------------------------------------------------------------- */
  /*                                  Function                                  */
  /* -------------------------------------------------------------------------- */

  function handleAddNumber(
    value: string,
    inputId: number,
    inputGroupId: number
  ) {
    let setInputValueFunction;

    // Set input state to function.
    switch (inputId) {
      case 1:
        setInputValueFunction = setInputValue11;
        break;
      case 2:
        setInputValueFunction = setInputValue12;
        break;
      case 3:
        setInputValueFunction = setInputValue13;
        break;
      case 4:
        setInputValueFunction = setInputValue14;
        break;
      case 5:
        setInputValueFunction = setInputValue15;
        break;
      case 6:
        setInputValueFunction = setInputValue16;
        break;
      case 7:
        setInputValueFunction = setInputValue17;
        break;
      case 8:
        setInputValueFunction = setInputValue18;
        break;
      case 9:
        setInputValueFunction = setInputValue19;
        break;
      default:
        // TODO: Change this
        setInputValueFunction = () => {};
        break;
    }

    setInputValueFunction({
      value: value,
      // isWrongAnswer: true,
    });

    let setSquareGroupFunction;
    let squareGroupObject: TSquareGroup;

    switch (inputGroupId) {
      case 1:
        setSquareGroupFunction = setSquareGroup1;
        squareGroupObject = squareGroup1;
        break;
      case 2:
        setSquareGroupFunction = setSquareGroup2;
        squareGroupObject = squareGroup2;
        break;
      case 3:
        setSquareGroupFunction = setSquareGroup3;
        squareGroupObject = squareGroup3;
        break;
      case 4:
        setSquareGroupFunction = setSquareGroup4;
        squareGroupObject = squareGroup4;
        break;
      case 5:
        setSquareGroupFunction = setSquareGroup5;
        squareGroupObject = squareGroup5;
        break;
      case 6:
        setSquareGroupFunction = setSquareGroup6;
        squareGroupObject = squareGroup6;
        break;
      case 7:
        setSquareGroupFunction = setSquareGroup7;
        squareGroupObject = squareGroup7;
        break;
      case 8:
        setSquareGroupFunction = setSquareGroup8;
        squareGroupObject = squareGroup8;
        break;
      case 9:
        setSquareGroupFunction = setSquareGroup9;
        squareGroupObject = squareGroup9;
        break;
      default:
        // TODO: Change this
        setSquareGroupFunction = () => {};
        squareGroupObject = initialSquareGroup;
        break;
    }

    switch (value) {
      case "1":
        if (!squareGroup1.one)
          setSquareGroupFunction({ ...squareGroupObject, one: true });
        else setInputValueFunction({ ...inputValue11, isWrongAnswer: true });
        break;
      case "2":
        if (!squareGroup1.two)
          setSquareGroupFunction({ ...squareGroupObject, two: true });
        else setInputValueFunction({ ...inputValue11, isWrongAnswer: true });
        break;
      case "3":
        if (!squareGroup1.three)
          setSquareGroupFunction({ ...squareGroupObject, three: true });
        else setInputValueFunction({ ...inputValue11, isWrongAnswer: true });
        break;
      case "4":
        if (!squareGroup1.four)
          setSquareGroupFunction({ ...squareGroupObject, four: true });
        else setInputValueFunction({ ...inputValue11, isWrongAnswer: true });
        break;
      case "5":
        if (!squareGroup1.five)
          setSquareGroupFunction({ ...squareGroupObject, five: true });
        else setInputValueFunction({ ...inputValue11, isWrongAnswer: true });
        break;
      case "6":
        if (!squareGroup1.six)
          setSquareGroupFunction({ ...squareGroupObject, six: true });
        else setInputValueFunction({ ...inputValue11, isWrongAnswer: true });
        break;
      case "7":
        if (!squareGroup1.seven)
          setSquareGroupFunction({ ...squareGroupObject, seven: true });
        else setInputValueFunction({ ...inputValue11, isWrongAnswer: true });
        break;
      case "8":
        if (!squareGroup1.eight)
          setSquareGroupFunction({ ...squareGroupObject, eight: true });
        else setInputValueFunction({ ...inputValue11, isWrongAnswer: true });
        break;
      case "9":
        if (!squareGroup1.nine)
          setSquareGroupFunction({ ...squareGroupObject, nine: true });
        else setInputValueFunction({ ...inputValue11, isWrongAnswer: true });
        break;
    }
  }

  //TODO: Delete this later.
  useEffect(() => {
    console.log("squareList1", squareGroup1);
  }, [squareGroup1]);

  useEffect(() => {
    console.log("squareList2", squareGroup2);
  }, [squareGroup2]);

  return (
    <Grid container width="320px" boxSizing="border-box">
      <Grid item xs={4} border="1px solid black">
        <input
          className={inputValue11.isWrongAnswer ? "wrong-answer" : ""}
          disabled={inputValue11.value !== ""}
          onChange={(e) => handleAddNumber(e.target.value, 1, 1)}
          type="number"
        />
        <input
          disabled={inputValue12.value !== ""}
          className={inputValue12.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 2, 1)}
          type="number"
        />
        <input
          disabled={inputValue13.value !== ""}
          className={inputValue13.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 3, 1)}
          type="number"
        />
        <input
          disabled={inputValue14.value !== ""}
          className={inputValue14.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 4, 1)}
          type="number"
        />
        <input
          disabled={inputValue15.value !== ""}
          className={inputValue15.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 5, 1)}
          type="number"
        />
        <input
          disabled={inputValue16.value !== ""}
          className={inputValue16.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 6, 1)}
          type="number"
        />
        <input
          disabled={inputValue17.value !== ""}
          className={inputValue17.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 7, 1)}
          type="number"
        />
        <input
          disabled={inputValue18.value !== ""}
          className={inputValue18.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 8, 1)}
          type="number"
        />
        <input
          disabled={inputValue19.value !== ""}
          className={inputValue19.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 9, 1)}
          type="number"
        />
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
