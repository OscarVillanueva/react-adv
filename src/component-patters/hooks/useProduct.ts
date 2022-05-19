// Dependencies
import { useEffect, useState } from 'react'

// Types
import { InitialValues, onChangeArgs, Product } from '../interfaces'

type ToolBox = {
  counter: number,
  maxCount ?: number,
  isMaxCountReached: boolean,
  reset: () => void,
  increaseBy: (value: number) => void
}

type UseProductProps = {
  product: Product,
  value ?: number,
  initialValues?: InitialValues
  onChange ?: (args: onChangeArgs) => void,
}

export const useProduct = ({ 
  product, value = 0, initialValues, onChange 
}: UseProductProps) : ToolBox => {
  
  const [counter, setCounter] = useState<number>(0)
  const [renders, setRenders] = useState<number>(0)

  // ref no re renderiza cuando cambia de valor

  useEffect(() => {

    if (renders === 0)  setCounter( initialValues?.count || value )
    else if(renders > 1) setCounter(value)

    if (renders <= 1) setRenders( prev => prev + 1)

  }, [value])

  const increaseBy = (value: number) : void => {
    
    const newValue = Math.max(counter + value, 0)

    if (initialValues?.maxCount && newValue > initialValues.maxCount ) return 

    setCounter( newValue)

    onChange && onChange({ count: newValue, product })
  }

  const reset = () : void => setCounter(initialValues?.count || 0)

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
    increaseBy,
    reset
  }
  
}
