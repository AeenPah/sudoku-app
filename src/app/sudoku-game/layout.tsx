import VerticalMenu from "@/components/VerticalMenu/VerticalMenu";
import { Stack } from "@mui/material";

export default function SudokuGame({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <Stack direction="row">
      <VerticalMenu />
      <Stack component="main">{children}</Stack>
    </Stack>
  );
}
