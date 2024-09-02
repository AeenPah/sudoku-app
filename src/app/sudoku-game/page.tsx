// import SudokuPuzzle from "@/components/SudokuPuzzle/SudokuPuzzle";
import SudokuPuzzle2 from "@/components/SudokuPuzzle2/SudokuPuzzle2";
import { Box, Button, Stack, Typography } from "@mui/material";

function SudokuGamePage() {
  return (
    <Stack alignItems="center" mt={6}>
      <Typography variant="h3">Sudoku Game</Typography>

      {/* Sudoku Puzzle 2 */}
      <Box m={10}>
        <SudokuPuzzle2 />
      </Box>

      {/* Sudoku Puzzle */}
      {/* <Box m={10}>
        <SudokuPuzzle />
      </Box> */}

      {/* TODO: Add buttons  */}
      <Stack direction="row" gap={2}>
        <Button>Done</Button>
        <Button>Reset</Button>
      </Stack>
    </Stack>
  );
}

export default SudokuGamePage;
