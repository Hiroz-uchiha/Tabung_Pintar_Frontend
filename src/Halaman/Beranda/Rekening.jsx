import React from 'react'

const Rekening = () => {
    const rekening = [
        {
            title : "Rekening 1",
            value : 122,
            tglPembuatan : "04/04/2024"
        },
        
        {
            title : "Rekening 2",
            value : 123,
            tglPembuatan : "04/04/2024"

        },
        {
            title : "Rekening 3",
            value : 124,
            tglPembuatan : "04/04/2024"
        }
    ]

  return (
    <div className=' bg-white w-1/2 mx-auto mt-3 p-2 shadow-md'>
      <h1 className=' font-bold text-2xl flex justify-center'>Rekening</h1>

      <div className=' justify-center flex pt-2'>
        <button className=' bg-green-300 text-white px-5 text-3xl'>+</button>
      </div>

      <div>
        {rekening.map((item,index) => (
            <ul className=' flex justify-between border-b p-1 pt-3' key={index}>
                <div className=' flex flex-col'>
                    <li>{item.title}</li>
                    <li className=' text-xs text-gray-500'> Tanggal Pembuatan : {item.tglPembuatan}</li>
                </div>
                <div className=' items-center flex'>
                 <li className=' text-xl'>{item.value} Rp</li>
                </div>
            </ul>
        ))}
      </div>

    </div>
  )
}

export default Rekening
