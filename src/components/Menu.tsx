import ErrorMessage from './ErrorMessage'
import MenuItem from './MenuItem'
import { useGetCategoriesQuery } from '../features/categories/categoryApiSlice'

function Menu() {

    const {data : categories, isLoading, isError, error} = useGetCategoriesQuery([])

    return (
        <>
            {!isLoading && <ul className="absolute px-3 py-2 bg-gray-500">
                {isError && <ErrorMessage error={error}/>}
                {categories?.map((category, i) => {
                    return <MenuItem key={category.toString()} category={category.toString()}/>
                })}</ul>
            }
        </>
    )
}

export default Menu