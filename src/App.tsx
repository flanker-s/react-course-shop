import './App.css'
import ProductList from "./components/ProductList"
import useProducts from './hooks/products'
import ErrorMessage from './components/ErrorMessage'
import Loader from './components/Loader'
import Modal from './components/Modal'
import CreateProduct from './components/CreateProduct'
import {useState} from 'react'

function App() {

    const {loading, error, products, addProduct} = useProducts()
    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <>
            <div className="py-2 px-4 w-2/3 mx-auto flex-col">
                {loading && <Loader/>}
                {error && <ErrorMessage message={error}/>}
                <div className="w-full flex justify-center">
                    <button
                        className="border py-2 px-4 bg-yellow-400 text-center"
                        onClick={() => setIsModalVisible(true)}>
                        Create product
                    </button>
                </div>
                <ProductList products={products}/>
                {isModalVisible &&
                <Modal
                    title="Create product"
                    onClose={() => setIsModalVisible(false)}
                >
                    <CreateProduct
                        onCreate={(product) => {
                            setIsModalVisible(false)
                            addProduct(product)
                        }}
                    />
                </Modal>}
            </div>
        </>
    )
}

export default App;
