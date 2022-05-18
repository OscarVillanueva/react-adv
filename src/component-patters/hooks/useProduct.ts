// Dependencies
import { useEffect, useState } from 'react'

// Types
import { onChangeArgs, Product } from '../interfaces'

type ToolBox = {
  counter: number,
  increaseBy: (value: number) => void
}

type UseProductProps = {
  product: Product,
  value ?: number,
  onChange ?: (args: onChangeArgs) => void
}

export const useProduct = (props: UseProductProps) : ToolBox => {
  
  const { product, value, onChange } = props
  const [counter, setCounter] = useState(value || 0)

  useEffect(() => {
    
    setCounter(value || 0)

  }, [value])

  /**
   * It takes a number as an argument, and if the number is greater than 0, it adds it to the counter,
   * and if it's less than 0, it subtracts it from the counter
   * @param {number} value - number - the value to increase the counter by
   */
  const increaseBy = (value: number) : void => {

    const newValue = Math.max(counter + value, 0)

    setCounter( newValue)

    onChange && onChange({ count: newValue, product })
  }

  return {
    counter, 
    increaseBy
  }
  
}
