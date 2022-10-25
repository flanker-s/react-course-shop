import React from 'react'
import {Link} from 'react-router-dom'

function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white">
            <Link to="/">React 2022</Link>
            <span>
                <Link to="/" className="mr-3">Products</Link>
                <Link to="/about">About</Link>
            </span>
        </nav>
    )
}

export default Navigation