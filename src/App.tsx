import { Route, Routes } from "react-router-dom"
import { Landing } from "./pages/Landing.js"

import Home from "./pages/Home.tsx"
import Register from "./pages/Register"
import Login from "./pages/Login"


function App() {
  return (
   <>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
   </>
  )
}

export default App
