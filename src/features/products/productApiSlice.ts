import { apiSlice } from '../../app/api/apiSlice'
import { IProduct } from '../../models'

export const productApiSlice = apiSlice.injectEndpoints(({
    endpoints: builder => ({
        getProduct: builder.query<IProduct, string>({
            query: id => ({
                url: 'products/' + id,
                mathod: 'GET'
            })
        }),
        getProducts: builder.query<IProduct[], Record<string, any>>({
            query: params => ({
                url: '/products',
                method: 'GET',
                params: params ?? ''
            }),
            providesTags: (result) => result
                ? [
                    ...result.map(({ id }) => ({ type: 'IProduct' as const, id })),
                    { type: 'IProduct', id: 'LIST' },
                ]
                : [{ type: 'IProduct', id: 'LIST' }],
        }),
        getProductsCategory: builder.query<IProduct[], string>({
            query: category => ({
                url: '/products/category/' + category,
                method: 'GET'
            }),
            providesTags: (result) => result
            ? [
                ...result.map(({ id }) => ({ type: 'IProduct' as const, id })),
                { type: 'IProduct', id: 'LIST' },
            ]
            : [{ type: 'IProduct', id: 'LIST' }],
        })
    })
}))

export const { useGetProductQuery } = productApiSlice
export const { useGetProductsQuery } = productApiSlice
export const { useGetProductsCategoryQuery } = productApiSlice