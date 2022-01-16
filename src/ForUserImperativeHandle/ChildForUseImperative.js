import React, { useState,forwardRef,useImperativeHandle} from 'react'

const ChildForUseImperative = forwardRef((props,ref)=> {

    const [count, setcount] = useState(0);
    useImperativeHandle(ref,()=>({
        increment,
        yall : ()=>alert("the count is "+ count)
    }))

    const increment = ()=>{setcount(count+1)};
    return (
        <div>
            <h2>count : {count}</h2>
            <button onClick={increment}>Click</button>
        </div>
    )
})

export default ChildForUseImperative
