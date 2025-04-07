import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const RekeningContext = createContext();

export const RekeningProvider = ({children}) => {
    const [rekening,setRekening] = useState([])
    const [loading,setLoading] = useState(true)
    const url = process.env.REACT_APP_API_URL 

    const getRekening = async() => {
        try{
            // Ambil Token
            const token = localStorage.getItem('token-kedua')
            if(!token){
                console.log("Token tidak ditemukan")
                setLoading(false);
                return 
            }

            //Set header
            const config = {
                headers : {
                    'nama-token' : token
                }
            }
            const res = await axios.get(`${url}/rekening`,config);
            setRekening(res.data)
            setLoading(false)
        }catch(err){
            console.log("Error : ",err)
            setLoading(false)
        }
    }

    useEffect(() => {
        getRekening()
    },[])

    return (
        <RekeningContext.Provider value={{ rekening,loading,getRekening }}>
            {children}
        </RekeningContext.Provider>
    )
}   


export const useRekening = () => useContext(RekeningContext)



const RingkasanContext = createContext();

export const RingkasanProvider = ({children}) => {
    const [ringkas,setRingkasan] = useState({
        totalUang : 0,
        totalPemasukan : 0,
        totalPengeluaran : 0
    })
    const url = process.env.REACT_APP_API_URL;

    const getRingkasan = async() => {
        try{
            //1. Ambil Token
            const token = localStorage.getItem('token-kedua')
            if(!token){
                console.log("Token tidak ditemukan")
                return;
            }

            //Set header
            const config = {
                headers : {
                    'nama-token' : token
                }
            }

            const res = await axios.get(`${url}/ringkasan`,config)
            setRingkasan(res.data)
        }catch(err){
            console.error("Gagal ambil data ringkasan : ",err)
        }
    }

    useEffect(() => {
        getRingkasan()
    },[])

    return( 
        <RingkasanContext.Provider value={{ ringkas,getRingkasan }}>
            {children}
        </RingkasanContext.Provider>
    )
}

export const useRingkasan = () => useContext(RingkasanContext);