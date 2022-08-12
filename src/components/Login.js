import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

function Login() {
    const [user, setUser] = useState('')
    const navigate = useNavigate()
    const auth = useAuth()
    const location = useLocation()
    const redirectPath = location.state?.path || '/'

    const handleLogin = () => {
        auth.login(user)
        navigate(redirectPath, {replace: true})
    }
  return (
    <div>
        <label>
            Username:
            <input type='text' onChange={(e) => setUser(e.target.value)} />
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login