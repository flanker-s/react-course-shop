import React from 'react'
import ProductLite from "./ProductLite";
import {IProduct} from '../models'

interface ProductListProps {
    products: IProduct[]
}

function ProductList({products}:ProductListProps) {
    return (
        <div className="flex flex-wrap">
            {
                products.map((val) => {
                    return <ProductLite key={val.id} product={val} />
                })
            }
        </div>
    )
}

export default ProductList