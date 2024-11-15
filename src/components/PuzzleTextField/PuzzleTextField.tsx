import { TextField, TextFieldProps } from "@mui/material";

import { TCellStatus } from "../SudokuPuzzle/SudokuPuzzle.type";

function PuzzleTextField({
  status,
  changeable,
  ...props
}: TCellStatus & TextFieldProps): JSX.Element {
  return (
    <TextField
      disabled={changeable}
      variant="outlined"
      sx={{
        bgcolor: status ? "" : "error.light",
        "& .MuiOutlinedInput-root": {
          "& input": {
            fontSize: changeable ? "2.4rem" : "2rem",
            fontWeight: changeable ? 600 : 200,
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
