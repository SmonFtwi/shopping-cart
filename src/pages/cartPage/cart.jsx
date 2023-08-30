import  { useContext } from "react";
import { ShopContext } from "../context";
import ProductArray from "../../product";
import { CartItem } from "./cartItems";
import { useNavigate } from "react-router-dom";
import "./cart.css";


const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  const {products}  = ProductArray();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
    {products.map((product) => {
    // eslint-disable-next-line no-prototype-builtins
    if (cartItems.hasOwnProperty(product.id)) {
      return <CartItem key={product.id} data={product} />;
    }
    return null;
  })}
</div>


      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/store")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;