import React from 'react'

const Addtodo = ({Value}) => {
    console.log(Value);
    
  return (
    <div>
        <input onChange={(e)=> Value(e.target.value)} type="text" />
    </div>
  )
}

export default Addtodo