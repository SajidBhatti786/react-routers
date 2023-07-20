import React from "react";
import { useOutletContext } from "react-router-dom";

function Photos() {
  const { product } = useOutletContext();

  return (
    <div className="photos-container">
      {product.images.map((image, index) => (
        <img key={index} src={image} alt={`Product Image ${index + 1}`} />
      ))}
    </div>
  );
}

export default Photos;
