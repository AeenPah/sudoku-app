import { TextField, TextFieldProps } from "@mui/material";

import limitToLastCharacter from "@/utils/limitToLastCharacter";

function PuzzleTextField({
  status,
  ...props
}: { status: boolean } & TextFieldProps): JSX.Element {
  return (
    <TextField
      variant="outlined"
      onChange={(e) => limitToLastCharacter(e)}
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
