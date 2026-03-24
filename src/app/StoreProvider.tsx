"use client";

import { Provider, useSelector } from "react-redux";
import { store, GlopalStore } from "@/store/store";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from '../AppThemeDesign/theme';

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const mode = useSelector((state: GlopalStore) => state.theme.mode);
  const muiTheme  = getTheme(mode);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <ThemeWrapper>{children}</ThemeWrapper>
    </Provider>
  );
}
