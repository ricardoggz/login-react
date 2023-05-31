//Importar createContext de react
import { createContext, useState } from "react"

//Generamos nuestro contexto
export const UserContext = createContext()

//Generar un provider (proveedor de información)
/*Puedo almacenar lo que necesite*/
export const UserProvider = ({ children })=>{
    //Toda esta información se puede compartir en el provider
    const [user, setUser] = useState(null)
    const saveUser = (user)=>{
        //Mandamos información
        localStorage.setItem('user', JSON.stringify(user))
        //Generamos un cambio de estado
        return setUser(JSON.parse(localStorage.getItem('user')))
    }
    const deleteUser = ()=>{
        //Limpiamos la información del usuario
        localStorage.removeItem('user')
        //Generamos otro cambio de estado
        return setUser(null)
    }
    return(
        <UserContext.Provider value={{user, saveUser, deleteUser}}>
            {/*Toda mi app*/}
            { children }
        </UserContext.Provider>
    )
}