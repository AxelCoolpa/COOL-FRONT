import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import { Landing } from "./pages/Landing.js"



function App() {
 

  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/lg" element={<Landing />} />
    </Routes>
   </>
  )
}

export default App
