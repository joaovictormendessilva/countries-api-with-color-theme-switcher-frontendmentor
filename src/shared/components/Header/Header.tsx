import { Box, Typography, useTheme } from "@mui/material";
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { useThemeContext } from "../../contexts";

export function Header() {
  const theme = useTheme()
  const { toggleTheme } = useThemeContext()

  return (
    <Box
      paddingY={2}
      marginBottom={4}
      bgcolor={theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.primary.main}
      boxShadow={1}>
      <Box maxWidth={1080} display="flex" justifyContent="space-between" margin="auto">
        <Typography component="h1" variant="h5">
          Where in the world?
        </Typography>

        <Typography
          component="h2"
          variant="h6"
          onClick={() => toggleTheme()}
          sx={{ cursor: "pointer" }}
          display="flex"
          alignItems="center"
          gap={1}>
          <NightlightRoundIcon />
          Dark Mode
        </Typography>
      </Box>
    </Box>
  )
}