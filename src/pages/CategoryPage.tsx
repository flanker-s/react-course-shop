import ProductList from "../components/ProductList"
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import {useParams} from 'react-router'
import {useAppDispatch, useAppSelector} from '../hooks/redux'
import {useEffect} from 'react'
import {fetchProductsByCategory} from '../store/actions/productActions'

function CategoryPage() {

    const {category} = useParams()
    const categoryProductsProps = {
        category: category ?? ''
    }

    const dispatch = useAppDispatch()
    const {loading, products, error} = useAppSelector(state => state.products)

    useEffect(()=> {
        dispatch(fetchProductsByCategory(categoryProductsProps.category))
    }, [category])

    return (
        <>
            <div className="flex-col">
                {loading && <Loader/>}
                {error && <ErrorMessage message={error}/>}
                <ProductList products={products}/>
            </div>
        </>
    )
}

export default CategoryPage