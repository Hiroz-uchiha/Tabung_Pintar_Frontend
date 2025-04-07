import React, { useEffect, useState } from 'react'
import { useRingkasan } from './RekeningContext'

const Pemasukan = () => {
    const {ringkas,getRingkasan} = useRingkasan();
    
    
    const ringkasan = [
        {
            title : "Pemasukan : ",
            value : ringkas.totalPemasukan,
            warna : "text-green-500"
        },
        
        {
            title : "Pengeluaran : ",
            value : ringkas.totalPengeluaran,
            warna : "text-red-500"

        },
        {
            title : "Total : ",
            value : ringkas.totalUang,
            warna : "text-black"
        },

    ]


    useEffect(() => {
        getRingkasan()
    },[])

  return (
    <div className=' w-1/2 mx-auto mt-3 p-2 flex flex-col shadow-md bg-white'>
        <h1 className='flex justify-center text-2xl font-bold pb-2'>Ringkasan</h1>
        <div className=' flex flex-col'>
           {ringkasan.map((item,index) => (
                <ul className='flex justify-between px-2 py-1' key={index}>
                    <li>{item.title}</li>
                    <li className={`${item.warna}`}>
                        {new Intl.NumberFormat("id-ID", {
                            style : "currency",
                            currency : "IDR"
                        }).format(item.value)}</li>
                </ul>
           ))}
        </div>
    </div>
  )
}

export default Pemasukan
