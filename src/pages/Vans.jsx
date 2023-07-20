import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/dist";
export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.products);
        console.log(data.products);
      });
  }, []);

  let vanList = null;
  if (vans.length > 0) {
    vanList = vans.map((van, index) => (
      <div
        className="product"
        data-aos="zoom-out"
        data-aos-duration="2000"
        key={index}
      >
        <img
          src={van.images[0]}
          alt={`Product ${index + 1}`}
          onClick={() => redirectToProductDetails(van.productId)}
        />
        <div className="product-info">
          <h2
            className="product-name"
            onClick={() => redirectToProductDetails(van.productId)}
          >
            {van.title}
          </h2>

          <div
            className="product-price"
            onClick={() => redirectToProductDetails(van.productId)}
          >
            <span className="discount-percentage">
              {van.discountPercentage}% OFF
            </span>
            <span className="price-old">${van.price}</span>
            <span className="price-new">
              $
              {Math.floor(
                van.price - (van.price * van.discountPercentage) / 100
              )}
            </span>
          </div>
          <Link to={`/vans/${van.id}`} className="add-to-cart">
            Add to Cart
          </Link>
        </div>
      </div>
    ));
  }

  const redirectToProductDetails = (productId) => {
    // Redirect to the product details page using the productId
    console.log("Redirecting to product details:", productId);
  };

  const addToCart = (id) => {
    // Add the product with the given id to the cart
    console.log("Adding to cart:", id);
  };

  return (
    <div>
      <h1>Vans page goes here 🚐</h1>
      <div className="products-container">
        {vanList == null ? (
          <div className="loader-container">
            <div class="loader"></div>
            <br />
            <h1>Loading....</h1>
          </div>
        ) : (
          vanList
        )}
      </div>
    </div>
  );
}
