import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStateComponent from './components/UseStateComponent'
import UseReducerComponent from './components/UseReducerComponent'
import ContextCounterComponent from './components/ContextCounterComponent'

export const CounterContext = createContext();

function App() {

  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const value = { count, increment, decrement, reset };

  return (
    <>
      <UseStateComponent />
      <UseReducerComponent/>
      <CounterContext.Provider value={value}>
        <ContextCounterComponent/>
      </CounterContext.Provider>
    </>
  )
}

export default App
