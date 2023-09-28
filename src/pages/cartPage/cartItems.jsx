/* eslint-disable react/prop-types */
import  { useContext } from "react";
import { ShopContext } from "../context";
import {Trash} from "phosphor-react";

export const CartItem = (props) => {
  const { id, image, price, title } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  
  return (
    <div className="cartItem">
      <img src={image} />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="Btn">
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)} > - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
         <Trash size={25}  className="remove" onClick={() => updateCartItemCount(0, id)}/> 
        </div>
      </div>
    </div>
  );
};