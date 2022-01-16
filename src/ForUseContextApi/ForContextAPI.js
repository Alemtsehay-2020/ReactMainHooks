import React, { useState,createContext } from 'react'
import Login from './Login'
import User from './User'

export const AppContext = createContext();

function ForContextAPI() {

const [userName, setuserName] = useState("")

    return (
        <AppContext.Provider value={{userName,setuserName}}>
            <User />
            <Login  />
        </AppContext.Provider>
    )
}

export default ForContextAPI
