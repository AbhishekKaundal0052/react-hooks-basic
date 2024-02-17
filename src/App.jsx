import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseContext from "./components/UseContext";
import Content from './components/Content'

export const theme = React.createContext();

function App() {
  const [state, setState] = useState(true);

  const handleClick = () => {
    setState((state) => !state);
  };
  
  return (
    <>
      <theme.Provider value={state}>
        <div>
          <button onClick={handleClick}>Change</button>
        </div>
        <UseContext />
      </theme.Provider>
    </>
  );
}

export default App;
