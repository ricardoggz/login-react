//Acceso a los usuarios autenticados
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export const Dashboard = ()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    useEffect(()=>{
        if(!user) navigate('/')
    },[])
    return (
        <h1>Bienvenido {!user ? null : user.email}</h1>
    )
}