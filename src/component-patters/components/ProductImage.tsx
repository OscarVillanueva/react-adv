import { CSSProperties, useContext, useEffect, useState } from "react"
import { ProductContext } from "./ProductCard"

// Styles
import styles from '../styles/styles.module.css'

// Assets
import noImage from '../assets/no-image.jpg'

export interface ProductImageProps {
  image ?: string,
  sx ?: CSSProperties,
  className ?: string
}

export const ProductImage = ({ image, className, sx }: ProductImageProps) => {

  const { product } = useContext( ProductContext )
  const [imgToShow, setImageToShow] = useState<string>()

  useEffect(() => {
    
    if(image) setImageToShow(image)
    else setImageToShow((product && product.image) ? product.image : noImage)

  }, [image])

  useEffect(() => {
    
    if (product && product.image && !image) setImageToShow( product.image  )

  }, [product])

  return (
    <img 
      style={ sx }
      src = { imgToShow }
      alt = 'A preview of the product'
      className = { `${styles.productImg} ${className}` } 
    />
  )
}