import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CreatableSelect from 'react-select/creatable'
import Select from 'react-select'
import { useRekening, useRingkasan } from './RekeningContext'

const Transaksi = () => {
    const [rekeningOptions,setRekeningOptions] = useState([])
    const [dataRekening,setDataRekening] = useState([])
    const url = process.env.REACT_APP_API_URL
    const [add,setAdd] = useState(false)
  
  // Data Rekening
  const {rekening, getRekening} = useRekening();

  // Data Ringkasan
  const {ringkas, getRingkasan} = useRingkasan();

    // Jenis Transaksi
    const [selectedRekening, setSelectedRekening] = useState(null) 
    const [jumlahUang, setJumlahUang] = useState(0)
    const [jenisTransaksi, setJenisTransaksi] = useState(null)

    const jenisTransaksiOptions = [
      {value : "Pemasukan", label : "Pemasukan"},
      {value : "Pengeluaran", label : "Pengeluaran"}
    ]

    const addTogle = () => {
      setAdd(!add)
    }

    // // Get data untuk Select
    const getRek = async() => {
      try{
        // Ambil token
        const token = localStorage.getItem("token-kedua")
        if(!token){
          return;
        }
        
        const config = {
          headers : {
            "nama-token" : token
          }
        }

        const res = await axios.get(`${url}/rekening`,config)  
          // Simpan data asli
          setDataRekening(res.data)

          // Mapping ke format untuk react-select
          const options = res.data.map((item) => ({
            value : item._id, 
            label : item.namaRekening
          }))
          setRekeningOptions(options)
          // setLoading(false)
      }catch(err){
        console.log("Error Program :",err)
        // setLoading(true)
      }
    }

     //Data transaksi
     const [dataTransaksi,setDataTransaksi] = useState([]);

     const getTransaksi = async() => {
       try{
         //1. Ambil Token
         const token = localStorage.getItem("token-kedua")
         if(!token) {
           console.log("Token tidak ditemukan")
           return; 
         }
 
         // Set header
         const config = {
           headers : {
             'nama-token' : token
           }
         }
 
         const res = await axios.get(`${url}/transaksi`,config)
         setDataTransaksi(res.data)
        //  setLoading(false)
       }catch(err){
         console.log("Error mengambil Transaksi",err)
       }
     }


    // Tambah Transaksi
    const postTransaksi = async() => {
      if(!selectedRekening || !jumlahUang || !jenisTransaksi){
        alert("Semua data harus diisi")
        return
      }
        
      try{    
        //1. Ambil token
        const token = localStorage.getItem("token-kedua")
        if(!token) return;

        const config = {
          headers : {
            "nama-token" : token
          }
        }
          const value = {
            rekening : selectedRekening.value,
            jumlah : parseFloat(jumlahUang),
            jenisTransaksi : jenisTransaksi.value
          }
          
          const res = await axios.post(`${url}/transaksi`, value,config)
          console.log("Berhasil simpan Data : ",res.data)
          setAdd(false)
          getRekening()
          getTransaksi()
          getRingkasan()
          setSelectedRekening(null)
          setJumlahUang('')
          setJenisTransaksi(null)
        }catch(err){
        console.log("Error Program :",err)
      }
    }
    
    useEffect(() => {
      getRek()
      getTransaksi()
    },[rekening,ringkas])


  return (
    <div className=' w-1/2 mx-auto bg-white p-2 mt-3 shadow-md mb-4'>
      <h1 className=' font-bold justify-center flex text-2xl'>Transaksi</h1>

      {add ? (
              <div className=' flex justify-center my-3 flex-col space-y-4 w-1/2 mx-auto'>
              <CreatableSelect 
              options={rekeningOptions}
              placeholder="Pilih Rekening..."
              onChange={setSelectedRekening}
              value={selectedRekening}
              />

              <input type="number" 
              className=' w-96 shadow-md p-2' 
              placeholder='Jumlah Uang' 
              value={jumlahUang}
              onChange={(e) => setJumlahUang(e.target.value)}
              />
              
             <Select 
             options={jenisTransaksiOptions}
             placeholder="Jenis Transaksi..."
             onChange={setJenisTransaksi}
             value={jenisTransaksi}
             />

              <div className=' space-x-4 flex justify-center'>
                <button className=' bg-green-200 px-5 py-3' onClick={postTransaksi}>Simpan</button> 
                <button className=' bg-red-200 px-5 py-3' onClick={addTogle}>Batal</button>
              </div>
            </div>
      
      ) : ( 
      <div className=' justify-center flex pt-2'>
        <button className=' bg-green-300 text-white px-5 text-3xl' onClick={addTogle}>+</button>
      </div>)}
     


      <div className=''>
        {dataTransaksi
        .sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((item,index) => (
            <ul key={index} className=' border-b pb-1 mb-3'>
                <div className='flex justify-between'>
                    <li>{item.jenisTransaksi}</li>
                    <li> {new Intl.NumberFormat("id-Id",{
                      style : "currency",
                      currency : "IDR"
                    }).format(item.jumlah)}</li>
                </div>
                <div className='flex justify-between text-xs text-gray-500'>
                    <li>{item.rekening.namaRekening}</li>
                    <li>{new Date(item.createdAt).toLocaleDateString('id-ID',{
                      weekday : "long",
                      day : "numeric",
                      month : 'long',
                      year : 'numeric',
                      hour : "2-digit",
                      minute : '2-digit',
                      hour12 : false 
                    })}</li>
                </div>
            </ul>
        ))}
      </div>
    </div>
  )
}

export default Transaksi
