import React,{useContext} from 'react'
import { AppContext } from './ForContextAPI'
function Login() {
     const {setuserName}=useContext(AppContext);

    const targeting =(e)=>{
        setuserName(e.target.value)
    }
    
    return (
        <div>
           <input type="text" onChange={targeting}/>
        </div>
    )
}

export default Login
