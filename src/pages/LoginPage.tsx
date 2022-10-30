import { useLoginMutation } from '../features/auth/authApiSlice'
import { useState, useEffect, createRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { setCredentials } from '../features/auth/authSlice'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery'
import { useAppDispatch } from '../app/hooks/redux'
function LoginPage() {

    const [login] = useLoginMutation()

    const userRef = createRef<HTMLInputElement>()

    const [username, setUsername] = useState('mor_2314')
    const [password, setPassword] = useState('83r5^_')

    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState('')
    const dispatch = useAppDispatch()

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        try {
            const userData = await login({
                username: username,
                password: password
            }).unwrap()
            dispatch(setCredentials({
                username: username,
                token: userData.token
            }))
            navigate('/user')
        } catch (e) {
            const error = e as FetchBaseQueryError
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
        }
    }
    useEffect(() => {
        userRef?.current?.focus()
    })

    useEffect(()=>{
        setErrorMsg('')
    }, [username, password])
    return (
        <>
            <p className='text-red-800 mt-5 text-center text-sm'>{errorMsg}</p>
            <form
                className="w-[600px] p-10 rounded bg-gray-500 mx-auto mt-10"
                onSubmit={submitHandler}
            >
                <div className="w-[400px] mx-auto">
                    <div className="flex justify-between">
                        <label htmlFor="username">Username</label>
                        <input name="username" type="text" ref={userRef}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-between mt-5">
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-center mt-5'>
                        <button
                            type="submit"
                            className='p-2 rounded border-black border-2 hover:border-white hover:text-white'
                        >Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default LoginPage