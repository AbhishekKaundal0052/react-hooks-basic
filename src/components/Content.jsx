import { useState, useEffect } from "react";

function Content(props){
    const[State,setState]=useState("")
    const[like,setLike]=useState(0)

    const handleState=()=>{
        setState(State=>State==""?props.cont:"")
    }
    useEffect (() => {
        alert("Content button clicked")
    }, [State])

    const handleLike=()=>{
        setLike(like=>like+1)
    }

    return(
        <div>
            <h3>{State}</h3>
            <button onClick={handleState}>Content</button>
            <h3>{like}</h3>
            <button onClick={handleLike}>Like</button>
        </div>
        
    )
}
export default Content