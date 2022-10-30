import { apiSlice } from '../../app/api/apiSlice'
import { IAuthCredentials, ILoginCredentials } from '../../models'
export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation<IAuthCredentials, ILoginCredentials>({
            query: credentials => ({
                url: '/auth/login',
                method: 'POST',
                body: { ...credentials }
            })
        }),
    })
})
export const { useLoginMutation } = authApiSlice