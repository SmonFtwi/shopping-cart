// ProductDisplay.js

import { useParams } from 'react-router-dom';
import products from '../../product'; // Import your product data or fetch it from your context

function ProductDisplay() {
  const { productId } = useParams(); // Assuming your URL parameter is named "productId"
  const product = products.find((product) => product.id === parseInt(productId, 10));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={`Product ${product.id}`} />
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDisplay;
