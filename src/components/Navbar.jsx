import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
      <Link to='/'>
        <h1 className='text-red-600 font-bold text-4xl cursor-pointer'>NETFLIX</h1>
        </Link>
        <div>
          <Link to='/login'>
        <button className='text-white pr-4'>Sign In</button>
        </Link>
        <Link to='signup'>
        <button className='text-white bg-red-600 py-2 rounded px-6'>Sign Up</button>
        </Link>
        </div>
    </div>
  )
}

export default Navbar