import { Box, Typography } from "@mui/material";

export function Header() {
  return (
    <Box paddingY={2}>
      <Box maxWidth={1080} display="flex" justifyContent="space-between" margin="auto">
        <Typography component="h1" variant="h5">
          Where in the world?
        </Typography>

        <Typography component="h2" variant="h6">
          Dark Mode
        </Typography>
      </Box>
    </Box>
  )
}