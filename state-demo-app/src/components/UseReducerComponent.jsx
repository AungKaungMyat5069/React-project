import React from 'react';
import { useReducer } from 'react';

const initalState = {count: 0};
const type = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset'
};
const reducer = (state, action) => {
  switch (action) {
        case type.INCREMENT:
            return {count: state.count + 1}
        case type.DECREMENT:
            return {count: state.count - 1}
        case type.RESET:
            return {count: 0}
        default:
            return new Error('Unknown action type')
    }
}

export default function UseReducerComponent() {

    const [state, dispatch] = useReducer(reducer, initalState)
    // reducer must be first argument and initalState second argument
    const increment = () =>  dispatch(type.INCREMENT) 
    const decrement = () =>  dispatch(type.DECREMENT) 
    const reset = () =>  dispatch(type.RESET) 

  return (
    <>
        <h1>UseReducerComponent</h1>
        <h2>{state.count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </>
  )
}
