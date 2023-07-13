import { Box, ThemeProvider } from "@mui/material";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { DarkTheme, LightTheme } from "../../themes";

interface IThemeContextProviderProps {
  children: React.ReactNode
}

interface IThemeContextProps {
  toggleTheme: () => void
}

const ThemeContext = createContext<IThemeContextProps>({} as IThemeContextProps);

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function ThemeContextProvider({ children }: IThemeContextProviderProps) {

  const [themeName, setThemeName] = useState<'Light' | 'Dark'>('Light')

  const toggleTheme = useCallback(() => {
    setThemeName((oldTheme) => oldTheme === 'Light' ? 'Dark' : 'Light')
  }, [])

  const theme = useMemo(() => {
    if (themeName === 'Light') {
      return LightTheme
    }
    else {
      return DarkTheme
    }
  }, [themeName])

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box bgcolor={theme.palette.background.default} height="100vh">
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}