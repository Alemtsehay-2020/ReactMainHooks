import React,{useContext} from 'react'
import { AppContext } from './ForContextAPI'
function User() {
    const {name}=useContext(AppContext)
    return (
        <div>
            <h2>user name is ;-{name} </h2>
        </div>
    )
}

export default User
