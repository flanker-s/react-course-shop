import ProductList from "../components/ProductList"
import useProducts from '../hooks/products'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import Modal from '../components/Modal'
import CreateProduct from '../components/CreateProduct'
import {useContext} from 'react'
import {ModalContext} from '../contexts/ModalContext'

function ProductsPage() {
    const {loading, error, products, addProduct} = useProducts()
    const {modal, openModal, closeModal} = useContext(ModalContext)

    return (
        <>
            <div className="py-2 px-4 w-2/3 mx-auto flex-col">
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
                            addProduct(product)
                        }}
                    />
                </Modal>}
            </div>
        </>
    )
}

export default ProductsPage