/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import ProductArray from "../product";

export const ShopContext = createContext(null);



export const ShopContextProvider = (props) => {

    const { products } = ProductArray();
    const [cartItems, setCartItems] = useState({});
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = products.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
          }
        }
        return totalAmount;
      };

    const addToCart = (itemId) => {
        setCartItems((prev) => {
          const updatedCart = { ...prev };
          if (updatedCart[itemId] === undefined) {
            updatedCart[itemId] = 0;
          }
          updatedCart[itemId]++;
          return updatedCart;
        });
      };

      const removeFromCart = (itemId) => {
        setCartItems((prev) => {
          const updatedCart = { ...prev };
          if (updatedCart[itemId] === undefined) {
            updatedCart[itemId] = 0;
          }
          
          updatedCart[itemId]--;
    
          if (updatedCart[itemId] <= 0) {
            checkout();
            delete updatedCart[itemId]; // Remove the item from the cart
          }
    
          return updatedCart;
        });
      };
    
   
      const updateCartItemCount = (newAmount, itemId) => {
        if (newAmount === 0) {
          removeFromCart(itemId); // Call the removeFromCart function to remove the item
        } else {
          setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
        }
      };

  const checkout = () => {
    setCartItems({});
  };
 
  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  //console.log(cartItems)

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
