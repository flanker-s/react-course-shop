import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IAuthCredentials} from '../../models'
import {RootState} from '../../app/store'

interface AuthState {
    username: string
    token: string
}

const initialState : AuthState = {
    username: '',
    token: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setCredentials(state, action: PayloadAction<IAuthCredentials>) {
            state.username = action.payload.username
            state.token = action.payload.token
        },
        logOut(state){
            state.username = ''
            state.token = ''
        },
    }
})

export default authSlice.reducer

export const {setCredentials, logOut} = authSlice.actions

export const selectCurrentUser = (state: RootState) => state.auth.username
export const selectCurrentToken = (state: RootState) => state.auth.token