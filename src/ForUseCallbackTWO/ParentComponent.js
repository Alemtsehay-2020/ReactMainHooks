import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {
    const [AGE, setAGE] = useState(45);
    const [SALARY, setSALARY] = useState(50000);
   const incrementAge=useCallback(()=>{
       setAGE(AGE+1)
   },[AGE]);
   const incrementSalary=useCallback(()=>{
       setSALARY(SALARY+1000)
   },[SALARY]);
    return (
        <div> 
            <Title/>
            <Count text="Age" count={AGE}/>
            <Button handleClick={incrementAge}>Increment of Age</Button>
            <br />
            <br />
            <br />
            <Count text="Salary" count={SALARY}/>
            <Button handleClick={incrementSalary}>Increment of Salary</Button>
        </div>
    )
}
// what is useCallback hook?
// use Callback is a hook that will return a memorized verison of the 
// callback function that only changes if one of the dependencies has changed
// why it is used?
// it is useful when passing callbacks to optimized child components that rely on reference equality 
// to prevent unnecessary renders.


export default ParentComponent
