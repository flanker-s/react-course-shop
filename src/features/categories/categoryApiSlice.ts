import { apiSlice } from "../../app/api/apiSlice"
import { ICategory } from "../../models"

export const categoryApiSlice = apiSlice.injectEndpoints(({
    endpoints: builder => ({
        getCategories: builder.query<ICategory[], Record<string, any>>(({
            query: params => ({
                url: '/products/categories',
                method: 'GET',
                params: params ?? ''
            }),
            providesTags: (result) => ['ICategory']
        })),
    })
}))

export const { useGetCategoriesQuery } = categoryApiSlice