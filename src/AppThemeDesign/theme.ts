"use client";
import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      sidebar: {
        main: mode === "dark" ? "#111827" : "#1e293b",
      },
      primary: {
        main: "#2563eb",
        contrastText: "#ffffff",
      },

      warning: {
        main: "#1d4ed8",
      },

      secondary: {
        main: "#9333ea",
      },

      info: {
        main: "#94a3b8",
        contrastText: "#64748b",
      },

      background: {
        default: mode === "dark" ? "#0f172a" : "#f1f5f9",
        paper: mode === "dark" ? "#1e293b" : "#ffffff",
      },

      text: {
        primary: mode === "dark" ? "#ffffff" : "#111827",
        secondary: mode === "dark" ? "#94a3b8" : "#6b7280",
      },

      divider: mode === "dark" ? "#334155" : "#e5e7eb",
    },

    shape: {
      borderRadius: 14,
    },

    typography: {
      fontFamily: "var(--font-inter)",

      h6: {
        fontWeight: 700,
      },

      body1: {
        fontSize: "0.95rem",
      },

      button: {
        textTransform: "none",
        fontWeight: 600,
      },
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: "all 0.25s ease-in-out",
          },
        },
      },

      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },

      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            padding: "8px 18px",
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          },
        },
      },
    },
  });
