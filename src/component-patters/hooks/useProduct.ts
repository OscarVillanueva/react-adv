
import { useState } from 'react'

type ToolBox = {
  counter: number,
  increaseBy: (value: number) => void
}

export const useProduct = () : ToolBox => {
  
  const [counter, setCounter] = useState(0)

  /**
   * "increaseBy is a function that takes a number as an argument and returns nothing."
   * 
   * the type of the argument, and the type of the return value
   * @param {number} value - number - this is the value that we want to increase the counter by.
   */
  const increaseBy = (value: number) : void => setCounter( prev => Math.max(prev + value, 0) )

  return {
    counter, 
    increaseBy
  }
  
}
