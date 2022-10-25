import {useEffect, useState} from 'react'
import axios, {AxiosError} from 'axios'

function useCategories() {

    useEffect(()=>{
        setError('')
        setLoading(true)
        axios.get('https://fakestoreapi.com/products/categories')
            .then((response)=>{
                setCategories(response.data)
            })
            .catch((e)=>{
                const error = e as AxiosError
                setError(error.message)
            }).finally(()=>setLoading(false))
    }, [])

    const [categories, setCategories] = useState<string[]>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string>()

    return {
        categories,
        error,
        loading
    }
}

export default useCategories