import { TextField, TextFieldProps } from "@mui/material";

function PuzzleTextField({
  status,
  ...props
}: { status: boolean } & TextFieldProps): JSX.Element {
  return (
    <TextField
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
