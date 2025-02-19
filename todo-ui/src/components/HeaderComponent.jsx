import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { isUserLoggedIn, logout } from '../services/AuthService'

export const HeaderComponent = () => {

  const handleLogout = () => {
    logout();
    navigator('/login');
    window.location.reload(false);
  }
  const isAuth = isUserLoggedIn();

  return (
    <header>
      <nav className='navbar navbar-expand-md navbar-dark bg-black text-white'>
        <Link to={'/'} className='navbar-brand'>Todo Management Application</Link>
        <ul className=' navbar-nav ms-auto me-5'>
          {
            isAuth && (
              <li className='nav-link'>
                <NavLink to={'/'} className='nav-link'>Todo</NavLink>
              </li>
            )
          }
          {
            !isAuth && (
              <li className='nav-link'>
                <NavLink to={'/register'} className='nav-link'>Register</NavLink>
              </li>
            )
          }
          {
            !isAuth && (
              <li className='nav-link'>
                <NavLink to={'/login'} className='nav-link'>Login</NavLink>
              </li>
            )
          }
          {
            isAuth && (
              <li className='nav-link'>
                <NavLink onClick={handleLogout} className='nav-link'>Logout</NavLink>
              </li>
            )
          }
        </ul>
      </nav>
    </header>
  )
}
