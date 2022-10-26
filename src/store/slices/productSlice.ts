import {IProduct} from '../../models'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface ProductState {
    loading: boolean
    error: string
    products: IProduct[]
}

const initialState: ProductState = {
    loading: false,
    error: '',
    products: [],
}

export const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        fetching(state){
            state.loading = true
        },
        fetchSuccess(state, action: PayloadAction<IProduct[]>){
            state.loading = false
            state.products = action.payload
        },
        handleError(state, action: PayloadAction<Error>){
            state.loading = false
            state.error = action.payload.message
        },
        createProduct(state, action: PayloadAction<IProduct>){
            state.products = [action.payload, ...state.products]
        }
    }
})

export default productSlice.reducer