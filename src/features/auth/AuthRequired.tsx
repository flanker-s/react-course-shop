import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { selectCurrentToken } from './authSlice'

function AuthRequired() {

    const token = useSelector(selectCurrentToken)
    const location = useLocation()

    console.log(token)

    return (
        token !== ''
            ? <Outlet/>
            : <Navigate to="/auth" state={{from: location}} replace />
    )
}

export default AuthRequired