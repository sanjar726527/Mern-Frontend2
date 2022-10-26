import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='block'>
      <div className='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom'>
      <Link to="/" className='d-flex align-items-center text-dark text-decoration-none'>
          <span className="fs-4">Pricing example</span>
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link to='/user/signup' className="me-3 py-2 text-dark text-decoration-none"><b>SignUp</b></Link>
        <Link to='/user/login' className="me-3 py-2 text-dark text-decoration-none"><b>Login</b></Link>
      </nav>
    </div>
    </div>
  )
}

export default Navbar