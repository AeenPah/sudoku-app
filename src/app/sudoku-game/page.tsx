import SudokuPuzzle from "@/components/SudokuPuzzle/SudokuPuzzle";
import { Box, Button, Stack, Typography } from "@mui/material";

function page() {
  return (
    <Stack>
      <Typography variant="h3">Sudoku Game</Typography>
      {/* TODO: Add Sudoku Puzzle */}
      <Box m={10}>
        <SudokuPuzzle />
      </Box>
      {/* TODO: Add buttons  */}
      <Stack direction="row">
        <Button>Done</Button>
        <Button>Reset</Button>
      </Stack>
    </Stack>
  );
}

export default page;
