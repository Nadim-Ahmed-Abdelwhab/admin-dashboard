'use client'
import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton:{
      styleOverrides:{
        root: {
          color: 'white',
          width : '100%',
          justifyContent : 'start',

          "&:hover":{
            borderRadius : '10px',
            backgroundColor : '#2D3748',
            transition : 'all 0.5s',
            
            
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "var(--font-inter), sans-serif",

    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "0.95rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  
})
