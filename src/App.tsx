import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.tsx"
import Register from "./pages/Register.js"
import Login from "./pages/Login.js"


function App() {
 

  return (
   <>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
   </>
  )
}

export default App
