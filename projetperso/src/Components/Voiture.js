import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Voiture() {
    const params=useParams()
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState('')
    const[cars,setCar]=useState({})

   
    useEffect(()=>{
        axios.get('http://localhost:5000/onecar/'+params.id)
    .then(response=>{
        setLoading(false)
        setError('')
        setCar(response.data.data)
    })
    .catch(error=>{
        setLoading(false)
        setCar({})
        setError(error)
    })
})
  return (
    <div>Voiture id: {params.id}
    <br/>
    {
        loading ?'LOADING...':cars.marque
    }<br/>
    {
        loading ?'LOADING...':cars.immatriculation
    }


    {error?'error' :null}
    </div>
  )
}

export default Voiture