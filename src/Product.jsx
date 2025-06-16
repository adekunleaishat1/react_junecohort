import { useState } from "react"

const Product = () =>{
    // let name = "blessing"
    const [name, setname] = useState("blessing")
     const [productname, setproductname] = useState("")
     const [productprice, setproductprice] = useState("")
     const [allProduct, setallProduct] = useState([])

     const changevalue = () =>{ 
        setname("titilayo")
        let productdetail = {
            productname,
            productprice
        }
        console.log(productdetail);
        setallProduct([...allProduct,productdetail])
        
     }
    return(
       <>
        <div></div>
        <h1>{name}</h1>
        <input onChange={(e)=> setproductname(e.target.value)} type="text" />
        <input onInput={(e)=> setproductprice(e.target.value)} type="text" />
        <button onClick={changevalue}>Change</button>

        {/* {allProduct.map((e)=>{
        
           return <>
           <h1>{e.productname}</h1>
           </>
        })} */}

       {allProduct.map((e)=>(
             <>
             <h1>{e.productname}</h1>
             </>
       ))}
       </>
       
    )
}


export default Product