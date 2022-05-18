// Dependencies
import { createContext, CSSProperties, ReactElement } from 'react'

// Interfaces
import { onChangeArgs, Product, ProductContextProps } from '../interfaces'

// Hooks
import { useProduct } from '../hooks/useProduct'

// Styles
import styles from '../styles/styles.module.css'

// Context
export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface ProductCardProps {
  product: Product,
  className ?: string
  sx ?: CSSProperties,
  value ?: number,
  children ?: ReactElement | ReactElement[],
  onChange ?: (args: onChangeArgs) => void,
}


export const ProductCard = ({ 
  product, className, sx, children, value, onChange 
}: ProductCardProps) => {

  const { counter, increaseBy } = useProduct({ product, value, onChange })

  return (
    <Provider
      value = {{
        counter,
        product,
        increaseBy
      }}
    >
      <div 
        className = { `${styles.productCard} ${className}`}
        style = { sx }
      >
        { children }
      </div>
    </Provider>
  )
}