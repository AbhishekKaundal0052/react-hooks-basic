import React from "react";
import App from "../App";
import { useContext } from "react";
import { theme } from "../App";
import Content from "./Content";



function UseContext(){
    const data = useContext(theme);
    const themeStyle = {
      backgroundColor: data?"red":"yellow",
      height: "200px",
      width: "80vw",
      color: data ? "yellow":"red",
    }
    const content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi velit accusamus deserunt repellendus"
    return(
        <>
          <div style={themeStyle}>
          <Content cont={content}/>
          </div>
      
        </>
    )
 }
export default UseContext