import { Box, Select, TextField, InputAdornment, MenuItem, SelectChangeEvent } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

export function SearchAndFilter() {

  const [countrie, setCountrie] = useState('');

  function handleChangeCountrie(e: SelectChangeEvent) {
    setCountrie(e.target.value)
  }

  return (
    <>
      <Box maxWidth={420} width="100%">
        <TextField
          size="small"
          fullWidth
          placeholder="Search for a country"
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
          }} />
      </Box>

      <Box maxWidth={200} width="100%">
        <Select
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          fullWidth
          size="small"
          onChange={handleChangeCountrie}
          value={countrie}
        >

          <MenuItem value="" disabled><em>Filter by Region</em></MenuItem>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="America">America</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </Select>
      </Box>
    </>
  )
}