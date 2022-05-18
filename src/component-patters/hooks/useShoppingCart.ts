import { useState } from 'react'
import { onChangeArgs, ProductInCart } from "../interfaces"

type ShoppingCart = {
  [key: string]: ProductInCart 
}

type ToolBox = {
  shoppingCart:ShoppingCart,
  handleProductCountChange: ({ count, product }: onChangeArgs) => void
}

export const useShoppingCart = () : ToolBox => {

  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({})

  const handleProductCountChange = ({ count, product }: onChangeArgs) : void => {

    setShoppingCart( prev => {

      const productInCart: ProductInCart = prev[product.id] || { ...product, count: 0 }
      productInCart.count = Math.max( productInCart.count + count, 0)

      // Agregamos el producto al carrito
      if (productInCart.count > 0) 
        return {
          ...prev, 
          [product.id]: productInCart
        }

      // Borramos el producto
      const { [product.id]: toDelete, ...rest } = prev
      return rest

    })
  }

  return {
    shoppingCart,
    handleProductCountChange
  }
}