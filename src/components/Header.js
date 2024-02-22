import React from 'react'
import { Link } from 'react-router-dom'

const Headers = ({isLogin}) => {
  return (
    <div className='border border-2 w-100 rounded-2 '>
        <ul className='d-flex list-unstyled'>
            <li className='me-3 p-2 fw-bold'>Home</li>
            <li className='me-3 p-2 fw-bold'>Products</li>
            <li className='me-3 p-2 fw-bold'>About Us</li>
        </ul>
        <div className='d-flex flex-row justify-content-between border border-4 border-black rounded-2 p-2 align-items-end'> 
          <p>Welcome to the expense tracker</p>
          {isLogin &&<p>
            <span>your profiel is incomplete<span></span><Link to='profile'>complete now</Link></span>
          </p>}
        </div>
    </div>
  )
}

export default Headers