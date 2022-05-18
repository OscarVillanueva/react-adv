// Components
import { ProductCard } from '../components'

// Estilos
import '../styles/custom-styles.css'

// DataSource
import { products } from '../data/products'

// Hooks
import { useShoppingCart } from '../hooks/useShoppingCart'

export const ShoppingPage = () => {

  const { shoppingCart, handleProductCountChange } = useShoppingCart()

  return (
    <div>
      <h1>Shopping Store.</h1>
      <hr />

      <div
        style = {{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >

        {products.map(product => (
          <ProductCard 
            key = { product.id }
            product = { product }
            className='bg-dark text-white'
            onChange = { handleProductCountChange }
            value = { shoppingCart[product.id]?.count || 0 }
          >
            <ProductCard.Image className='custom-image' />
            <ProductCard.Title className = 'text-white text-bold' />
            <ProductCard.Buttons className = 'custom-buttons' />
          </ProductCard>
        ))}


      </div>

      <div className="shopping-cart">

        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard 
            key = { key }
            product = { product }
            sx = {{ width: '100px' }}
            value = { product.count }
            className='bg-dark text-white'
            onChange = { handleProductCountChange }
          >
            <ProductCard.Image className='custom-image' />
            <ProductCard.Buttons 
              className = 'custom-buttons' 
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            />
          </ProductCard>
        ))}

      </div>

      {/* <div>
        <code>
          { JSON.stringify(shoppingCart, null, 5) }
        </code>
      </div> */}
    </div>
  )
}
