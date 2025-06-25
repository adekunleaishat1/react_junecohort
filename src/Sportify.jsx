import React from 'react'
import Card from './Card'
import {allAudio} from "./Song"


const Sportify = () => {
  return (
    <div>
        {allAudio.map((music)=>(
            <>
              <Card propstext={music.songtitle} 
               propsimage={music.songimage} />
            </>
        ))}
      
    </div>
  )
}

export default Sportify