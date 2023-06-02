//Login
import { useState, useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"
export const Home = ()=>{
    //Cambio de estado para manejar los inputs
    const [input, setInput ] = useState(null)
    const navigate = useNavigate()
    const { saveUser } = useContext(UserContext)
    const onChange = (evt)=> setInput({
        ...input,
        [evt.target.name] : evt.target.value
    })
    const login = async(evt)=>{
        evt.preventDefault()
        const response = await axios.post('http://localhost:3030/login', input)
        if(!response.data.isAuth) return alert(response.data.message)
        saveUser(input)
        return navigate('/dashboard')
    }
    return (
        <form onSubmit={login}>
            <label>Correo</label>
            <input
            type='email'
            required
            name='email'
            onChange={onChange}
            />
            <label>Contraseña</label>
            <input
            type='password'
            required
            name='password'
            onChange={onChange}
            />
            <button>Iniciar sesión</button>
        </form>
    )
}