import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.tsx"
import LoginPage from "./pages/LoginPage.tsx"
import RegisterPage from "./pages/RegisterPage.tsx"


function App() {
  return (
   <>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/login" element={<LoginPage/>} />
    </Routes>
   </>
  )
}

export default App
