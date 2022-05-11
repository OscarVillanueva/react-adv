import { useContext } from "react"
import { ProductContext } from "./ProductCard"

// Styles
import styles from '../styles/styles.module.css'

// Assets
import noImage from '../assets/no-image.jpg'

export const ProductImage = ({ image = '' } ) => {

  const { product } = useContext( ProductContext )

  const imgToShow: string | undefined = image || product.image

  return (
    <img 
      src = { imgToShow || noImage }
      alt = 'A preview of the product'
      className = { styles.productImg } 
    />
  )
}