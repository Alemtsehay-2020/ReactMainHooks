import React, { useCallback, useState } from 'react'
import ChildForUseCallback from './ChildForUseCallback';

function ForUseCallback() {

const [TOGGLE, setTOGGLE] = useState(false);
const [data, setdata] = useState("how are you")
const returnComment =useCallback(
    (name)=>{
        return data +name
    },[data]
)

    return (
        <div>
            <ChildForUseCallback returnComment={returnComment}/>
            <button
            onClick={()=>{
                setTOGGLE(TOGGLE)
            }}>               
             {""}
             Toggle 
            </button>
            {TOGGLE &&<h1>toggle</h1>}
        </div>
    )
}

export default ForUseCallback
