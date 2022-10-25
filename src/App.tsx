import './App.css'
import {Route, Routes} from 'react-router-dom'
import CatalogPage from './pages/CatalogPage'
import AboutPage from './pages/AboutPage'
import SingleProductPage from './pages/SingleProductPage'
import Header from './components/Header'
import CategoryPage from './pages/CategoryPage'

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<CatalogPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/products/category/:category" element={<CategoryPage/>}/>
                <Route path="/products/:id" element={<SingleProductPage/>}/>
            </Routes>
        </>
    )
}

export default App
