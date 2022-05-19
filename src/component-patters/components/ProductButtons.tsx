import { CSSProperties, useCallback, useContext } from "react"

// Styles
import styles from '../styles/styles.module.css'
import { ProductContext } from "./ProductCard"

export interface ProductCardButtonsProps {
  className ?: string,
  sx ?: CSSProperties
}

export const ProductButtons = ({ className, sx }: ProductCardButtonsProps) => {

  const { counter, maxCount, increaseBy } = useContext( ProductContext )

  const isMaxCountReached = useCallback(() => {
    return !!maxCount && counter >= maxCount
  }, [counter, maxCount])

  return (
    <div 
      style={ sx }
      className = { `${styles.buttonsContainer} ${className}` } 
    >

      <button 
        className = { styles.buttonMinus }
        onClick = { () => increaseBy(-1) }
      >
        -
      </button>

      <div className = { styles.countLabel }>
        { counter }
      </div>

      <button 
        className = { `${styles.buttonAdd} ${ isMaxCountReached() ? 'disabled' : '' }` } 
        onClick = { () => increaseBy(1) } 
        disabled = { isMaxCountReached() }
      >
        +
      </button>

    </div>
  )
}