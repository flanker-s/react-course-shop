import { useParams } from 'react-router';
import Product from '../components/Product'
import ErrorMessage from '../components/ErrorMessage'
import { useGetProductQuery } from '../features/products/productApiSlice'

function SingleProductPage() {

    const {id} = useParams()
    const { data: product, isError, error } = useGetProductQuery(id ?? '1')
    console.log(product)

    return (
        <div className="flex-col">
            
             {isError && <ErrorMessage error={error}/>}
             {product && <Product product={product} />}
        </div>)
}

export default SingleProductPage