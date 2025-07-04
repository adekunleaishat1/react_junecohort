import { Route, Routes , useLocation} from "react-router-dom"
import Landing from "./Landing"
import Sportify from "./Sportify"
import Notfound from "./Notfound"
import Navbar from "./Navbar"
import Profile from "./Profile"
import Product from "./Product"
import Http from "./Http"

function App() {
   const location = useLocation()
   console.log(location);
   const showRoute = ["/","/home"]
   
  return(
    <div>
    {showRoute.includes(location.pathname) &&   <Navbar/>}
      <Routes>
        <Route  path="/" element={<Sportify/>}/>
        <Route  path="*" element={<Notfound/>}/>
        <Route  path="/http" element={<Http/>}/>
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