import { Route, Routes } from "react-router-dom"
import { Landing } from "./pages/Landing.js"

import Home from "./pages/Home.tsx"
import Register from "./pages/Register"
import Login from "./pages/Login"


function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/lg" element={<Landing />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
   </>
  )
}

export default App
