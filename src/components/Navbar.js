import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <div className="container">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/About" className="nav-link">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Contact" className="nav-link">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/OrderSummery" className="nav-link">OrderSummery</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Products" className="nav-link">Products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Users" className="nav-link">Users</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Profile" className="nav-link">Profile</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}
