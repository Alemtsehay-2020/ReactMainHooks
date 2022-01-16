import React, { useState } from 'react'
import Login from './Login'
import User from './User'

function ForContext() {

const [userName, setuserName] = useState("")

    return (
        <div>
            <User name={userName}/>
            <Login setuserName={setuserName} />
        </div>
    )
}

export default ForContext
