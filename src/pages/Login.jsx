import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/c22f599e-217e-4052-b9c5-ee0a8b03e7ac/EG-en-20230116-popsignuptwoweeks-perspective_alpha_website_large.jpg'></img>
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 rounded-md  text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <form className='flex flex-col py-4 w-full'>
                        <input className='p-3 bg-gray-700 my-2 rounded-sm' type='email' placeholder='Email'></input>
                        <input className='p-3 bg-gray-700 my-2 rounded-sm' type='password' placeholder='Password'></input>
                        <button className='bg-red-600 my-2 py-3 rounded-sm'>Sign Up</button>
                    </form>
                    <div className='flex items-center justify-between text-sm text-gray-600'>
                        <p><input type='checkbox'></input>  Remember Me</p>
                        <p>Need Help?</p>
                    </div>
                    <p className='text-gray-600 my-4'><span>Already subscribed to Netflix?</span>
                    
                    <Link to='/signup'>Sign In</Link>
                  
                     </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login