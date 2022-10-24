import {useEffect, useState} from 'react'
import axios, {AxiosError} from 'axios'
import {IProduct} from '../models'

function useProducts() {

    function fetchProducts(){
        setError('')
        setLoading(true)
        axios.get<IProduct[]>('https://fakestoreapi.com/products')
            .then((response)=>{
                setProducts(response.data)
                setLoading(false)
            })
            .catch((e)=> {
                const error = e as AxiosError
                setLoading(false)
                setError(error.message)
            })
    }
    useEffect(()=>{
        fetchProducts()
    }, [])

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [products, setProducts] = useState<IProduct[]>([])
    return{
        loading,
        error,
        products
    }

}

export default useProducts