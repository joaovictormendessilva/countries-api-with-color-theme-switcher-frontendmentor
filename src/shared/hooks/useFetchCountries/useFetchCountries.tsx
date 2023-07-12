import { useEffect, useState } from "react"
import { api } from "../../services/axios"

export function useFetchCountries<T = unknown>() {

  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    api.get("/all")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error))
  }, [])

  return { data }
}