// Components
import { ProductCard } from '../components'

// DataSource
import { products } from '../data/products'

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

        <ProductCard 
          product = { products[0] }
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          { () => (
            <>
              <ProductCard.Image />
              <ProductCard.Title />
              <ProductCard.Buttons />
            </>
          )}
        </ProductCard>

    </div>
  )
}
