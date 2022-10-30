import ProductList from "../components/ProductList"
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import { useGetProductsQuery } from "../features/products/productApiSlice"

function CatalogPage() {

    // const { modal, openModal, closeModal } = useContext(ModalContext)

    const {data, isLoading, isError, error} = useGetProductsQuery([])

    return (
        <>
            <div className="flex-col">
                {isLoading && <Loader />}
                {isError && <ErrorMessage error={error} />}
                <ProductList products={data} />
            </div>
        </>
    )
}

export default CatalogPage