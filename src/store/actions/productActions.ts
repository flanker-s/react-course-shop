import axios from '../../axios'
import {AppDispatch} from '../index'
import {IProduct} from '../../models'
import {productSlice} from '../slices/productSlice'

export const fetchProducts = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(productSlice.actions.fetching())
            const response = await axios.get<IProduct[]>('products')
            dispatch(productSlice.actions.fetchSuccess(
                response.data
            ))
        } catch (e) {
            dispatch(productSlice.actions.handleError(e as Error))
        }
    }
}

export const fetchProductsByCategory = (category: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(productSlice.actions.fetching())
            const response = await axios.get<IProduct[]>('products/category/' + category)
            dispatch(productSlice.actions.fetchSuccess(
                response.data
            ))
        } catch (e) {
            dispatch(productSlice.actions.handleError(e as Error))
        }
    }
}

export const createProduct = (product: IProduct) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.post('products', product)
            dispatch(productSlice.actions.createProduct(
                response.data
            ))
        } catch (e) {
            dispatch(productSlice.actions.handleError(e as Error))
        }
    }
}