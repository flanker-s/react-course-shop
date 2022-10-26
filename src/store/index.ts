import {combineReducers, configureStore} from '@reduxjs/toolkit'
import productReducer from './slices/productSlice'
import categoryReducer from './slices/categorySlice'

const rootReducer = combineReducers({
    products: productReducer,
    categories: categoryReducer
})

export function setupStore(){
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']