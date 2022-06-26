import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function Products() {
  return (
    <>
        <nav className='container'>
            <Link to="Featured">Featured</Link>
            <Link to="New">New</Link>
        </nav>
        <Outlet />
    </>
    
  )
}
