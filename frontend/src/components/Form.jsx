import {useState} from "react"
import api from "../api"
import { useNavigate } from "react-router-dom"
import { ACCESS_TOKEN,REFRESH_TOKEN } from "../constants"

function Form({form, route}){
    const [username, setUsername]= useState("")
    const [password,setPassword] =useState("")
    const [loading,setLoading] = useState(false)
    const navigate =useNavigate()

    const choice = method === "login"?"Login":"Register"

    const handleSubmit =async (e) =>{
        setLoading(true);
        e.preventDefault();

        try{
            const res= await api.post(route,{username,password})
            if(method === "login"){
                localStorage.setItem(ACCESS_TOKEN,res.data.access);
                localStorage.setItem(REFRESH_TOKEN,res.data.refresh);
                navigate("/")
            }else{
                navigate("/login")
            }
        }catch(error){
            alert(error)
        }finally{
            setLoading(false)
        }
    };
    return <form onSubmit={handleSubmit} className="form-container">
        <h1>{choice}</h1>
        <input 
            className="form-input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="username"
        />
        <input 
            className="form-input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="password"
        />
        <button className="form-button" type="submit">{choice}</button>
    </form>
}