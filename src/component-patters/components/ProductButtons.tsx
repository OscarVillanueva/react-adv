import { CSSProperties, useContext } from "react"

// Styles
import styles from '../styles/styles.module.css'
import { ProductContext } from "./ProductCard"

export interface ProductCardButtonsProps {
  className ?: string,
  sx ?: CSSProperties
}

export const ProductButtons = ({ className, sx }: ProductCardButtonsProps) => {

  const { counter, increaseBy } = useContext( ProductContext )

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
        className = { styles.buttonAdd } 
        onClick = { () => increaseBy(1) }
      >
        +
      </button>

    </div>
  )
}