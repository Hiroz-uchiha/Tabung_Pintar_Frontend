import React from 'react'
import logo from "../../Assets/logo.jpg"

const Login = () => {
  return (
    <div>
       <div className=' w-full flex container h-screen '>
        <div className=' w-1/2 flex flex-col items-center justify-center space-y-3 bg-gray-700'>
            <h1 className=' text-3xl text-white'>Login</h1>
            <input type="text" className=' rounded-sm p-1 w-96 outline-none' placeholder='Email'  />
            <input type="text" className=' rounded-sm p-1 w-96 outline-none' placeholder='Password'  />
            <button className=' bg-green-200 p-2 px-3' >Login</button>
            <div className=' flex'>
                <p className=' text-white mr-1'>Belum punya akun?</p>
                <button className=' text-green-200' >Register</button>
            </div>
        </div>
        <div className=' w-3/6'>
            <img src={logo} alt="Logo" className='h-full w-full' />
        </div>

    </div>
    </div>
  )
}

export default Login
