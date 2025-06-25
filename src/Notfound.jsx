import React from 'react'
import { useNavigate } from 'react-router-dom'
const Notfound = () => {
    const navigate = useNavigate()
    const Goback = () =>{
        navigate("/")
    }
  return (
    <div className='mx-auto px-3 py-3 w-50'>
        <h1>404</h1>
        <p>This is not the page you are looking for.</p>
        <button className='btn btn-dark mt-3' onClick={Goback}>Go Home</button>
    </div>
  )
}

export default Notfound