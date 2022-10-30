import ProductCard from "./ProductCard";
import {IProduct} from '../models'

interface ProductListProps {
    products?: IProduct[]
}

function ProductList({products}:ProductListProps) {
    return (
        <div className="flex flex-wrap">
            {
                products?.map((val) => {
                    return <ProductCard key={val.id} product={val} />
                })
            }
        </div>
    )
}

export default ProductList