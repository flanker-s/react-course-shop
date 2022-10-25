import './App.css'
import {Route, Routes} from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import AboutPage from './pages/AboutPage'
import Navigation from './components/Navigation'
import SingleProductPage from './pages/SingleProductPage'

function App() {
    return (
        <>
        <Navigation />
        <Routes>
            <Route path="/" element={<ProductsPage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/products/:id" element={<SingleProductPage />}/>
        </Routes>
        </>
    )
}

export default App;
