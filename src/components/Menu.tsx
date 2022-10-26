import React, {useEffect} from 'react'
import ErrorMessage from './ErrorMessage'
import MenuItem from './MenuItem'
import {useAppDispatch, useAppSelector} from '../hooks/redux'
import {fetchCategories} from '../store/actions/categoryActions'

function Menu() {

    const dispatch = useAppDispatch()
    const {loading, categories, error} = useAppSelector(state => state.categories)

    useEffect(()=>{
        dispatch(fetchCategories())
    }, [])

    return (
        <>
            {!loading && <ul className="absolute px-3 py-2 bg-gray-500">
                {error && <ErrorMessage message={error}/>}
                {categories?.map((category) => {
                    return <MenuItem key={category} category={category}/>
                })}</ul>
            }
        </>
    )
}

export default Menu