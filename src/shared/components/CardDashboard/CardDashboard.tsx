import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

interface ICardDashboardProps {
  name: string
  population: number
  region: string
  capital: string
  image: string
}

export function CardDashboard({ name, population, region, capital, image }: ICardDashboardProps) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          height={140}
          component="img"
          image={image}
        />

        <CardContent>
          <Box>
            <Typography component="h2" fontSize={14} fontWeight="bold" marginBottom={1}>
              {name}
            </Typography>
          </Box>

          <Box display="flex" gap={0.5}>
            <Typography fontWeight="bold" fontSize={13}>
              Population:
            </Typography>
            <Typography fontSize={13}>
              {population}
            </Typography>
          </Box>

          <Box display="flex" gap={0.5}>
            <Typography fontWeight="bold" fontSize={13}>
              Region:
            </Typography>
            <Typography fontSize={13}>
              {region}
            </Typography>
          </Box>

          <Box display="flex" gap={0.5}>
            <Typography fontWeight="bold" fontSize={13}>
              Capital:
            </Typography>
            <Typography fontSize={13}>
              {capital}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}