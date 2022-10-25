import React from 'react'
import useCategories from '../hooks/categories'
import ErrorMessage from './ErrorMessage'
import MenuItem from './MenuItem'

function Menu() {

    const {categories, loading, error} = useCategories()

    return (
        <>
            {!loading && <ul className="absolute px-3 py-2 bg-gray-500">
                {error && <ErrorMessage message={error}/>}
                {categories?.map((category) => {
                    return <MenuItem category={category}/>
                })}</ul>
            }
        </>
    )
}

export default Menu