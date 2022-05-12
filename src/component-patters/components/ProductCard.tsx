// Dependencies
import { createContext, CSSProperties, ReactElement } from 'react'

// Interfaces
import { Product, ProductContextProps } from '../interfaces'

// Hooks
import { useProduct } from '../hooks/useProduct'

// Styles
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface ProductCardProps {
  product: Product,
  className ?: string
  sx ?: CSSProperties
  children ?: ReactElement | ReactElement[]
}


export const ProductCard = ({ product, className, sx, children }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct()

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