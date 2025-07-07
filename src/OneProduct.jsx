import React ,{useEffect}from 'react'
import { useParams } from 'react-router-dom'


const OneProduct = ({products}) => {
    const route = useParams()
    console.log(route.id);
   
 const oneprod = products.find((prod)=> prod.id == route.id )
    console.log(oneprod);
    
   
  return (
    <div>

    </div>
  )
}

export default OneProduct