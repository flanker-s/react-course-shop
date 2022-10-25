import React from 'react'
import {Link} from 'react-router-dom'

interface  MenuItemProps{
    category: string
}

function MenuItem({category}: MenuItemProps) {
    return (
        <Link
            to={`https://fakestoreapi.com/products/category/${category}`}
            className="block box-border"
        >
            {category.charAt(0).toUpperCase() + category.slice(1)}
        </Link>
    )
}

export default MenuItem