import React, { useRef } from 'react'

function ForUseRef() {
    const inputRef = useRef(null);
    
    const onclick =()=>{
        console.log(inputRef.current.value);
        inputRef.current.focus()
    }
    return (
        <div>
            <h1>Rediat</h1>
            <input type="text"  placeholder='name' ref={inputRef}/>
            <button onClick={onclick}>change name</button>
        </div>
    )

   


//     const forfirst=useRef(null);
//     const forlast=useRef(null);
//     const forbutton=useRef(null);
// useEffect(() => {
//     forfirst.current.focus()
// }, [])
// function firstKeyDown (e){
//  if(e.key == "Enter"){
//      forlast.current.focus();
//  }
// }
// function lastKeyDown(e){
//     if(e.key=="Enter"){
//         forbutton.current.focus()
//     }
// }
// function onButtonDown (e){
//     alert("your application is submitted")
// }
//     return (
//         <div>           
// <input type="text" onKeyDown={firstKeyDown} ref={forfirst} placeholder='first name here' />
// <br />
// <br />
// <input type="text" onKeyDown={lastKeyDown} ref={forlast}placeholder='last name here' />
// <br />
// <br />
// <button onKeyDown={onButtonDown} ref={forbutton}>submit</button>
//         </div>
//     )




}

export default ForUseRef
