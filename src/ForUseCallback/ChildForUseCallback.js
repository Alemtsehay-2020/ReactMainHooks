import React, { useEffect } from 'react'

function ChildForUseCallback({returnComment}) {
    useEffect(() => {
        console.log("Function was called");
       
    }, [returnComment])
    return (
        <div>
            {returnComment()}
        </div>
    )
}

export default ChildForUseCallback
