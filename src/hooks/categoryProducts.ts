import {useEffect, useState} from 'react'
import axios, {AxiosError} from 'axios'
import {IProduct} from '../models'

interface CategoryProductsProps {
    category: string
}

function useCategoryProducts({category}: CategoryProductsProps) {

    function fetchProducts(){
        setError('')
        setLoading(true)
        axios.get<IProduct[]>('https://fakestoreapi.com/products/category/' + category)
            .then((response)=>{
                setProducts(response.data)
            })
            .catch((e)=> {
                const error = e as AxiosError
                setError(error.message)
            })
            .finally(()=>setLoading(false))
    }
    useEffect(()=>{
        fetchProducts()
    }, [category])

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [products, setProducts] = useState<IProduct[]>([])

    return{
        loading,
        error,
        products,
    }
}

export default useCategoryProducts