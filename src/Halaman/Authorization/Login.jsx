import React from 'react'
import logo from "../../Assets/logo.jpg"
import {useState} from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [showPassword,setShowPassword] = useState(false)
  const url = process.env.REACT_APP_API_URL
  const navigasi = useNavigate()

  const togglePassword = () => {
    setShowPassword(prev => !prev)
  }

  const login =  async() => {
    try{
      //1. Kirim permintaan post untuk login
      const res = await axios.post(`${url}/user/login`,{email,password})
      const token = res.data.token 

      //2. Simpan token di localstorage
      localStorage.setItem('token-kedua',token)

      //3. SetHeader
      const config = {
        headers : {
          'nama-token' : token
        }
      }

      navigasi("/")

    }catch(err) {
      alert(err.response?.data?.message || "Login gagal, periksa kembali email atau  password anda")
    }
  }

  const Register = () => {
    navigasi("/register")
  }

  return (
    <div>
       <div className=' w-full flex h-screen '>
        <div className='w-[70%] flex flex-col items-center justify-center space-y-3 bg-gray-700'>
            <h1 className=' text-3xl text-white'>Login</h1>
            <input type="text" className=' rounded-sm p-1 w-96 outline-none' placeholder='Email' onChange={e => setEmail(e.target.value)}  />
            <div className='flex bg-gray-200'>
              <input type={showPassword ? 'text' : 'password'} className=' rounded-sm p-1 w-80 outline-none' placeholder='Password' onChange={e => setPassword(e.target.value)} />
              <button onClick={togglePassword} className='px-3'>Show</button>
            </div>
            <button className=' bg-green-200 p-2 px-3' onClick={login} >Login</button>
            <div className=' flex'>
                <p className=' text-white mr-1'>Belum punya akun?</p>
                <button className=' text-green-200' onClick={Register}>Register</button>
            </div>
        </div>
        <div className=' w-1/2 h-full flex'>
            <img src={logo} alt="h-screen w-full object-cover" />
        </div>

    </div>
    </div>
  )
}

export default Login
