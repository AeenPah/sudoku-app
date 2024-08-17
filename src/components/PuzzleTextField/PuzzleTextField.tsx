import { TextField } from "@mui/material";

import limitToLastCharacter from "@/utils/limitToLastCharacter";

function PuzzleTextField() {
  return (
    <TextField
      type="number"
      variant="outlined"
      onChange={(e) => limitToLastCharacter(e)}
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
  );
}

export default PuzzleTextField;
