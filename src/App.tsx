import './App.css'
import { Route, Routes } from 'react-router-dom'
import CatalogPage from './pages/CatalogPage'
import AboutPage from './pages/AboutPage'
import SingleProductPage from './pages/SingleProductPage'
import Header from './components/Header'
import CategoryPage from './pages/CategoryPage'
import LoginPage from './pages/LoginPage'
import AuthRequired from './features/auth/AuthRequired'
import UserPage from './pages/UserPage'

function App() {

    return (
        <>
            <Header />
            <main className="container mx-auto max-w-2xl">
                <Routes>
                    <Route path="/" element={<CatalogPage />} />
                    <Route path="/auth" element={<LoginPage />} />
                    <Route element={<AuthRequired />}>
                        <Route path='/user' element={<UserPage />} />
                     </Route>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/products/category/:category" element={<CategoryPage />} />
                    <Route path="/products/:id" element={<SingleProductPage />} />
                </Routes>
            </main>
        </>
    )
}

export default App
