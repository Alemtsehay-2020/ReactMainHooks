import React, { useReducer, useState } from 'react'

const reducer =(state,action)=>{
    switch(action.type){
        case "increment":
            return {count:state.count + 1, showtext:state.showtext}
        case "toggleShowText":
            return {count:state.count,showtext: !state.showtext}
        default:
            return state;
    }
}
function ForUseReducer() {
    const [state, dispatch] = useReducer(reducer, {count:0,showtext:true});
    const onclick =()=>{
        dispatch({type:"increment"})
        dispatch({type:"toggleShowText"})
    }
    return (
        <div>
            <h2>use reducer practice</h2>
            <hr />
           <h3>{state.count}</h3>
           
           <button onClick={onclick}>CLICK</button>
           {state.showtext &&  <p>this is a text</p>}
       
<hr />
<hr />
        </div>
    )
}

export default ForUseReducer
