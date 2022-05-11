// Dependencies
import { createContext } from 'react'

// Interfaces
import { ProductContextProps, ProductCardProps } from '../interfaces'

// Hooks
import { useProduct } from '../hooks/useProduct'

// Styles
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ product, children }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct()

  return (
    <div className = { styles.productCard }>

      <Provider
        value = {{
          counter,
          product,
          increaseBy
        }}
      >
        { children }
      </Provider>

    </div>
  )
}