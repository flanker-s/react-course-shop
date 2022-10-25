import {IProduct} from '../models'
import React from 'react'

interface ProductProps {
    product: IProduct
}

function Product({product}: ProductProps) {
    return (
        <div className="p-1 box-border flex">

            <img className="p-2 w-1/2 object-contain h-screen shadow-none mx-auto"
                 src={product.image}
                 alt={product.title}
            />
            <div className="flex-col w-1/2 p-2 h-screen">
                <h1 className="text-4xl font-bold"> {cutString(product.title, 160)}</h1>
                <div className="">
                    <p className="py-2 text-xl">{product.description}</p>
                    <p className="pb-2 font-bold text-6xl text-green-500">{product.price + '$'}</p>
                    <button
                        className="font-bold shadow px-3 py-2 border h-20 w-40 rounded text-2xl text-center leading-5 border-green-500 text-green-500">
                        {'Cart'}
                    </button>
                </div>
            </div>
        </div>
    )
}

function cutString(str: string, symbols: number) {
    let short = str.substring(0, symbols - 1)
    if (str.length !== short.length) {
        short += '...'
    }
    return short
}

export default Product