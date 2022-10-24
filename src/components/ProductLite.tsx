import React from 'react'
import {IProduct} from "../models";

interface ProductProps {
    product: IProduct
}

function ProductLite({product}: ProductProps) {
    return (
        <div className="p-1 h-96 box-border w-1/4">
            <div className="py-2 px-4 h-full border shadow rounded flex flex-col justify-between items-center">
                <header className="h-28 w-full flex flex-col justify-between">
                    <h3 className="h-2/4 text-md font-bold"> {cutString(product.title, 40)}</h3>
                    <div className="h-2/4 py-1 flex w-full items-center justify-between">
                        <p className="text-xs">{product.category}</p>
                        <p className="pb-2 font-bold text-center text-xl text-green-500 shadow-none">{product.price + '$'}</p>
                    </div>
                </header>
                <img src={product.image} alt={product.title} className="py-2 h-1/2 w-full object-contain shadow-none"/>
                <footer className="h-2/12 w-full">
                    <div className="mt-3 flex justify-between items-center">
                        <button className="leading-5">Preview</button>
                        <button className="font-bold shadow px-3 py-2 border rounded text-lg text-center leading-5 border-green-500 text-green-500">{"Cart"}</button>
                    </div>
                </footer>
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

export default ProductLite