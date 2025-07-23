import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import {Increament,IncreasebyValue} from "./redux/CountSlice"

const Counter = () => {
    const {value} = useSelector((state)=> state.countslice)
    const dispatch = useDispatch()
    console.log(value);
    
  return (
    <div>
       <h1> Counter :{value}</h1>
       <button onClick={()=> dispatch(Increament())}>+</button>
       <button onClick={()=> dispatch(IncreasebyValue(10))}>+</button>

    </div>
  )
}

export default Counter