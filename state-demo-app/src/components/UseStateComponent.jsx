import React from 'react'

export default function UseStateComponent() {

    const [count, setCount] = React.useState(0);
    const incrementHandler = () => {
        setCount(count + 1);
    }

    const decrementHandler = () => {
        setCount(count - 1);
    }

    const resetHandler = () => {
        setCount(0);
    }

  return (
   <>
    <h1>Count: {count}</h1>
    <button onClick={incrementHandler}>Increment</button>
    <button onClick={decrementHandler}>Decrement</button>
    <button onClick={resetHandler}>Reset</button>
   </>
  )
}
