import { Box, Button, CardMedia, Typography } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useParams } from "react-router-dom";
import { useFetchCountriesCode } from "../../shared/hooks";

interface IuseFetchCountriesCodeProps {
  name: {
    common: string
  },
  population: number
  region: string
  subregion: string
  capital: string
  tld: string
  currencies: {
    [keys: string]: {
      name: string
    }
  }
  languages: {}
  flags: {
    alt: string
    png: string
  }

  borders: []
}

export function Details() {

  const { id } = useParams();

  const { data } = useFetchCountriesCode<IuseFetchCountriesCodeProps[]>(id!);
  console.log(data)

  const currencyNameKeys = data?.map((data) => {
    return Object.keys(data.currencies)
  })

  const languages = data?.map((data) => {
    return Object.values(data.languages)
  })

  return (
    <Box>
      <Box marginBottom={5}>
        <Button variant="contained" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <KeyboardBackspaceIcon />
          Back
        </Button>
      </Box>

      {data?.map((countrie, index) => (
        <Box key={index} >
          <Box display="flex" alignItems="center" gap={15} width="100%">
            <Box minWidth={500}>
              <CardMedia
                height={350}
                component="img"
                image={countrie.flags.png}
                alt={countrie.flags.alt}
              />
            </Box>

            <Box width="100%">
              <Typography variant="h5" fontWeight="bold" marginBottom={4}>
                {countrie.name?.common}
              </Typography>

              <Box display="flex" justifyContent="space-between">
                <Box display="flex" flexDirection="column" gap={1}>
                  <Box display="flex" gap={0.5}>
                    <Typography fontWeight="bold" fontSize={14}>
                      Native Name:
                    </Typography>
                    <Typography fontSize={14}>
                      {countrie.name?.common}
                    </Typography>
                  </Box>

                  <Box display="flex" gap={0.5}>
                    <Typography fontWeight="bold" fontSize={14}>
                      Population:
                    </Typography>
                    <Typography fontSize={14}>
                      {countrie.population}
                    </Typography>
                  </Box>

                  <Box display="flex" gap={0.5}>
                    <Typography fontWeight="bold" fontSize={14}>
                      Region:
                    </Typography>
                    <Typography fontSize={14}>
                      {countrie.region}
                    </Typography>
                  </Box>

                  <Box display="flex" gap={0.5}>
                    <Typography fontWeight="bold" fontSize={14}>
                      Sub Region:
                    </Typography>
                    <Typography fontSize={14}>
                      {countrie.subregion}
                    </Typography>
                  </Box>

                  <Box display="flex" gap={0.5}>
                    <Typography fontWeight="bold" fontSize={14}>
                      Capital:
                    </Typography>
                    <Typography fontSize={14}>
                      {countrie.capital}
                    </Typography>
                  </Box>
                </Box>

                <Box display="flex" flexDirection="column" gap={1}>
                  <Box display="flex" gap={0.5}>
                    <Typography fontWeight="bold" fontSize={14}>
                      Top Level Domain:
                    </Typography>
                    <Typography fontSize={14}>
                      {countrie.tld}
                    </Typography>
                  </Box>

                  <Box display="flex" gap={0.5}>
                    <Typography fontWeight="bold" fontSize={14}>
                      Currencies:
                    </Typography>
                    {currencyNameKeys && currencyNameKeys[index]?.map((currencyKey) => (
                      <Typography key={currencyKey} fontSize={14}>
                        {countrie.currencies[currencyKey]?.name}
                      </Typography>
                    ))}
                  </Box>

                  <Box display="flex" gap={0.5}>
                    <Typography fontWeight="bold" fontSize={14}>
                      Language:
                    </Typography>
                    {languages && (
                      <Typography fontSize={14}>
                        {languages.map((language) => language.join(", "))}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Box>

              <Box display="flex" alignItems="center" gap={1} marginTop={4} flexWrap="wrap">
                <Typography fontWeight="bold" fontSize={14}>
                  Border Countries:
                </Typography>

                {countrie.borders.map((borders) => (
                  <Button key={borders} variant="contained" size="small" sx={{ fontSize: 12 }}>
                    {borders}
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      ))}

    </Box>
  )
}