import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    sidebar: {
      main: string;
    };
  }

  interface PaletteOptions {
    sidebar?: {
      main?: string;
    };
  }
}