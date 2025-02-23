import { createContext, useState } from 'react'
import './App.css'
import ComponentA from './components/ComponentA';
export const GreetingContext = createContext();
function App() {
  let greet = "This is Context api using";
  return (
    <>
      <h1>
        Hello World
      </h1>
      <GreetingContext.Provider value={greet}>
        <ComponentA/>
      </GreetingContext.Provider>
    </>
  )
}

export default App
