import React from 'react'
import Pemasukan from './Pemasukan'
import Rekening from './Rekening'
import Transaksi from './Transaksi'


const Beranda = () => {
  return (
    <div>
        <div className=' w-full bg-teal-800 p-2 flex justify-between'>
            <h1 className=' font-londriana text-white text-3xl'>YFP</h1>
            <button className=' text-red-200'>Logout</button>
        </div>
        <Pemasukan/>
        <Rekening/>
        <Transaksi />
    </div>
  )
}

export default Beranda
