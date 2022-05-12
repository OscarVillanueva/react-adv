import { useContext, useState, useEffect, CSSProperties } from "react"
import { ProductContext } from "./ProductCard"

// Styles
import styles from '../styles/styles.module.css'

export interface ProductTitleProps {
  title ?: string,
  className ?: string,
  sx ?: CSSProperties
}

export const ProductTitle = ({ title, className, sx}: ProductTitleProps) => {

  const { product } = useContext( ProductContext )
  const [titleToShow, setTitle] = useState<string>()

  useEffect(() => {
    
    if (title) setTitle(title)
    else setTitle( product.title )

  }, [title])

  useEffect(() => {
    
    if( product && !title ) setTitle(product.title)

  }, [product])

  return (
    <span 
      className = { `${styles.productDescription} ${className}` } 
      style = { sx }
    >
      { titleToShow }
    </span>
  )
}