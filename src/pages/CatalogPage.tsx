import ProductList from "../components/ProductList"
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import Modal from '../components/Modal'
import CreateProduct from '../components/CreateProduct'
import {useContext, useEffect} from 'react'
import {createProduct, fetchProducts} from '../store/actions/productActions'
import {useAppDispatch, useAppSelector} from '../hooks/redux'
import {ModalContext} from '../contexts/ModalContext'

function CatalogPage() {

    const dispatch = useAppDispatch()
    const {loading, products, error} = useAppSelector(state => state.products)
    const {modal, openModal, closeModal} = useContext(ModalContext)

    useEffect(()=> {
        dispatch(fetchProducts())
    }, [])

    return (
        <>
            <div className="flex-col">
                {loading && <Loader/>}
                {error && <ErrorMessage message={error}/>}
                <div className="w-full flex justify-center">
                    <button
                        className="border py-2 px-4 bg-yellow-400 text-center"
                        onClick={openModal}>
                        Create product
                    </button>
                </div>
                <ProductList products={products}/>
                {modal &&
                <Modal
                    title="Create product"
                    onClose={closeModal}
                >
                    <CreateProduct
                        onCreate={(product) => {
                            closeModal()
                            dispatch(createProduct(product))
                        }}
                    />
                </Modal>}
            </div>
        </>
    )
}

export default CatalogPage