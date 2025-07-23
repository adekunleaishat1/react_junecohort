import { useState , useEffect} from "react"
import axios from "axios"
import { FetchingSuccessful, FetchingUser } from "./redux/UserSlice"
import { useDispatch , useSelector} from "react-redux"
import Preloader from "./props/Preloader"

const Product = () =>{
    // let name = "blessing"
    const [name, setname] = useState("blessing")
     const [productname, setproductname] = useState("")
     const [productprice, setproductprice] = useState("")
     const [description, setdescription] = useState("")
     const [allProduct, setallProduct] = useState([])
     const [currentindex, setcurrentindex] = useState(null)
     const dispatch = useDispatch()
     const {isloading, alluser, error} = useSelector((state)=> state.userslice)
      console.log(isloading);
      console.log(alluser);
      console.log(error);
      
     useEffect(() => {
        dispatch(FetchingUser())
       axios.get("http://localhost:4568/product")
       .then((res)=>{
        dispatch(FetchingSuccessful(res.data))
        console.log(res);
        
       }).catch((err)=>{
        console.log(err);
        
       })
     }, [])
     

     const changevalue = () =>{ 
        setname("titilayo")
        let productdetail = {
            productname,
            productprice,
            description
        }
        
        console.log(productdetail);
        setallProduct([...allProduct,productdetail])
        console.log(allProduct);
        
       setproductname("")
       setproductprice("")
       setdescription("")
        
     }

   //   Function to delete
     const deleteProduct = (indexToDelete)=>{
      console.log(indexToDelete);
      
      const updatedList = allProduct.filter((_, index) => index !== indexToDelete)
      console.log(updatedList);
      
      setallProduct(updatedList)
     }
     //   Function to edit
     let editproduct = (index)=>{
        console.log(index);
       console.log( allProduct[index]);
       setcurrentindex(index)
       setproductname(allProduct[index].productname)
       setproductprice(allProduct[index].productprice)
       setdescription(allProduct[index].description)
        
     }

     const updateProduct = () =>{
       let update = {
         productname,
         productprice,
         description
       }
       console.log(update,"newvalue");
       console.log(allProduct[currentindex], "previous value");
       
       allProduct[currentindex] = update
       setallProduct([...allProduct])
     }

    return(
       <>
        <div></div>
        <h1>{name}</h1>
        <input value={productname} onChange={(e)=> setproductname(e.target.value)} type="text" />
        <input value={productprice} onInput={(e)=> setproductprice(e.target.value)} type="text" />
        <input value={description} onInput={(e)=> setdescription(e.target.value)} type="text" />
        <button onClick={changevalue}>Change</button>

        {/* {allProduct.map((e)=>{
        
           return <>
           <h1>{e.productname}</h1>
           </>
        })} */}

       {/* {allProduct.map((e, index)=>(
             <>
             <h1>{e.productname}</h1>
             <h1>{e.productprice}</h1>
             <h1>{e.description}</h1>
             <button onClick={()=> deleteProduct(index)}>Delete</button>
             <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=> editproduct(index)}>Edit</button>
             </>
       ))} */}
    {isloading && <Preloader/> }
    {alluser && alluser.map((el)=>(
      <>
      <h1>{el.name}</h1>
      <h1>{el.description}</h1>
      </>
    ))}
    {error && error}



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <input value={productname} className="form-control" onChange={(e)=> setproductname(e.target.value)} type="text" />
        <input value={productprice} className="form-control" onInput={(e)=> setproductprice(e.target.value)} type="text" />
        <input value={description} className="form-control" onInput={(e)=> setdescription(e.target.value)} type="text" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={updateProduct} type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
       </>
       
    )
}


export default Product