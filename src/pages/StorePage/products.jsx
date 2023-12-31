/* eslint-disable react/prop-types */
// Product.js
import { useContext } from "react";
import { ShopContext } from "../context";

function Product({ data }) {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[data.id];

  return (
    <div className='product'>
      <div>
      <h4>{data.title}</h4>
       <img src={data.image} alt={`Product ${data.id}`} />
      <p>Price: ${data.price}</p>
      </div> 
      <button className="addToCartBttn" onClick={() => addToCart(data.id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );

}

export default Product;