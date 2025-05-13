import React, { useContext } from 'react'
import { CounterContext } from '../App';

function ContextCounterComponent() {

    const { count, increment, decrement, reset } = useContext(CounterContext);

  return (
    <>
        <h1>Context Counter</h1>
        <h2>{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </>
  )
}

export default ContextCounterComponent