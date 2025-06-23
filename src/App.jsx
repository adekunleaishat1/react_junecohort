import { useState } from "react"
import Button from "./Button"
import Addtodo from "./Addtodo"
import Displtodo from "./Displtodo"

function App() {
  const [user, setuser] = useState("adedayo")
  const [input1, setinput1] = useState("")
  const [input2, setinput2] = useState("")
  const [showValue, setshowValue] = useState("")
  // const username = "lola"
 const Updateuser = () =>{
  setuser("shayo")
  let userdateil = {
   email:input1,
    input2
  }
  console.log(userdateil);
  
 }
 const usersignup = () =>{
  alert("Signup")
 }
 const userlogin = () =>{
  alert("Login")
 }
  return(
    <div>
      <h1>Hello</h1>
      <p>{user}</p>

      <input onChange={(e)=> setinput1(e.target.value) } type="text" />
      <input onChange={(e)=> setinput2(e.target.value) } type="text" />
      <button onClick={Updateuser}>change</button>
      <p>{input1}</p>
      {Math.random()}
      <Button text="Signup" sty="btn btn-dark" click={usersignup}/>
      <Button text="Login" sty="btn btn-primary" click={userlogin}/>
      <Button text="Loading" sty="clic"/>

      <Addtodo  Value={setshowValue}/>
      {/* {showValue} */}
      <Displtodo showValue={showValue} />
    </div>
  )
}

export default App