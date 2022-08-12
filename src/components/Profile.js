import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'
import { RequireAuth } from './RequireAuth'

function Profile() {
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
    return (
    <RequireAuth>
        <div>Welcome {auth.user}</div>
        <button onClick={handleLogout}>LogOut</button>
    </RequireAuth>
    )
}

export default Profile