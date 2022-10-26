import axios from '../../axios'
import {AppDispatch} from '../index'
import {categorySlice} from '../slices/categorySlice'

export const fetchCategories = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(categorySlice.actions.fetching())
            const response = await axios.get<string[]>('products/categories')
            dispatch(categorySlice.actions.fetchSuccess(
                response.data)
            )
        } catch (e) {
            dispatch(categorySlice.actions.fetchError(e as Error))
        }
    }
}