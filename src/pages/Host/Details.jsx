import React from "react";
import { useOutletContext } from "react-router-dom";
function Details() {
  const { product } = useOutletContext();
  console.log("product is");
  return (
    <div>
      <h1>
        product id{product.id} with name {product.title} description
        {product.description}
      </h1>
    </div>
  );
}

export default Details;
