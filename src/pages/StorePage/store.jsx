
import Product from './products';
import ProductArray from '../../product';

import './store.css'

function Store() {
  const { products } = ProductArray();
   
  return (
      <div className='products'>
      {products.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  )
}


export default Store;
