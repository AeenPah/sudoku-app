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

  const [squareGroup1, setSquareGroup1] =
    useState<TSquareGroup>(initialSquareGroup);

  const [inputValue1, setInputValue1] =
    useState<TInputValue>(initialInputValue);
  const [inputValue2, setInputValue2] =
    useState<TInputValue>(initialInputValue);
  const [inputValue3, setInputValue3] =
    useState<TInputValue>(initialInputValue);
  const [inputValue4, setInputValue4] =
    useState<TInputValue>(initialInputValue);
  const [inputValue5, setInputValue5] =
    useState<TInputValue>(initialInputValue);
  const [inputValue6, setInputValue6] =
    useState<TInputValue>(initialInputValue);
  const [inputValue7, setInputValue7] =
    useState<TInputValue>(initialInputValue);
  const [inputValue8, setInputValue8] =
    useState<TInputValue>(initialInputValue);
  const [inputValue9, setInputValue9] =
    useState<TInputValue>(initialInputValue);

  /* -------------------------------------------------------------------------- */
  /*                                  Function                                  */
  /* -------------------------------------------------------------------------- */

  function handleAddNumber(
    value: string,
    inputId: number,
    inputGroupId: number
  ) {
    console.log("inputGroupId", inputGroupId);

    let setInputValueFunction;

    // Set input state to function.
    switch (inputId) {
      case 1:
        setInputValueFunction = setInputValue1;
        break;
      case 2:
        setInputValueFunction = setInputValue2;
        break;
      case 3:
        setInputValueFunction = setInputValue3;
        break;
      case 4:
        setInputValueFunction = setInputValue4;
        break;
      case 5:
        setInputValueFunction = setInputValue5;
        break;
      case 6:
        setInputValueFunction = setInputValue6;
        break;
      case 7:
        setInputValueFunction = setInputValue7;
        break;
      case 8:
        setInputValueFunction = setInputValue8;
        break;
      case 9:
        setInputValueFunction = setInputValue9;
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

    switch (value) {
      case "1":
        if (!squareGroup1.one) setSquareGroup1({ ...squareGroup1, one: true });
        else setInputValueFunction({ ...inputValue1, isWrongAnswer: true });
        break;
      case "2":
        if (!squareGroup1.two) setSquareGroup1({ ...squareGroup1, two: true });
        else setInputValueFunction({ ...inputValue1, isWrongAnswer: true });
        break;
      case "3":
        if (!squareGroup1.three)
          setSquareGroup1({ ...squareGroup1, three: true });
        else setInputValueFunction({ ...inputValue1, isWrongAnswer: true });
        break;
      case "4":
        if (!squareGroup1.four)
          setSquareGroup1({ ...squareGroup1, four: true });
        else setInputValueFunction({ ...inputValue1, isWrongAnswer: true });
        break;
      case "5":
        if (!squareGroup1.five)
          setSquareGroup1({ ...squareGroup1, five: true });
        else setInputValueFunction({ ...inputValue1, isWrongAnswer: true });
        break;
      case "6":
        if (!squareGroup1.six) setSquareGroup1({ ...squareGroup1, six: true });
        else setInputValueFunction({ ...inputValue1, isWrongAnswer: true });
        break;
      case "7":
        if (!squareGroup1.seven)
          setSquareGroup1({ ...squareGroup1, seven: true });
        else setInputValueFunction({ ...inputValue1, isWrongAnswer: true });
        break;
      case "8":
        if (!squareGroup1.eight)
          setSquareGroup1({ ...squareGroup1, eight: true });
        else setInputValueFunction({ ...inputValue1, isWrongAnswer: true });
        break;
      case "9":
        if (!squareGroup1.nine)
          setSquareGroup1({ ...squareGroup1, nine: true });
        else setInputValueFunction({ ...inputValue1, isWrongAnswer: true });
        break;
    }
  }

  //TODO: Delete this later.
  useEffect(() => {
    console.log("squareList1", squareGroup1);
  }, [squareGroup1]);

  return (
    <Grid container width="320px" boxSizing="border-box">
      <Grid item xs={4} border="1px solid black">
        <input
          className={inputValue1.isWrongAnswer ? "wrong-answer" : ""}
          disabled={inputValue1.value !== ""}
          onChange={(e) => handleAddNumber(e.target.value, 1, 1)}
          type="number"
        />
        <input
          disabled={inputValue2.value !== ""}
          className={inputValue2.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 2, 1)}
          type="number"
        />
        <input
          disabled={inputValue3.value !== ""}
          className={inputValue3.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 3, 1)}
          type="number"
        />
        <input
          disabled={inputValue4.value !== ""}
          className={inputValue4.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 4, 1)}
          type="number"
        />
        <input
          disabled={inputValue5.value !== ""}
          className={inputValue5.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 5, 1)}
          type="number"
        />
        <input
          disabled={inputValue6.value !== ""}
          className={inputValue6.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 6, 1)}
          type="number"
        />
        <input
          disabled={inputValue7.value !== ""}
          className={inputValue7.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 7, 1)}
          type="number"
        />
        <input
          disabled={inputValue8.value !== ""}
          className={inputValue8.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 8, 1)}
          type="number"
        />
        <input
          disabled={inputValue9.value !== ""}
          className={inputValue9.isWrongAnswer ? "wrong-answer" : ""}
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
