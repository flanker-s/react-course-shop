import ProductList from "../components/ProductList"
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import { useParams } from 'react-router'
import { useGetProductsCategoryQuery } from '../features/products/productApiSlice'

function CategoryPage() {

    const {category} = useParams()
    const {data: products, isLoading, isError, error} = useGetProductsCategoryQuery(category ?? '')

    return (
        <>
            <div className="flex-col">
                {isLoading && <Loader/>}
                {isError && <ErrorMessage error={error}/>}
               <ProductList products={products}/>
            </div>
        </>
    )
}

export default CategoryPage