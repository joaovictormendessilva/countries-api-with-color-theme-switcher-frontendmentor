import { Box, Grid } from "@mui/material";
import { CardDashboard, SearchAndFilter } from "../../shared/components";
import { useFetchCountries } from "../../shared/hooks";

interface IUseFechCountriesProps {
  name: {
    common: string
  }
  population: number
  region: string
  capital: string
  flags: {
    png: string
  },
  ccn3: string
}

export function Home() {

  const { data } = useFetchCountries<IUseFechCountriesProps[]>();

  return (
    <Box>

      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={4}>
        <SearchAndFilter />
      </Box>

      <Grid container spacing={7}>

        {data?.map((countrie, index) => (
          <Grid item xs={12} sm={4} md={3} lg={3} key={index}>
            <CardDashboard
              name={countrie.name.common}
              population={countrie.population}
              region={countrie.region}
              capital={countrie.capital}
              image={countrie.flags.png}
              numericCode={countrie.ccn3}
            />
          </Grid>
        ))}

      </Grid>
    </Box>
  )
}