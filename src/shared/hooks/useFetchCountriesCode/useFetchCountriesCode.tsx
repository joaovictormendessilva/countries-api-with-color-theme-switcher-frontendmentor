import { useEffect, useState } from "react"
import { api } from "../../services/axios"

export function useFetchCountriesCode<T = unknown>(id: string) {

  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    api.get(`/alpha/${id}`)
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return { data }

}