import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      paper: "hsl(0, 0%, 98%)",
      default: "hsl(0, 0%, 98%)"
    },
    primary: {
      main: "hsl(0, 0%, 98%)"
    }
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "hsl(0, 0%, 52%)",
          background: "white"
        }
      }
    }
  }
})