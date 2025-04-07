import React from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigasi = useNavigate();

    const logout = () => {
        localStorage.removeItem('token-kedua')
        navigasi("/login")
    }
  return (
    <div>
        <div className=' w-full bg-teal-800 p-2 flex justify-between'>
            <h1 className=' font-londriana text-white text-3xl'>YFP</h1>
            <button className=' text-red-200' onClick={logout}>Logout</button>
        </div>
        </div>
  )
}

export default Navbar
