import React,{useState,useEffect,useMemo}from 'react'
import axios from 'axios';
function ForUseMemoHook() {

 const [counterOne, setcounterOne] = useState(0);
 const [counterTwo, setcounterTwo] = useState(0);

 const incrementOne =()=>{
     setcounterOne(counterOne+1)
 };
 const incrementTwo =()=>{
    setcounterTwo(counterTwo+1)
}

// lets add a fuction to check even number
// const isEven = ()=>{
//     let i = 0;
//     while (i<20000) {
//         return counterOne % 2===0;
//     }
//     i++
    
// }
//  lets use use memo hook 

// first import the useMemo hook 

const isEven=useMemo(()=>{
    let i = 0;
    while (i<2000000000) i++
        return counterOne % 2===0;
},[counterOne])


   return(
<div>
    <h1>{counterOne}</h1>
    <button onClick={incrementOne}>button for one</button>
    <span>{isEven? 'Even':"odd"}</span>
    <br />
    <h1>{counterTwo}</h1>
    <button onClick={incrementTwo}>button for two</button>

</div>
   )

//NOTE ;-- useMemo and useCallback are very similar but the diffrence is 
// that use callback caches the provided fuction instance itself whereas use memo
//  invokes the provided function and caches its result  so if you need to cash a function use 
// callback and when you need to cache the result of an invoked funciton 
// use memo
    // ----example two ------
    // const [data, setdata] = useState(null);
    // const [toggle, settoggle] = useState(false);
    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/comments")
    //     .then((responce)=>{
    //         setdata(responce.data)
    //     })
    // }, []);
    // const findLongestName = (comments)=>{
    //     if(!comments) return null;
    //     let longestName="";
    //     for (let i = 0; i < comments.length; i++) {
    //         let currentName=comments[i].name;
    //         if(currentName.length>longestName.length){
    //             longestName=currentName
    //         }  
    //     }
    //     console.log("this is computer");
    //     return longestName
    // };
    // const getLongestName = useMemo(()=>findLongestName(data),[data])
    // return (
    
    //     <div>
    //         <h1>{getLongestName}</h1>
    //         <button
    //         onClick={()=>{settoggle(!toggle)}}
    //         >
    //             {''}
    //             Toggle
    //         </button>
    //         {toggle && <h1>toggle</h1>}
    //     </div>
        
    // )
}

export default ForUseMemoHook
