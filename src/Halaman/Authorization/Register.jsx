import React, { useState } from 'react'
import axios from 'axios'
import logo from "../../Assets/logo.jpg"
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const navigasi = useNavigate()
  const url = process.env.REACT_APP_API_URL


  const login = () => {
    navigasi("/login")
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post(`${url}/user/register`, form);
      setMessage("Register berhasil!");
      navigasi("/login");
    } catch (error) {
      setMessage(error.response?.data?.message || "Gagal register");
      console.error(error);
    }
  };

  return (
    <div className='w-full flex h-screen'>
      <div className='w-full flex flex-col items-center justify-center space-y-3 bg-gray-700'>
        <h1 className='text-3xl text-white'>Register</h1>
        
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          className='rounded-sm p-1 w-96 outline-none'
          placeholder='Username'
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className='rounded-sm p-1 w-96 outline-none'
          placeholder='Email'
        />

        <div className='w-96 relative'>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={form.password}
            onChange={handleChange}
            className='rounded-sm p-1 w-full outline-none'
            placeholder='Password'
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className='absolute right-2 top-1 text-sm text-blue-500'
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <button
          onClick={handleRegister}
          className='bg-green-200 p-2 px-3'
        >
          Register
        </button>

        {message && (
          <p className='text-white'>{message}</p>
        )}

        <div className='flex'>
          <p className='text-white mr-1'>Sudah punya akun?</p>
          <button className='text-green-200' onClick={login}>Login</button>
        </div>
      </div>

    </div>
  );
}

export default Register;
