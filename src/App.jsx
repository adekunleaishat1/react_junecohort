import { useState } from "react"

function App() {
  const [user, setuser] = useState("adedayo")
  const [input1, setinput1] = useState("")
  const [input2, setinput2] = useState("")
  // const username = "lola"
 const Updateuser = () =>{
  setuser("shayo")
  let userdateil = {
   email:input1,
    input2
  }
  console.log(userdateil);
  
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
    </div>
  )
}

export default App