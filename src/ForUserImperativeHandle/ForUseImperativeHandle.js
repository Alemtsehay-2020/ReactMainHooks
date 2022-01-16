import React,{useRef} from 'react'
import ChildForUseImperative from './ChildForUseImperative'
// Use imperative handle allows us to access methods from within a funciton compnenet
function ForUseImperativeHandle() {
    const forRef = useRef(null);
    return (
        <div>
            <ChildForUseImperative  ref={forRef}/>

            <button onClick={()=>forRef.current.yall()}>Another button </button>
        </div>
    ) 
}

export default ForUseImperativeHandle
