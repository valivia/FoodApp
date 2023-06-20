import useSWR from "swr"
import { fetcher } from "./fetcher"

export function useUser() {
    const { data, error, isLoading, mutate } = useSWR(`${process.env.REACT_APP_API_URL}/user`, fetcher)

    return {
        user: data,
        isLoading,
        error,
        mutate,
    }
}