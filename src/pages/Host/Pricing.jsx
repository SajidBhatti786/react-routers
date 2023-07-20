import React from "react";
import { useOutletContext } from "react-router-dom";
export default function Pricing() {
  const { product } = useOutletContext();
  return (
    <div>
      <h1>price: ${product.price}</h1>
      <h2>discount: {product.discountPercentage}%</h2>
      <h3>
        Selling Price: $
        {Math.floor(
          product.price - (product.price * product.discountPercentage) / 100
        )}
      </h3>
    </div>
  );
}
