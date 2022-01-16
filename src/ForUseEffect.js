import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ForUseEffect() {
    const [DATA, setDATA] = useState("")

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((responce)=>{
            setDATA(responce.data[1].email)
        })
        return () => {
        }
    }, [])
    return (
        <div>
            <h2>use effect practice</h2>
           <hr />
            <h2>the current email adress is {DATA}</h2>
            <hr />
            <hr />
        </div>
    )
}

export default ForUseEffect
