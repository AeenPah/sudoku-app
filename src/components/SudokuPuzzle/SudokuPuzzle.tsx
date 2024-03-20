"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Grid } from "@mui/material";

import "./style.css";

/* -------------------------------------------------------------------------- */
/*                                    Type                                    */
/* -------------------------------------------------------------------------- */

type TGroup = {
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

type TSetInputValueMap = {
  [key: number]: { [key: number]: Dispatch<SetStateAction<TInputValue>> };
};

type TSquareGroupMap = {
  [key: number]: {
    setSquareGroupFunction: Dispatch<SetStateAction<TGroup>>;
    squareGroupObject: TGroup;
  };
};

type TRowGroupMap = {
  [key: number]: {
    setRowGroupFunction: Dispatch<SetStateAction<TGroup>>;
    rowGroupObject: TGroup;
  };
};

/* -------------------------------------------------------------------------- */
/*                                Initial Data                                */
/* -------------------------------------------------------------------------- */

const initialGroup: TGroup = {
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
  const [squareGroup1, setSquareGroup1] = useState<TGroup>(initialGroup);
  const [squareGroup2, setSquareGroup2] = useState<TGroup>(initialGroup);
  const [squareGroup3, setSquareGroup3] = useState<TGroup>(initialGroup);
  const [squareGroup4, setSquareGroup4] = useState<TGroup>(initialGroup);
  const [squareGroup5, setSquareGroup5] = useState<TGroup>(initialGroup);
  const [squareGroup6, setSquareGroup6] = useState<TGroup>(initialGroup);
  const [squareGroup7, setSquareGroup7] = useState<TGroup>(initialGroup);
  const [squareGroup8, setSquareGroup8] = useState<TGroup>(initialGroup);
  const [squareGroup9, setSquareGroup9] = useState<TGroup>(initialGroup);

  /* -------------------------------- Row Group ------------------------------- */

  const [rowGroup1, setRowGroup1] = useState<TGroup>(initialGroup);
  const [rowGroup2, setRowGroup2] = useState<TGroup>(initialGroup);
  const [rowGroup3, setRowGroup3] = useState<TGroup>(initialGroup);
  const [rowGroup4, setRowGroup4] = useState<TGroup>(initialGroup);
  const [rowGroup5, setRowGroup5] = useState<TGroup>(initialGroup);
  const [rowGroup6, setRowGroup6] = useState<TGroup>(initialGroup);
  const [rowGroup7, setRowGroup7] = useState<TGroup>(initialGroup);
  const [rowGroup8, setRowGroup8] = useState<TGroup>(initialGroup);
  const [rowGroup9, setRowGroup9] = useState<TGroup>(initialGroup);

  /* ------------------------------ Input Value ------------------------------ */

  /* ------------------------------- Group Input ------------------------------ */
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

  /* ----------------------------- Group 2 inputs ----------------------------- */
  const [inputValue21, setInputValue21] =
    useState<TInputValue>(initialInputValue);
  const [inputValue22, setInputValue22] =
    useState<TInputValue>(initialInputValue);
  const [inputValue23, setInputValue23] =
    useState<TInputValue>(initialInputValue);
  const [inputValue24, setInputValue24] =
    useState<TInputValue>(initialInputValue);
  const [inputValue25, setInputValue25] =
    useState<TInputValue>(initialInputValue);
  const [inputValue26, setInputValue26] =
    useState<TInputValue>(initialInputValue);
  const [inputValue27, setInputValue27] =
    useState<TInputValue>(initialInputValue);
  const [inputValue28, setInputValue28] =
    useState<TInputValue>(initialInputValue);
  const [inputValue29, setInputValue29] =
    useState<TInputValue>(initialInputValue);

  /* ----------------------------- Group 3 inputs ----------------------------- */
  const [inputValue31, setInputValue31] =
    useState<TInputValue>(initialInputValue);
  const [inputValue32, setInputValue32] =
    useState<TInputValue>(initialInputValue);
  const [inputValue33, setInputValue33] =
    useState<TInputValue>(initialInputValue);
  const [inputValue34, setInputValue34] =
    useState<TInputValue>(initialInputValue);
  const [inputValue35, setInputValue35] =
    useState<TInputValue>(initialInputValue);
  const [inputValue36, setInputValue36] =
    useState<TInputValue>(initialInputValue);
  const [inputValue37, setInputValue37] =
    useState<TInputValue>(initialInputValue);
  const [inputValue38, setInputValue38] =
    useState<TInputValue>(initialInputValue);
  const [inputValue39, setInputValue39] =
    useState<TInputValue>(initialInputValue);

  /* -------------------------------------------------------------------------- */
  /*                                    Data                                    */
  /* -------------------------------------------------------------------------- */

  const setInputValueMap: TSetInputValueMap = {
    1: {
      1: setInputValue11,
      2: setInputValue12,
      3: setInputValue13,
      4: setInputValue14,
      5: setInputValue15,
      6: setInputValue16,
      7: setInputValue17,
      8: setInputValue18,
      9: setInputValue19,
    },
    2: {
      1: setInputValue21,
      2: setInputValue22,
      3: setInputValue23,
      4: setInputValue24,
      5: setInputValue25,
      6: setInputValue26,
      7: setInputValue27,
      8: setInputValue28,
      9: setInputValue29,
    },
    3: {
      1: setInputValue31,
      2: setInputValue32,
      3: setInputValue33,
      4: setInputValue34,
      5: setInputValue35,
      6: setInputValue36,
      7: setInputValue37,
      8: setInputValue38,
      9: setInputValue39,
    },
  };

  const squareGroupMap: TSquareGroupMap = {
    1: {
      setSquareGroupFunction: setSquareGroup1,
      squareGroupObject: squareGroup1,
    },
    2: {
      setSquareGroupFunction: setSquareGroup2,
      squareGroupObject: squareGroup2,
    },
    3: {
      setSquareGroupFunction: setSquareGroup3,
      squareGroupObject: squareGroup3,
    },
    4: {
      setSquareGroupFunction: setSquareGroup4,
      squareGroupObject: squareGroup4,
    },
    5: {
      setSquareGroupFunction: setSquareGroup5,
      squareGroupObject: squareGroup5,
    },
    6: {
      setSquareGroupFunction: setSquareGroup6,
      squareGroupObject: squareGroup6,
    },
    7: {
      setSquareGroupFunction: setSquareGroup7,
      squareGroupObject: squareGroup7,
    },
    8: {
      setSquareGroupFunction: setSquareGroup8,
      squareGroupObject: squareGroup8,
    },
    9: {
      setSquareGroupFunction: setSquareGroup9,
      squareGroupObject: squareGroup9,
    },
  };

  const rowGroupMap: TRowGroupMap = {
    1: {
      rowGroupObject: rowGroup1,
      setRowGroupFunction: setRowGroup1,
    },
    2: {
      rowGroupObject: rowGroup2,
      setRowGroupFunction: setRowGroup2,
    },
    3: {
      rowGroupObject: rowGroup3,
      setRowGroupFunction: setRowGroup3,
    },
    4: {
      rowGroupObject: rowGroup4,
      setRowGroupFunction: setRowGroup4,
    },
    5: {
      rowGroupObject: rowGroup5,
      setRowGroupFunction: setRowGroup5,
    },
    6: {
      rowGroupObject: rowGroup6,
      setRowGroupFunction: setRowGroup6,
    },
    7: {
      rowGroupObject: rowGroup7,
      setRowGroupFunction: setRowGroup7,
    },
    8: {
      rowGroupObject: rowGroup8,
      setRowGroupFunction: setRowGroup8,
    },
    9: {
      rowGroupObject: rowGroup9,
      setRowGroupFunction: setRowGroup9,
    },
  };

  /* -------------------------------------------------------------------------- */
  /*                                  Function                                  */
  /* -------------------------------------------------------------------------- */

  function handleAddNumber(
    value: string,
    inputId: number,
    squareGroupId: number,
    rowGroupId: number
  ) {
    const setInputValueFunction = setInputValueMap[squareGroupId][inputId];

    setInputValueFunction({
      value: value,
    });

    const squareGroupObject = squareGroupMap[squareGroupId].squareGroupObject;
    const setSquareGroupFunction =
      squareGroupMap[squareGroupId].setSquareGroupFunction;

    // FIXME: fix it.
    const rowGroupObject = rowGroupMap[rowGroupId].rowGroupObject;
    const setRowGroupFunction = rowGroupMap[rowGroupId].setRowGroupFunction;

    switch (value) {
      case "1":
        if (!squareGroupObject.one && !rowGroupObject.one) {
          setSquareGroupFunction({ ...squareGroupObject, one: true });
          setRowGroupFunction({ ...rowGroupObject, one: true });
        } else setInputValueFunction({ value: value, isWrongAnswer: true });
        break;
      case "2":
        if (!squareGroupObject.two && !rowGroupObject.two) {
          setSquareGroupFunction({ ...squareGroupObject, two: true });
          setRowGroupFunction({ ...rowGroupObject, two: true });
        } else setInputValueFunction({ value: value, isWrongAnswer: true });
        break;
      case "3":
        if (!squareGroupObject.three && !rowGroupObject.three) {
          setSquareGroupFunction({ ...squareGroupObject, three: true });
          setRowGroupFunction({ ...rowGroupObject, three: true });
        } else setInputValueFunction({ value: value, isWrongAnswer: true });
        break;
      case "4":
        if (!squareGroupObject.four && !rowGroupObject.four) {
          setSquareGroupFunction({ ...squareGroupObject, four: true });
          setRowGroupFunction({ ...rowGroupObject, four: true });
        } else setInputValueFunction({ value: value, isWrongAnswer: true });
        break;
      case "5":
        if (!squareGroupObject.five && !rowGroupObject.five) {
          setSquareGroupFunction({ ...squareGroupObject, five: true });
          setRowGroupFunction({ ...rowGroupObject, five: true });
        } else setInputValueFunction({ value: value, isWrongAnswer: true });
        break;
      case "6":
        if (!squareGroupObject.six && !rowGroupObject.six) {
          setSquareGroupFunction({ ...squareGroupObject, six: true });
          setRowGroupFunction({ ...rowGroupObject, six: true });
        } else setInputValueFunction({ value: value, isWrongAnswer: true });
        break;
      case "7":
        if (!squareGroupObject.seven && !rowGroupObject.seven) {
          setSquareGroupFunction({ ...squareGroupObject, seven: true });
          setRowGroupFunction({ ...rowGroupObject, seven: true });
        } else setInputValueFunction({ value: value, isWrongAnswer: true });
        break;
      case "8":
        if (!squareGroupObject.eight && !rowGroupObject.eight) {
          setSquareGroupFunction({ ...squareGroupObject, eight: true });
          setRowGroupFunction({ ...rowGroupObject, eight: true });
        } else setInputValueFunction({ value: value, isWrongAnswer: true });
        break;
      case "9":
        if (!squareGroupObject.nine && !rowGroupObject.nine) {
          setSquareGroupFunction({ ...squareGroupObject, nine: true });
          setRowGroupFunction({ ...rowGroupObject, nine: true });
        } else setInputValueFunction({ value: value, isWrongAnswer: true });
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

  useEffect(() => {
    console.log("squareList3", squareGroup3);
  }, [squareGroup3]);

  useEffect(() => {
    console.log("rowGroup1", rowGroup1);
  }, [rowGroup1]);

  return (
    <Grid container width="320px" boxSizing="border-box">
      {/* Square Group 1 */}
      <Grid item xs={4} border="1px solid black">
        <input
          className={inputValue11.isWrongAnswer ? "wrong-answer" : ""}
          disabled={inputValue11.value !== ""}
          onChange={(e) => handleAddNumber(e.target.value, 1, 1, 1)}
          type="number"
        />
        <input
          disabled={inputValue12.value !== ""}
          className={inputValue12.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 2, 1, 1)}
          type="number"
        />
        <input
          disabled={inputValue13.value !== ""}
          className={inputValue13.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 3, 1, 1)}
          type="number"
        />
        <input
          disabled={inputValue14.value !== ""}
          className={inputValue14.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 4, 1, 2)}
          type="number"
        />
        <input
          disabled={inputValue15.value !== ""}
          className={inputValue15.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 5, 1, 2)}
          type="number"
        />
        <input
          disabled={inputValue16.value !== ""}
          className={inputValue16.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 6, 1, 2)}
          type="number"
        />
        <input
          disabled={inputValue17.value !== ""}
          className={inputValue17.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 7, 1, 3)}
          type="number"
        />
        <input
          disabled={inputValue18.value !== ""}
          className={inputValue18.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 8, 1, 3)}
          type="number"
        />
        <input
          disabled={inputValue19.value !== ""}
          className={inputValue19.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 9, 1, 3)}
          type="number"
        />
      </Grid>
      {/* Square Group 2 */}
      <Grid item xs={4} border="1px solid black">
        <input
          disabled={inputValue21.value !== ""}
          className={inputValue21.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 1, 2, 1)}
          type="number"
        />
        <input
          disabled={inputValue22.value !== ""}
          className={inputValue22.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 2, 2, 1)}
          type="number"
        />
        <input
          disabled={inputValue23.value !== ""}
          className={inputValue23.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 3, 2, 1)}
          type="number"
        />
        <input
          disabled={inputValue24.value !== ""}
          className={inputValue24.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 4, 2, 2)}
          type="number"
        />
        <input
          disabled={inputValue25.value !== ""}
          className={inputValue25.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 5, 2, 2)}
          type="number"
        />
        <input
          disabled={inputValue26.value !== ""}
          className={inputValue26.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 6, 2, 2)}
          type="number"
        />
        <input
          disabled={inputValue27.value !== ""}
          className={inputValue27.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 7, 2, 3)}
          type="number"
        />
        <input
          disabled={inputValue28.value !== ""}
          className={inputValue28.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 8, 2, 3)}
          type="number"
        />
        <input
          disabled={inputValue29.value !== ""}
          className={inputValue29.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 9, 2, 3)}
          type="number"
        />
      </Grid>
      {/* Square Group 3 */}
      <Grid item xs={4} border="1px solid black">
        <input
          disabled={inputValue31.value !== ""}
          className={inputValue31.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 1, 3, 1)}
          type="number"
        />
        <input
          disabled={inputValue32.value !== ""}
          className={inputValue32.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 2, 3, 1)}
          type="number"
        />
        <input
          disabled={inputValue33.value !== ""}
          className={inputValue33.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 3, 3, 1)}
          type="number"
        />
        <input
          disabled={inputValue34.value !== ""}
          className={inputValue34.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 4, 3, 2)}
          type="number"
        />
        <input
          disabled={inputValue35.value !== ""}
          className={inputValue35.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 5, 3, 2)}
          type="number"
        />
        <input
          disabled={inputValue36.value !== ""}
          className={inputValue36.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 6, 3, 2)}
          type="number"
        />
        <input
          disabled={inputValue37.value !== ""}
          className={inputValue37.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 7, 3, 3)}
          type="number"
        />
        <input
          disabled={inputValue38.value !== ""}
          className={inputValue38.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 8, 3, 3)}
          type="number"
        />
        <input
          disabled={inputValue39.value !== ""}
          className={inputValue39.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 9, 3, 3)}
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
    </Grid>
  );
}

export default SudokuPuzzle;
