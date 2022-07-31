import React, { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { apiLoginSuccess } from './service'
import { setLocalStorage } from './localStorage'


const LoginSuccess = () => {
    const { userId } = useParams()
    const [isToken, setIsToken] = useState(false)
    useEffect(() => {
        const fetchToken = async () => {
            let response = await apiLoginSuccess(userId)
            if (response?.data.status === 0) {
                setLocalStorage('token', response.data.data)
                setIsToken(true)
            }
        }
        userId && fetchToken()
    }, [])
    return (
        <>
            {isToken && <Navigate to={'/'} replace={true} />}
        </>
    )
}

export default LoginSuccess