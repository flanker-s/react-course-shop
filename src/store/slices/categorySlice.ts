import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface CategoryState {
    loading: boolean
    error: string
    categories: string[]
}

const initialState: CategoryState = {
    loading: false,
    error: '',
    categories: []
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {
        fetching(state){
            state.loading = true
        },
        fetchSuccess(state, action: PayloadAction<string[]>){
            state.loading = false
            state.categories = action.payload
        },
        fetchError(state, action: PayloadAction<Error>){
            state.loading = false
            state.error = action.payload.message
        },
    }
})

export default categorySlice.reducer