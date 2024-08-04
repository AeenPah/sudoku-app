import { TextField } from "@mui/material";

function SudokuPuzzle2() {
  return (
    <>
      <TextField
        type="number"
        inputProps={{ max: 1 }}
        variant="outlined"
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
