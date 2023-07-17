import { Outlet } from "react-router-dom";
import { Header } from "./shared/components";
import { ThemeContextProvider } from "./shared/contexts";
import { Box } from "@mui/material";

export function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <Box maxWidth={1080} margin="auto">
        <Outlet />
      </Box>
    </ThemeContextProvider>
  )
}