import { Home } from "./pages";
import { Header } from "./shared/components";
import { ThemeContextProvider } from "./shared/contexts";

export function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <Home />
    </ThemeContextProvider>
  )
}