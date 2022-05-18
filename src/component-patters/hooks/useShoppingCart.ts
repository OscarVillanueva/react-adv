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

      if (count === 0) {
        const { [product.id]: toDelet, ...rest  } = prev
        return rest
      }

      return {
        ...prev,
        [product.id]: { ...product, count }
      }

    })
  }

  return {
    shoppingCart,
    handleProductCountChange
  }
}