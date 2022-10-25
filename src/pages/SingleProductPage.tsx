import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import Product from '../components/Product'
import {IProduct} from '../models'
import axios, {AxiosError} from 'axios'
import ErrorMessage from '../components/ErrorMessage'

function SingleProductPage() {

    useEffect(()=>{
        setError('')
        axios.get<IProduct>('https://fakestoreapi.com/products/' + id)
            .then((response)=>{
                setProduct(response.data)
            })
            .catch((e)=>{
                const error = e as AxiosError
                setError(error.message)
            })
    }, [])

    const {id} = useParams()
    const [product, setProduct] = useState<IProduct>()
    const [error, setError] = useState('')

    return (
        <div className="py-2 px-4 mx-auto flex-col">
            {product ? <Product product={product} /> : <ErrorMessage message={error}/>}
        </div>)
}

export default SingleProductPage