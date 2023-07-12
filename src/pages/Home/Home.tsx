import { Box, Grid } from "@mui/material";
import { CardDashboard } from "../../shared";
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
  }
}

export function Home() {

  const { data } = useFetchCountries<IUseFechCountriesProps[]>()

  return (
    <Box maxWidth={1080} margin="auto">
      <Grid container spacing={7}>

        {data?.map((countrie, index) => (
          <Grid item xs={12} sm={4} md={3} lg={3} key={index}>
            <CardDashboard
              name={countrie.name.common}
              population={countrie.population}
              region={countrie.region}
              capital={countrie.capital}
              image={countrie.flags.png}
            />
          </Grid>
        ))}

      </Grid>
    </Box>
  )
}