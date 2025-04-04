import React from 'react'

const Pemasukan = () => {
    const ringkasan = [
        {
            title : "Pemasukan : ",
            value : 122,
            warna : "text-green-500"
        },
        
        {
            title : "Pengeluaran : ",
            value : 123,
            warna : "text-red-500"

        },
        {
            title : "Total : ",
            value : 124,
            warna : "text-black"
        },

    ]

  return (
    <div className=' w-1/2 mx-auto mt-3 p-2 flex flex-col shadow-md bg-white'>
        <h1 className='flex justify-center text-2xl font-bold pb-2'>Ringkasan</h1>
        <div className=' flex flex-col'>
           {ringkasan.map((item,index) => (
                <ul className='flex justify-between px-2 py-1' key={index}>
                    <li>{item.title}</li>
                    <li className={`${item.warna}`}>{item.value} Rp</li>
                </ul>
           ))}
        </div>
    </div>
  )
}

export default Pemasukan
