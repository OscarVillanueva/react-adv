import React from 'react'
import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../components/'

import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffee Mug - card',
  image: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>¡Shopping Store!</h1>
      <hr />

      <div
        style = {{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >

        <ProductCard 
          product = { product }
          className='bg-dark text-white'
        >
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title className = 'text-white text-bold' sx = {{ color: 'red' }}/>
          <ProductCard.Buttons className = 'custom-buttons' />
        </ProductCard>

        <ProductCard 
          product = { product }
          className='bg-dark text-white'
        >

          <ProductImage 
            image='https://cdn.shopify.com/s/files/1/0551/9563/1814/products/havit-kb487l-tkl-mechanical-keyboard.jpg?v=1618240421'
            className='custom-image'
          />

          <ProductTitle 
            title = 'Otra cosa'
            className = 'text-white text-bold'
          />

          <ProductButtons 
            className = 'custom-buttons'
          />

        </ProductCard>

        <ProductCard 
          product = { product }
          sx = {{
            backgroundColor: '#70d1f8'
          }}
        >

          <ProductImage 
            image='https://i.blogs.es/66059a/apple-magic-mouse-2/1366_2000.jpg'
            sx={{
              minHeight: '15rem'
            }}
          />

          <ProductTitle 
            title = 'Otra cosa'
            sx={{
              fontWeight: 'bold'
            }}
          />

          <ProductButtons 
            sx={{
              display: 'flex',
              justifyContent: 'end'
            }}
          />

        </ProductCard>

      </div>
    </div>
  )
}
