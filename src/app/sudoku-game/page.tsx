// import SudokuPuzzle from "@/components/SudokuPuzzle/SudokuPuzzle";
import SudokuPuzzle from "@/components/SudokuPuzzle/SudokuPuzzle";
import { Box, Button, Stack, Typography } from "@mui/material";

function SudokuGamePage() {
  return (
    <Stack alignItems="center" mt={6}>
      <Typography variant="h3">Sudoku Game</Typography>
      {/* Sudoku Puzzle */}
      <Box m={10}>
        <SudokuPuzzle />
      </Box>
    </Stack>
  );
}

export default SudokuGamePage;
