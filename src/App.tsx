import './App.css'
import ProductList from "./components/ProductList"
import useProducts from './hooks/products'
import ErrorMessage from './components/ErrorMessage'
import Loader from './components/Loader'

function App() {

    const {loading, error, products} = useProducts()

    return (
        <>
            <div className="py-2 px-4 w-2/3 mx-auto">
                {loading && <Loader/>}
                {error && <ErrorMessage error={error}/>}
                <ProductList products={products}/>
            </div>
        </>
    )
}

export default App;
