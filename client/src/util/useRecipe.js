import useSWR from "swr"
import { fetcher } from "./fetcher"

export function useRecipe() {
    const { data, error, isLoading, mutate } = useSWR(`${process.env.REACT_APP_API_URL}/recipe`, fetcher)

    return {
        recipes: data,
        isLoading,
        error,
        mutate,
    }
}