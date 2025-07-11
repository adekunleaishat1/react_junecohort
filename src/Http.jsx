import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Http = ({products}) => {
  // const [allproducts, setproducts] = useState([])
  const [count, setcount] = useState(0)
  const [calculation, setcalculation] = useState(1)

  
  useEffect(() => {
      // GetProduct()
     setcalculation(count * 2)
  }, [count])


  // fetch("https://dummyjson.com/products")
  // .then((res) => res.json())
  // .then((data)=> console.log(data))

    // const GetProduct = async() =>{
    //   try {
    //     const response = await axios.get("https://dummyjson.com/products")
    //     console.log(response.data.products);
    //     setproducts(response.data.products)
    //   } catch (error) {
    //     console.log(error);
        
    //   }
    // }
   

  return (
    <div>
      <h1>{count}</h1>
      <p>{calculation}</p>
      <button onClick={()=>setcount(count + 1)}>add</button>
      {products.map((product)=>{
        return(
          <>
          <Link to={`/one/${product.id}`} key={product.id}>
          <div>
             <img src={product.thumbnail} alt="" />
             <h1>{product.title}</h1>
          </div>
          </Link>
          </>
        )
      })

      }

    </div>
  )
}

export default Http