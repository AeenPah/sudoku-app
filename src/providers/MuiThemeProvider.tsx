"use client";

import { useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

import ThemeOptions from "@/theme";

function MuiThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useMemo(() => createTheme(ThemeOptions), []);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MuiThemeProvider;
