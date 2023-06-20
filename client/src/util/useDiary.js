import useSWR from "swr"
import { fetcher } from "./fetcher"

export function useDiary() {
    const { data, error, isLoading, mutate } = useSWR(`${process.env.REACT_APP_API_URL}/diary`, fetcher)

    return {
        diary: data,
        isLoading,
        error,
        mutate,
    }
}