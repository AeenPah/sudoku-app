import { TextField, TextFieldProps } from "@mui/material";

import { TCellStatus } from "../SudokuPuzzle/SudokuPuzzle.type";

function PuzzleTextField({
  status,
  changeable,
  ...props
}: TCellStatus & TextFieldProps): JSX.Element {
  return (
    <TextField
      disabled={!changeable}
      variant="outlined"
      sx={{
        bgcolor: status ? "" : "error.light",
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
      {...props}
    />
  );
}

export default PuzzleTextField;
