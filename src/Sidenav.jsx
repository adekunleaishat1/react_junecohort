import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div style={{width:"20%", height:"100vh", padding:"20px 10px", backgroundColor:"blue"}}>
        <Link to={"/home/profile"} className='text-white p-2 d-block'>Profile</Link>
        <Link className='text-white p-2 d-block'>Dashbaord</Link>
        <Link to={"/home/product"} className='text-white p-2 d-block'>Payment</Link>
    </div>
  )
}

export default Sidenav