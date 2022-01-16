import React from 'react'

function Login(props) {

    const targeting =(e)=>{
        props.setuserName(e.target.value)
    }
    
    return (
        <div>
           <input type="text" onChange={targeting}/>
        </div>
    )
}

export default Login
