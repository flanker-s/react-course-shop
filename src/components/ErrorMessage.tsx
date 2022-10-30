import { SerializedError } from "@reduxjs/toolkit"
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query"
import { useState } from "react"

interface ErrorMessageProps {
    error: FetchBaseQueryError | SerializedError
}

function ErrorMessage({ error }: ErrorMessageProps) {

    const [errorMsg, setErrorMsg] = useState('')

    if ('originalStatus' in error) {
        if (error.originalStatus === 401) {
            setErrorMsg('Wrong username or password')
        } else if (error.originalStatus === 400) {
            setErrorMsg('Missing username or password')
        } else if (error.originalStatus === 522) {
            setErrorMsg('Server request timeout')
        } else if (error.originalStatus.toString()[0] === '5') {
            setErrorMsg('Server error')
        }
    } else {
        setErrorMsg('Login failed and we don\'t know why')
    }

    return (
        <p className={'text-center text-red-600'}>{errorMsg}</p>
    )
}

export default ErrorMessage