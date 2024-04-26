import { Box, Grid } from "@mui/material";

export default function SudokuGame({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <Grid container>
      <Grid item xs={1}>
        <Box bgcolor="primary.main" height="90vh" my="5vh">
          side-bar
        </Box>
      </Grid>
      <Grid item xs={11}>
        {children}
      </Grid>
    </Grid>
  );
}
