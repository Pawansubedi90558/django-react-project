import react from "react"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"

function Logout(){
  localStorage.clear()
  return <Navigate to="/Login"/>
}

function RegisterAndLogout(){
  localStorage.clear()
  return <Register />
}
function App() {
  return (
    <>
     
    </>
  )
}

export default App
