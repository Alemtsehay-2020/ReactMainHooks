import React, { useState } from 'react'

function ForUseState() {
    const [name, setname] = useState("USA");
    const namechanger=()=>{
            setname("Ethiopia")
    }
    return (
        <div>
            <hr />
            <hr />
            <h2>use state practice</h2>
            <hr />
            <h3>{name}</h3>
            <button onClick={namechanger}>change Name</button>
            <hr />
            <hr />
        </div>

    )
}

export default ForUseState
