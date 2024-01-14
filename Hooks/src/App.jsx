import React from 'react';
import { useState } from 'react';
import './App.css';


// import Progression1 from './Components/Progression1'
// import Progression2 from './Components/Progression2'
// import Progression3 from './Components/Progression3'
// import Progression4 from './Components/Progression4'
// import Progression5 from './Components/Progression5'
import Progression6 from './Components/Progression6'


export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <Progression6/>
    </ToggleTheme.Provider>
  );
}

export default App;
