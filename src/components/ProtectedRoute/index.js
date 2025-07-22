import Cookies from 'js-cookie'
import {Navigate} from 'react-router-dom'
import { useState, useEffect} from 'react'

const ProtectedRoute = ({ children }) => {
    const [checkingAuth, setCheckingAuth] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    useEffect(
        () => {
            const jwtToken = Cookies.get('jwt_token')
            if (jwtToken) setIsAuthenticated(true)
            setCheckingAuth(false)
        },[]
    )
    if (checkingAuth) return <p>Loading</p>
    return isAuthenticated ? children : <Navigate to='/login' replace />
}

export default ProtectedRoute