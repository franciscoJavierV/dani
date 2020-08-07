import React from 'react'
//styles
import './styles/Nav.css'
//link
import { Link } from 'react-router-dom'
//assets
import logo from '../assets/logos/Logo.jpg'

const Nav = () => {
    return (
        <div className='nav'>
            <img className='nav__img' src={logo} 
            alt="logo"
            width="40px"
            height="30px" />
            <div className="nav__pages">
                <Link className="nav__pages-link" to='/'>Home</Link>
                <Link className="nav__pages-link" to='album'>Album</Link>
                <Link className="nav__pages-link" to='chedule'>Shedule</Link>
            </div>
        </div>
    )
}

export default Nav
