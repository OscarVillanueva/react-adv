import { useState } from 'react'

// Components
import { ProductCard } from '../components'

// Estilos
import '../styles/custom-styles.css'

// DataSource
import { products } from '../data/products'

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

        <ProductCard 
          product = { products[0] }
          className='bg-dark text-white'
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          { ({ isMaxCountReached, reset, increaseBy }) => (
            <>
              <ProductCard.Image className='custom-image' />
              <ProductCard.Title className = 'text-white text-bold' />
              <ProductCard.Buttons className = 'custom-buttons' />

              <button onClick = { reset }>
                Reset
              </button>

              <button onClick={() => increaseBy(-2)}>
                -2
              </button>

              <button 
                onClick={() => increaseBy(2)}
                style = {{
                  display: isMaxCountReached ? 'none' : 'inline-block'
                }}
              >
                +2
              </button>
            </>
          )}
        </ProductCard>

    </div>
  )
}
