import { Outlet } from "react-router-dom";
import { Header } from "./shared/components";
import { ThemeContextProvider } from "./shared/contexts";

export function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <Outlet />
    </ThemeContextProvider>
  )
}