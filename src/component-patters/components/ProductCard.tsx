// Dependencies
import { createContext, CSSProperties, ReactElement } from 'react'

// Interfaces
import { InitialValues, onChangeArgs, Product, ProductContextProps } from '../interfaces'

// Hooks
import { useProduct } from '../hooks/useProduct'

// Styles
import styles from '../styles/styles.module.css'
import { ProductCardHandlers } from '../interfaces/index';

// Context
export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface ProductCardProps {
  product: Product,
  className ?: string
  sx ?: CSSProperties,
  value ?: number,
  initialValues ?: InitialValues
  // children ?: ReactElement | ReactElement[],
  children ?: ( args: ProductCardHandlers ) => JSX.Element,
  onChange ?: (args: onChangeArgs) => void,
}

export const ProductCard = ({ 
  product, className, sx, children, value, initialValues, onChange 
}: ProductCardProps) => {

  const { 
    counter, 
    maxCount, 
    isMaxCountReached, 
    reset,
    increaseBy, 
  } = useProduct({ product, value, initialValues, onChange })

  return (
    <Provider
      value = {{
        counter,
        product,
        maxCount,
        increaseBy
      }}
    >
      <div 
        className = { `${styles.productCard} ${className}`}
        style = { sx }
      >
        { children && children({
          product,
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          reset,
          increaseBy,
        })}
      </div>
    </Provider>
  )
}