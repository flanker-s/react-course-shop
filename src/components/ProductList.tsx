import React from 'react'
import {PRODUCTS} from "../data/Products";
import ProductLite from "./ProductLite";

function ProductList() {
    return (
        <div className="flex flex-wrap">
            {
                PRODUCTS.map((val) => {
                    return <ProductLite key={val.id} product={val} />
                })
            }
        </div>
    )
}

export default ProductList