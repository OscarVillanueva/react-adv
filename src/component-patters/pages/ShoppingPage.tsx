import React from 'react'
import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../components/'

const product = {
  id: '1',
  title: 'Coffee Mug - card',
  image: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style = {{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >

        <ProductCard product = { product }>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product = { product }>
          <ProductImage />
          <ProductTitle title = { 'Otra cosa' } />
          <ProductButtons />
        </ProductCard>

      </div>
    </div>
  )
}
