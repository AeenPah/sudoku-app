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

/* ------------------------------- Group Type ------------------------------- */

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

type TColGroupMap = {
  [key: number]: {
    setColGroupFunction: Dispatch<SetStateAction<TGroup>>;
    colGroupObject: TGroup;
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

  /* ------------------------------ Column Group ------------------------------ */
  const [colGroup1, setColGroup1] = useState<TGroup>(initialGroup);
  const [colGroup2, setColGroup2] = useState<TGroup>(initialGroup);
  const [colGroup3, setColGroup3] = useState<TGroup>(initialGroup);
  const [colGroup4, setColGroup4] = useState<TGroup>(initialGroup);
  const [colGroup5, setColGroup5] = useState<TGroup>(initialGroup);
  const [colGroup6, setColGroup6] = useState<TGroup>(initialGroup);
  const [colGroup7, setColGroup7] = useState<TGroup>(initialGroup);
  const [colGroup8, setColGroup8] = useState<TGroup>(initialGroup);
  const [colGroup9, setColGroup9] = useState<TGroup>(initialGroup);

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

  /* ----------------------------- Group 4 inputs ----------------------------- */
  const [inputValue41, setInputValue41] =
    useState<TInputValue>(initialInputValue);
  const [inputValue42, setInputValue42] =
    useState<TInputValue>(initialInputValue);
  const [inputValue43, setInputValue43] =
    useState<TInputValue>(initialInputValue);
  const [inputValue44, setInputValue44] =
    useState<TInputValue>(initialInputValue);
  const [inputValue45, setInputValue45] =
    useState<TInputValue>(initialInputValue);
  const [inputValue46, setInputValue46] =
    useState<TInputValue>(initialInputValue);
  const [inputValue47, setInputValue47] =
    useState<TInputValue>(initialInputValue);
  const [inputValue48, setInputValue48] =
    useState<TInputValue>(initialInputValue);
  const [inputValue49, setInputValue49] =
    useState<TInputValue>(initialInputValue);

  /* ----------------------------- Group 5 inputs ----------------------------- */
  const [inputValue51, setInputValue51] =
    useState<TInputValue>(initialInputValue);
  const [inputValue52, setInputValue52] =
    useState<TInputValue>(initialInputValue);
  const [inputValue53, setInputValue53] =
    useState<TInputValue>(initialInputValue);
  const [inputValue54, setInputValue54] =
    useState<TInputValue>(initialInputValue);
  const [inputValue55, setInputValue55] =
    useState<TInputValue>(initialInputValue);
  const [inputValue56, setInputValue56] =
    useState<TInputValue>(initialInputValue);
  const [inputValue57, setInputValue57] =
    useState<TInputValue>(initialInputValue);
  const [inputValue58, setInputValue58] =
    useState<TInputValue>(initialInputValue);
  const [inputValue59, setInputValue59] =
    useState<TInputValue>(initialInputValue);

  /* ----------------------------- Group 6 inputs ----------------------------- */
  const [inputValue61, setInputValue61] =
    useState<TInputValue>(initialInputValue);
  const [inputValue62, setInputValue62] =
    useState<TInputValue>(initialInputValue);
  const [inputValue63, setInputValue63] =
    useState<TInputValue>(initialInputValue);
  const [inputValue64, setInputValue64] =
    useState<TInputValue>(initialInputValue);
  const [inputValue65, setInputValue65] =
    useState<TInputValue>(initialInputValue);
  const [inputValue66, setInputValue66] =
    useState<TInputValue>(initialInputValue);
  const [inputValue67, setInputValue67] =
    useState<TInputValue>(initialInputValue);
  const [inputValue68, setInputValue68] =
    useState<TInputValue>(initialInputValue);
  const [inputValue69, setInputValue69] =
    useState<TInputValue>(initialInputValue);

  /* ----------------------------- Group 7 inputs ----------------------------- */
  const [inputValue71, setInputValue71] =
    useState<TInputValue>(initialInputValue);
  const [inputValue72, setInputValue72] =
    useState<TInputValue>(initialInputValue);
  const [inputValue73, setInputValue73] =
    useState<TInputValue>(initialInputValue);
  const [inputValue74, setInputValue74] =
    useState<TInputValue>(initialInputValue);
  const [inputValue75, setInputValue75] =
    useState<TInputValue>(initialInputValue);
  const [inputValue76, setInputValue76] =
    useState<TInputValue>(initialInputValue);
  const [inputValue77, setInputValue77] =
    useState<TInputValue>(initialInputValue);
  const [inputValue78, setInputValue78] =
    useState<TInputValue>(initialInputValue);
  const [inputValue79, setInputValue79] =
    useState<TInputValue>(initialInputValue);

  /* ----------------------------- Group 8 inputs ----------------------------- */
  const [inputValue81, setInputValue81] =
    useState<TInputValue>(initialInputValue);
  const [inputValue82, setInputValue82] =
    useState<TInputValue>(initialInputValue);
  const [inputValue83, setInputValue83] =
    useState<TInputValue>(initialInputValue);
  const [inputValue84, setInputValue84] =
    useState<TInputValue>(initialInputValue);
  const [inputValue85, setInputValue85] =
    useState<TInputValue>(initialInputValue);
  const [inputValue86, setInputValue86] =
    useState<TInputValue>(initialInputValue);
  const [inputValue87, setInputValue87] =
    useState<TInputValue>(initialInputValue);
  const [inputValue88, setInputValue88] =
    useState<TInputValue>(initialInputValue);
  const [inputValue89, setInputValue89] =
    useState<TInputValue>(initialInputValue);

  /* ----------------------------- Group 9 inputs ----------------------------- */
  const [inputValue91, setInputValue91] =
    useState<TInputValue>(initialInputValue);
  const [inputValue92, setInputValue92] =
    useState<TInputValue>(initialInputValue);
  const [inputValue93, setInputValue93] =
    useState<TInputValue>(initialInputValue);
  const [inputValue94, setInputValue94] =
    useState<TInputValue>(initialInputValue);
  const [inputValue95, setInputValue95] =
    useState<TInputValue>(initialInputValue);
  const [inputValue96, setInputValue96] =
    useState<TInputValue>(initialInputValue);
  const [inputValue97, setInputValue97] =
    useState<TInputValue>(initialInputValue);
  const [inputValue98, setInputValue98] =
    useState<TInputValue>(initialInputValue);
  const [inputValue99, setInputValue99] =
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
    4: {
      1: setInputValue41,
      2: setInputValue42,
      3: setInputValue43,
      4: setInputValue44,
      5: setInputValue45,
      6: setInputValue46,
      7: setInputValue47,
      8: setInputValue48,
      9: setInputValue49,
    },
    5: {
      1: setInputValue51,
      2: setInputValue52,
      3: setInputValue53,
      4: setInputValue54,
      5: setInputValue55,
      6: setInputValue56,
      7: setInputValue57,
      8: setInputValue58,
      9: setInputValue59,
    },
    6: {
      1: setInputValue61,
      2: setInputValue62,
      3: setInputValue63,
      4: setInputValue64,
      5: setInputValue65,
      6: setInputValue66,
      7: setInputValue67,
      8: setInputValue68,
      9: setInputValue69,
    },
    7: {
      1: setInputValue71,
      2: setInputValue72,
      3: setInputValue73,
      4: setInputValue74,
      5: setInputValue75,
      6: setInputValue76,
      7: setInputValue77,
      8: setInputValue78,
      9: setInputValue79,
    },
    8: {
      1: setInputValue81,
      2: setInputValue82,
      3: setInputValue83,
      4: setInputValue84,
      5: setInputValue85,
      6: setInputValue86,
      7: setInputValue87,
      8: setInputValue88,
      9: setInputValue89,
    },
    9: {
      1: setInputValue91,
      2: setInputValue92,
      3: setInputValue93,
      4: setInputValue94,
      5: setInputValue95,
      6: setInputValue96,
      7: setInputValue97,
      8: setInputValue98,
      9: setInputValue99,
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

  const colGroupMap: TColGroupMap = {
    1: {
      colGroupObject: colGroup1,
      setColGroupFunction: setColGroup1,
    },
    2: {
      colGroupObject: colGroup2,
      setColGroupFunction: setColGroup2,
    },
    3: {
      colGroupObject: colGroup3,
      setColGroupFunction: setColGroup3,
    },
    4: {
      colGroupObject: colGroup4,
      setColGroupFunction: setColGroup4,
    },
    5: {
      colGroupObject: colGroup5,
      setColGroupFunction: setColGroup5,
    },
    6: {
      colGroupObject: colGroup6,
      setColGroupFunction: setColGroup6,
    },
    7: {
      colGroupObject: colGroup7,
      setColGroupFunction: setColGroup7,
    },
    8: {
      colGroupObject: colGroup8,
      setColGroupFunction: setColGroup8,
    },
    9: {
      colGroupObject: colGroup9,
      setColGroupFunction: setColGroup9,
    },
  };

  /* -------------------------------------------------------------------------- */
  /*                                  Function                                  */
  /* -------------------------------------------------------------------------- */

  function handleAddNumber(
    value: string,
    inputId: number,
    squareGroupId: number,
    rowGroupId: number,
    colGroupId: number
  ) {
    // Set data from map object.
    const setInputValueFunction = setInputValueMap[squareGroupId][inputId];

    setInputValueFunction({
      value: value,
    });

    const squareGroupObject = squareGroupMap[squareGroupId].squareGroupObject;
    const setSquareGroupFunction =
      squareGroupMap[squareGroupId].setSquareGroupFunction;

    const rowGroupObject = rowGroupMap[rowGroupId].rowGroupObject;
    const setRowGroupFunction = rowGroupMap[rowGroupId].setRowGroupFunction;

    const colGroupObject = colGroupMap[colGroupId].colGroupObject;
    const setColGroupFunction = colGroupMap[colGroupId].setColGroupFunction;

    switch (value) {
      case "1":
        if (
          !squareGroupObject.one &&
          !rowGroupObject.one &&
          !colGroupObject.one
        ) {
          setSquareGroupFunction({ ...squareGroupObject, one: true });
          setRowGroupFunction({ ...rowGroupObject, one: true });
          setColGroupFunction({ ...rowGroupObject, one: true });
        } else setInputValueFunction({ value: value, isWrongAnswer: true });
        break;
      case "2":
        if (
          !squareGroupObject.two &&
          !rowGroupObject.two &&
          !colGroupObject.two
        ) {
          setSquareGroupFunction({ ...squareGroupObject, two: true });
          setRowGroupFunction({ ...rowGroupObject, two: true });
          setColGroupFunction({ ...rowGroupObject, two: true });
        } else setInputValueFunction({ value: value, isWrongAnswer: true });
        break;
      case "3":
        if (
          !squareGroupObject.three &&
          !rowGroupObject.three &&
          !colGroupObject.three
        ) {
          setSquareGroupFunction({ ...squareGroupObject, three: true });
          setRowGroupFunction({ ...rowGroupObject, three: true });
          setColGroupFunction({ ...rowGroupObject, three: true });
        } else setInputValueFunction({ value: value, isWrongAnswer: true });
        break;
      case "4":
        if (
          !squareGroupObject.four &&
          !rowGroupObject.four &&
          !colGroupObject.four
        ) {
          setSquareGroupFunction({ ...squareGroupObject, four: true });
          setRowGroupFunction({ ...rowGroupObject, four: true });
          setColGroupFunction({ ...rowGroupObject, four: true });
        } else setInputValueFunction({ value: value, isWrongAnswer: true });
        break;
      case "5":
        if (
          !squareGroupObject.five &&
          !rowGroupObject.five &&
          !colGroupObject.five
        ) {
          setSquareGroupFunction({ ...squareGroupObject, five: true });
          setRowGroupFunction({ ...rowGroupObject, five: true });
          setColGroupFunction({ ...rowGroupObject, five: true });
        } else setInputValueFunction({ value: value, isWrongAnswer: true });
        break;
      case "6":
        if (
          !squareGroupObject.six &&
          !rowGroupObject.six &&
          !colGroupObject.six
        ) {
          setSquareGroupFunction({ ...squareGroupObject, six: true });
          setRowGroupFunction({ ...rowGroupObject, six: true });
          setColGroupFunction({ ...rowGroupObject, six: true });
        } else setInputValueFunction({ value: value, isWrongAnswer: true });
        break;
      case "7":
        if (
          !squareGroupObject.seven &&
          !rowGroupObject.seven &&
          !colGroupObject.seven
        ) {
          setSquareGroupFunction({ ...squareGroupObject, seven: true });
          setRowGroupFunction({ ...rowGroupObject, seven: true });
          setColGroupFunction({ ...rowGroupObject, seven: true });
        } else setInputValueFunction({ value: value, isWrongAnswer: true });
        break;
      case "8":
        if (
          !squareGroupObject.eight &&
          !rowGroupObject.eight &&
          !colGroupObject.eight
        ) {
          setSquareGroupFunction({ ...squareGroupObject, eight: true });
          setRowGroupFunction({ ...rowGroupObject, eight: true });
          setColGroupFunction({ ...rowGroupObject, eight: true });
        } else setInputValueFunction({ value: value, isWrongAnswer: true });
        break;
      case "9":
        if (
          !squareGroupObject.nine &&
          !rowGroupObject.nine &&
          !colGroupObject.nine
        ) {
          setSquareGroupFunction({ ...squareGroupObject, nine: true });
          setRowGroupFunction({ ...rowGroupObject, nine: true });
          setColGroupFunction({ ...rowGroupObject, nine: true });
        } else setInputValueFunction({ value: value, isWrongAnswer: true });
        break;
    }
  }

  return (
    <Grid container width="320px" boxSizing="border-box">
      {/* Square Group 1 */}
      <Grid item xs={4} border="1px solid black">
        <input
          className={inputValue11.isWrongAnswer ? "wrong-answer" : ""}
          disabled={inputValue11.value !== ""}
          onChange={(e) => handleAddNumber(e.target.value, 1, 1, 1, 1)}
          type="number"
        />
        <input
          disabled={inputValue12.value !== ""}
          className={inputValue12.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 2, 1, 1, 2)}
          type="number"
        />
        <input
          disabled={inputValue13.value !== ""}
          className={inputValue13.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 3, 1, 1, 3)}
          type="number"
        />
        <input
          disabled={inputValue14.value !== ""}
          className={inputValue14.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 4, 1, 2, 1)}
          type="number"
        />
        <input
          disabled={inputValue15.value !== ""}
          className={inputValue15.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 5, 1, 2, 2)}
          type="number"
        />
        <input
          disabled={inputValue16.value !== ""}
          className={inputValue16.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 6, 1, 2, 3)}
          type="number"
        />
        <input
          disabled={inputValue17.value !== ""}
          className={inputValue17.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 7, 1, 3, 1)}
          type="number"
        />
        <input
          disabled={inputValue18.value !== ""}
          className={inputValue18.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 8, 1, 3, 2)}
          type="number"
        />
        <input
          disabled={inputValue19.value !== ""}
          className={inputValue19.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 9, 1, 3, 3)}
          type="number"
        />
      </Grid>
      {/* Square Group 2 */}
      <Grid item xs={4} border="1px solid black">
        <input
          disabled={inputValue21.value !== ""}
          className={inputValue21.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 1, 2, 1, 4)}
          type="number"
        />
        <input
          disabled={inputValue22.value !== ""}
          className={inputValue22.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 2, 2, 1, 5)}
          type="number"
        />
        <input
          disabled={inputValue23.value !== ""}
          className={inputValue23.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 3, 2, 1, 6)}
          type="number"
        />
        <input
          disabled={inputValue24.value !== ""}
          className={inputValue24.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 4, 2, 2, 4)}
          type="number"
        />
        <input
          disabled={inputValue25.value !== ""}
          className={inputValue25.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 5, 2, 2, 5)}
          type="number"
        />
        <input
          disabled={inputValue26.value !== ""}
          className={inputValue26.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 6, 2, 2, 6)}
          type="number"
        />
        <input
          disabled={inputValue27.value !== ""}
          className={inputValue27.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 7, 2, 3, 4)}
          type="number"
        />
        <input
          disabled={inputValue28.value !== ""}
          className={inputValue28.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 8, 2, 3, 5)}
          type="number"
        />
        <input
          disabled={inputValue29.value !== ""}
          className={inputValue29.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 9, 2, 3, 6)}
          type="number"
        />
      </Grid>
      {/* Square Group 3 */}
      <Grid item xs={4} border="1px solid black">
        <input
          disabled={inputValue31.value !== ""}
          className={inputValue31.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 1, 3, 1, 7)}
          type="number"
        />
        <input
          disabled={inputValue32.value !== ""}
          className={inputValue32.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 2, 3, 1, 8)}
          type="number"
        />
        <input
          disabled={inputValue33.value !== ""}
          className={inputValue33.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 3, 3, 1, 9)}
          type="number"
        />
        <input
          disabled={inputValue34.value !== ""}
          className={inputValue34.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 4, 3, 2, 7)}
          type="number"
        />
        <input
          disabled={inputValue35.value !== ""}
          className={inputValue35.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 5, 3, 2, 8)}
          type="number"
        />
        <input
          disabled={inputValue36.value !== ""}
          className={inputValue36.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 6, 3, 2, 9)}
          type="number"
        />
        <input
          disabled={inputValue37.value !== ""}
          className={inputValue37.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 7, 3, 3, 7)}
          type="number"
        />
        <input
          disabled={inputValue38.value !== ""}
          className={inputValue38.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 8, 3, 3, 8)}
          type="number"
        />
        <input
          disabled={inputValue39.value !== ""}
          className={inputValue39.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 9, 3, 3, 9)}
          type="number"
        />
      </Grid>
      <Grid item xs={4} border="1px solid black">
        <input
          disabled={inputValue41.value !== ""}
          className={inputValue41.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 1, 4, 4, 1)}
          type="number"
        />
        <input
          disabled={inputValue42.value !== ""}
          className={inputValue42.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 2, 4, 4, 2)}
          type="number"
        />
        <input
          disabled={inputValue43.value !== ""}
          className={inputValue43.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 3, 4, 4, 3)}
          type="number"
        />
        <input
          disabled={inputValue44.value !== ""}
          className={inputValue44.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 4, 4, 5, 1)}
          type="number"
        />
        <input
          disabled={inputValue45.value !== ""}
          className={inputValue45.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 5, 4, 5, 2)}
          type="number"
        />
        <input
          disabled={inputValue46.value !== ""}
          className={inputValue46.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 6, 4, 5, 3)}
          type="number"
        />
        <input
          disabled={inputValue47.value !== ""}
          className={inputValue47.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 7, 4, 6, 1)}
          type="number"
        />
        <input
          disabled={inputValue48.value !== ""}
          className={inputValue48.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 8, 4, 6, 2)}
          type="number"
        />
        <input
          disabled={inputValue49.value !== ""}
          className={inputValue49.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 9, 4, 6, 3)}
          type="number"
        />
      </Grid>
      <Grid item xs={4} border="1px solid black">
        <input
          disabled={inputValue51.value !== ""}
          className={inputValue51.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 1, 5, 4, 4)}
          type="number"
        />
        <input
          disabled={inputValue52.value !== ""}
          className={inputValue52.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 2, 5, 4, 5)}
          type="number"
        />
        <input
          disabled={inputValue53.value !== ""}
          className={inputValue53.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 3, 5, 4, 6)}
          type="number"
        />
        <input
          disabled={inputValue54.value !== ""}
          className={inputValue54.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 4, 5, 5, 4)}
          type="number"
        />
        <input
          disabled={inputValue55.value !== ""}
          className={inputValue55.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 5, 5, 5, 5)}
          type="number"
        />
        <input
          disabled={inputValue56.value !== ""}
          className={inputValue56.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 6, 5, 5, 6)}
          type="number"
        />
        <input
          disabled={inputValue57.value !== ""}
          className={inputValue57.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 7, 5, 6, 4)}
          type="number"
        />
        <input
          disabled={inputValue58.value !== ""}
          className={inputValue58.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 8, 5, 6, 5)}
          type="number"
        />
        <input
          disabled={inputValue59.value !== ""}
          className={inputValue59.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 9, 5, 6, 6)}
          type="number"
        />
      </Grid>
      <Grid item xs={4} border="1px solid black">
        <input
          disabled={inputValue61.value !== ""}
          className={inputValue61.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 1, 6, 4, 7)}
          type="number"
        />
        <input
          disabled={inputValue62.value !== ""}
          className={inputValue62.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 2, 6, 4, 8)}
          type="number"
        />
        <input
          disabled={inputValue63.value !== ""}
          className={inputValue63.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 3, 6, 4, 9)}
          type="number"
        />
        <input
          disabled={inputValue64.value !== ""}
          className={inputValue64.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 4, 6, 5, 7)}
          type="number"
        />
        <input
          disabled={inputValue65.value !== ""}
          className={inputValue65.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 5, 6, 5, 8)}
          type="number"
        />
        <input
          disabled={inputValue66.value !== ""}
          className={inputValue66.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 6, 6, 5, 9)}
          type="number"
        />
        <input
          disabled={inputValue67.value !== ""}
          className={inputValue67.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 7, 6, 6, 7)}
          type="number"
        />
        <input
          disabled={inputValue68.value !== ""}
          className={inputValue68.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 8, 6, 6, 8)}
          type="number"
        />
        <input
          disabled={inputValue69.value !== ""}
          className={inputValue69.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 9, 6, 6, 9)}
          type="number"
        />
      </Grid>
      <Grid item xs={4} border="1px solid black">
        <input
          disabled={inputValue71.value !== ""}
          className={inputValue71.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 1, 7, 7, 1)}
          type="number"
        />
        <input
          disabled={inputValue72.value !== ""}
          className={inputValue72.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 2, 7, 7, 2)}
          type="number"
        />
        <input
          disabled={inputValue73.value !== ""}
          className={inputValue73.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 3, 7, 7, 3)}
          type="number"
        />
        <input
          disabled={inputValue74.value !== ""}
          className={inputValue74.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 4, 7, 8, 1)}
          type="number"
        />
        <input
          disabled={inputValue75.value !== ""}
          className={inputValue75.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 5, 7, 8, 2)}
          type="number"
        />
        <input
          disabled={inputValue76.value !== ""}
          className={inputValue76.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 6, 7, 8, 3)}
          type="number"
        />
        <input
          disabled={inputValue77.value !== ""}
          className={inputValue77.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 7, 7, 9, 1)}
          type="number"
        />
        <input
          disabled={inputValue78.value !== ""}
          className={inputValue78.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 8, 7, 9, 2)}
          type="number"
        />
        <input
          disabled={inputValue79.value !== ""}
          className={inputValue79.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 9, 7, 9, 3)}
          type="number"
        />
      </Grid>
      <Grid item xs={4} border="1px solid black">
        <input
          disabled={inputValue81.value !== ""}
          className={inputValue81.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 1, 8, 7, 4)}
          type="number"
        />
        <input
          disabled={inputValue82.value !== ""}
          className={inputValue82.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 2, 8, 7, 5)}
          type="number"
        />
        <input
          disabled={inputValue83.value !== ""}
          className={inputValue83.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 3, 8, 7, 6)}
          type="number"
        />
        <input
          disabled={inputValue84.value !== ""}
          className={inputValue84.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 4, 8, 8, 4)}
          type="number"
        />
        <input
          disabled={inputValue85.value !== ""}
          className={inputValue85.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 5, 8, 8, 5)}
          type="number"
        />
        <input
          disabled={inputValue86.value !== ""}
          className={inputValue86.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 6, 8, 8, 6)}
          type="number"
        />
        <input
          disabled={inputValue87.value !== ""}
          className={inputValue87.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 7, 8, 9, 4)}
          type="number"
        />
        <input
          disabled={inputValue88.value !== ""}
          className={inputValue88.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 8, 8, 9, 5)}
          type="number"
        />
        <input
          disabled={inputValue89.value !== ""}
          className={inputValue89.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 9, 8, 9, 6)}
          type="number"
        />
      </Grid>
      <Grid item xs={4} border="1px solid black">
        <input
          disabled={inputValue91.value !== ""}
          className={inputValue91.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 1, 9, 7, 7)}
          type="number"
        />
        <input
          disabled={inputValue92.value !== ""}
          className={inputValue92.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 2, 9, 7, 8)}
          type="number"
        />
        <input
          disabled={inputValue93.value !== ""}
          className={inputValue93.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 3, 9, 7, 9)}
          type="number"
        />
        <input
          disabled={inputValue94.value !== ""}
          className={inputValue94.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 4, 9, 8, 7)}
          type="number"
        />
        <input
          disabled={inputValue95.value !== ""}
          className={inputValue95.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 5, 9, 8, 8)}
          type="number"
        />
        <input
          disabled={inputValue96.value !== ""}
          className={inputValue96.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 6, 9, 8, 9)}
          type="number"
        />
        <input
          disabled={inputValue97.value !== ""}
          className={inputValue97.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 7, 9, 9, 7)}
          type="number"
        />
        <input
          disabled={inputValue98.value !== ""}
          className={inputValue98.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 8, 9, 9, 8)}
          type="number"
        />
        <input
          disabled={inputValue99.value !== ""}
          className={inputValue99.isWrongAnswer ? "wrong-answer" : ""}
          onChange={(e) => handleAddNumber(e.target.value, 9, 9, 9, 9)}
          type="number"
        />
      </Grid>
    </Grid>
  );
}

export default SudokuPuzzle;
