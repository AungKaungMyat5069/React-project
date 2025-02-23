import React, { useContext } from 'react'
import { GreetingContext } from '../App'

function ComponentC() {

    const value = useContext(GreetingContext);

  return (
    <h1>{value}</h1>
  )
}

export default ComponentC