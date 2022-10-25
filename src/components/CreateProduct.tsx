import React, {useState} from 'react'
import {IProduct} from '../models'
import axios, {AxiosError} from 'axios'
import ErrorMessage from './ErrorMessage'

const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'description',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
}

interface CreateProductProps{
    onCreate: (product: IProduct) => void
}

function CreateProduct( {onCreate}: CreateProductProps) {

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        setError('')
        if(title.trim().length === 0){
            setError('Please enter a title')
            return
        }

        productData.title = title
        axios.post<IProduct>('https://fakestoreapi.com/products', productData)
            .then((response)=>{
                console.log(response.data)
                onCreate(response.data)
            })
            .catch((e)=>{
                const error = e as AxiosError
                setError(error.message)
            })
    }

    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string>('')

    return (
        <form className="flex flex-col justify-center" onSubmit={submitHandler}>
            {error && <ErrorMessage message={error}/>}
            <input
                type="text"
                className="border py-2 px-4 mb-2"
                placeholder="Enter product title"
                onChange={event=>setTitle(event.target.value)}
                value={title}
            />
            <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
        </form>
    )
}

export default CreateProduct