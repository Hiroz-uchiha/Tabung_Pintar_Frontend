import React from 'react'

const Transaksi = () => {
    const transaksi= [
        {
            jenisTransaksi : "Makanan/Minuman",
            rekening : "Dompet",
            jlhTransaksi : 100000,
            tglTransaksi : "04/04/2024",
        },
        {
            jenisTransaksi : "Makanan/Minuman",
            rekening : "Dompet",
            jlhTransaksi : 100000,
            tglTransaksi : "04/04/2024",
        },
        {
            jenisTransaksi : "Makanan/Minuman",
            rekening : "Dompet",
            jlhTransaksi : 100000,
            tglTransaksi : "04/04/2024",
        },
        {
            jenisTransaksi : "Makanan/Minuman",
            rekening : "Dompet",
            jlhTransaksi : 100000,
            tglTransaksi : "04/04/2024",
        },
    ]

  return (
    <div className=' w-1/2 mx-auto bg-white p-2 mt-3 shadow-md'>
      <h1 className=' font-bold justify-center flex text-2xl'>Transaksi</h1>

      <div className=' justify-center flex pt-2'>
        <button className=' bg-green-300 text-white px-5 text-3xl'>+</button>
      </div>

      <div className=''>
        {transaksi.map((item,index) => (
            <ul key={index} className=' border-b pb-1 mb-3'>
                <div className='flex justify-between'>
                    <li>{item.jenisTransaksi}</li>
                    <li>{item.jlhTransaksi} Rp</li>
                </div>
                <div className='flex justify-between text-xs text-gray-500'>
                    <li>{item.rekening}</li>
                    <li>{item.tglTransaksi}</li>
                </div>
            </ul>
        ))}
      </div>
    </div>
  )
}

export default Transaksi
