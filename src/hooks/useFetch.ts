import { useEffect, useState } from "react"

interface FetchResult<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch<T>(url: string): FetchResult<T> {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')

    const fetchData = async () => {
        setLoading(true)
        setError('')
        try {
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error('Error en la petición')
            }

            const result = await response.json()
            setData(result)
        } catch (err) {
            setError((err as Error).message)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { data, loading, error }
}