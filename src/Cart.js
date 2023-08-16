import React, { useEffect, useState } from 'react';
import { removeProductFromCart } from './api';
const Cart = () => {
  const storedData = localStorage.getItem('userData');
  const [cartProductList, setCartProductList] = useState([]);

  // Parse the JSON string back to the original object form
  const retrievedData = JSON.parse(storedData);

 useEffect(() => {
   const storedData = localStorage.getItem('cart');
   // setCartProductList(localStorage.getItem('cart'));
   
  const retrievedData = JSON.parse(storedData);
  setCartProductList(retrievedData);
  
  console.log("dash", cartProductList);

  }, [retrievedData.id,localStorage.getItem('cart')]); // Add retrievedData.id as a dependency to useEffect to avoid potential issues
const handleRemoveProduct = (productId) => {
    removeProductFromCart(productId);
    const storedData = localStorage.getItem('cart');
   // setCartProductList(localStorage.getItem('cart'));
   
  const retrievedData = JSON.parse(storedData);
  setCartProductList(retrievedData);// Fetch updated cart data from local storage after removing the product
  };
  return (
    <div className="container">
      {cartProductList.products && cartProductList.products.length > 0 ? (
        <>
          <div>
            {cartProductList.products.map((product) => (
              <div key={product.id} className="cart-item">
                <img className="item-image" src={product.image} alt={product.title} />
                <div className="item-details">
                  <h2 className="item-title">{product.title}</h2>
                  <h3 className="item-price">Price: ${product.price}</h3>
                  <h4>Discount: {product.discountPercentage}%</h4>
                  <h4>Discounted Price: ${product.discountedPrice}</h4>
                  <h4>Quantity: {product.quantity}</h4>
               <h5>Total: ${product.total}</h5>
               <button onClick={()=> handleRemoveProduct(product.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h1 className="total-label">Total Products: {cartProductList.products.length}</h1>
            {/* <h1 className="total-label">Total Quantity: {cartProductList.totalQuantity}</h1> */}
            <h1 className="total-label">Total Bill: ${cartProductList.total}</h1>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
