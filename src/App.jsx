import { Route, Routes , useLocation} from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Landing from "./Landing"
import Sportify from "./Sportify"
import Notfound from "./Notfound"
import Navbar from "./Navbar"
import Profile from "./Profile"
import Product from "./Product"
import Http from "./Http"
import OneProduct from "./OneProduct"
import ProductUpload from "./ProductUpload"

function App() {
   const location = useLocation()
   console.log(location);
   const showRoute = ["/","/home"]
   const[products, setproducts] = useState([])

   useEffect(() => {
    GetProduct()
   }, [])
   
   const GetProduct = async() =>{
    try {
      const response = await axios.get("https://dummyjson.com/products")
      console.log(response.data.products);
      setproducts(response.data.products)
    } catch (error) {
      console.log(error);
      
    }
  }
 
   
  return(
    <div>
    {showRoute.includes(location.pathname) &&   <Navbar/>}
      <Routes>
        <Route  path="/" element={<Sportify/>}/>
        <Route  path="*" element={<Notfound/>}/>
        <Route  path="/http" element={<Http products={products}/>}/>
        <Route  path="/upload" element={<ProductUpload/>}/>
        <Route  path="/one/:id" element={<OneProduct products={products}/>}/>
        <Route  path="/home" element={<Landing/>}> 
             <Route index element={<Product/>}/>
            <Route path="/home/profile" element={<Profile/>}/>
            <Route path="/home/product" element={<Product/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App