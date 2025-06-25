import React from 'react'

const Card = ({propstext,propsimage}) => {
  return (
    <div>
        <div className='card w-25 px-3 py-3 shadow'>
            <img src={propsimage} alt="" />
            <p>{propstext}</p>
        </div>
    </div>
  )
}

export default Card