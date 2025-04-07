import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRekening, useRingkasan } from './RekeningContext';

const Rekening = () => {
    const [isInputVisible,setInputVisible] = useState(false);
    const [newTitle,setNewTitle] = useState("");
    const [newvalue,setNewValue] = useState(0);

    const url = process.env.REACT_APP_API_URL

    
    const {rekening, getRekening} = useRekening();

    const {ringkas,getRingkasan} = useRingkasan();


    const toggleRekening = () => {
      setInputVisible(!isInputVisible);
    }

    // Fungsi Post Rekening
    const postRekening = async() => {
      try{
        // Ambil Token
        const token = localStorage.getItem('token-kedua')
        if(!token) {
          console.log("Token invalid")
          return ;
        }

        //Set header
        const config = {
          headers : {
            'nama-token' : token
          }
        }

        const body = {
          namaRekening : newTitle,
          jumlahUang : newvalue,
        }
        const res = await axios.post(`${url}/rekening`, body , config)
        getRekening()
        setNewTitle("")
        setNewValue(0)
        setInputVisible(false)
      }catch(err){
        console.error("Error Program :",err)
      }
    } 
  

    useEffect(() => {
      getRekening()
      getRingkasan()
    },[ringkas])


  return (
    <div className=' bg-white w-1/2 mx-auto mt-3 p-2 shadow-md'>
      <h1 className=' font-bold text-2xl flex justify-center'>Rekening</h1>

      {
        isInputVisible ? (
          <div className=' flex space-x-3 my-3 justify-center '>
            <input type="text" className=' w-60 rounded-lg p-2 shadow-md bg-' placeholder='Nama Rekening' value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
            <input type="number" className=' w-60 rounded-lg p-2 shadow-md ' placeholder='Jumlah Uang' value={newvalue} onChange={e => setNewValue(e.target.value)}/>
            <button className=' bg-green-200 px-4' onClick={postRekening}>Simpan</button>
            <button className=' bg-red-200 px-4' onClick={toggleRekening}>Batal</button>
        </div>
        ) : ( 
          <div className=' justify-center flex pt-2'>
            <button className=' bg-green-300 text-white px-5 text-3xl' onClick={toggleRekening}>+</button>
        </div>
        )
      } 
       

      <div>
        {rekening.map((item,index) => (
            <ul className=' flex justify-between border-b p-1 pt-3' key={index}>
                <div className=' flex flex-col'>
                    <li>{item.namaRekening}</li>
                    <li className=' text-xs text-gray-500'> Tanggal Pembuatan : {
                    new Date(item.createdAt).toLocaleDateString()}</li>
                </div>
                <div className=' items-center flex'>
                 <li className=' text-xl'>
                  {new Intl.NumberFormat("id-ID", {
                    style : "currency",
                    currency : "IDR"
                  }).format(item.jumlahUang)}</li>
                </div>
            </ul>
        ))}
      </div>

    </div>
  )
}

export default Rekening
