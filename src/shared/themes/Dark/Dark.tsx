import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: "hsl(207, 26%, 17%)",
      default: "hsl(207, 26%, 17%)",
    },
    primary: {
      main: "hsl(209, 23%, 22%)"
    },
  },
  typography: {
    allVariants: {
      color: "#ffffff"
    }
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: "hsl(209, 23%, 22%)",
          color: "white"
        }
      }
    }
  }
})