import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

function Navbar() {

    const auth = useAuth()

    const navLinkStyles = ({ isActive }) => {
        return {
            textDecoration: isActive ? 'none' : 'underline',
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }

    return (
        <nav className='primary'>
            <NavLink style={navLinkStyles} to='/'> Home </NavLink>
            <NavLink style={navLinkStyles} to='products'> Products </NavLink>
            <NavLink style={navLinkStyles} to='users'> Users </NavLink>
            <NavLink style={navLinkStyles} to='profile'>Profile</NavLink>
            <NavLink style={navLinkStyles} to='about'> About </NavLink>
            {
                !auth.user && <NavLink style={navLinkStyles} to='login'>Login</NavLink>
            }
            
        </nav>
    )
}

export default Navbar
