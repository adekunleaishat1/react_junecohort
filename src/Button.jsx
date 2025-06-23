import React from 'react'

const Button = (props) => {
    console.log(props);
    
  return (
    <div>
        <button onClick={props.click} className={props.sty}>{props.text}</button>
    </div>
  )
}

export default Button