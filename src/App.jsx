import { Route, Routes } from "react-router-dom"
import Landing from "./Landing"
import Sportify from "./Sportify"
import Notfound from "./Notfound"
import Navbar from "./Navbar"
import Profile from "./Profile"
import Product from "./Product"

function App() {

  return(
    <div>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Sportify/>}/>
        <Route  path="*" element={<Notfound/>}/>
        <Route  path="/home" element={<Landing/>}>
            <Route path="/home/profile" element={<Profile/>}/>
            <Route path="/home/product" element={<Product/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App