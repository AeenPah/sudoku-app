"use client";

import { ChangeEvent } from "react";

import { TextField } from "@mui/material";

function SudokuPuzzle2() {
  function handleInputValue(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const value: string = event.target.value;
    if (!value) return;

    if (value.length > 1) {
      event.target.value = value.slice(-1);
    }
  }

  return (
    <>
      <TextField
        type="number"
        variant="outlined"
        onChange={(e) => handleInputValue(e)}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& input": {
              fontSize: "1.4rem",
              height: 50,
              padding: 0,
              textAlign: "center",
              width: 50,
            },
          },
        }}
      />
    </>
  );
}

export default SudokuPuzzle2;
