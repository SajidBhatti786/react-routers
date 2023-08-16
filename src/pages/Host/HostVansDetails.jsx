import React, { useEffect, useState } from "react";
import { useParams, NavLink, Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { updateCart } from "../../api";
export default function HostVanDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const location = useLocation();
  console.log(location);
  const searchState = location.state?.search || "";

  const extractedValue = searchState.split("=")[1];
  console.log(extractedValue); // Output: smartphones
  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  function changeMainImage(image) {
    document.getElementById("product-main-image").src = image;
  }

  return (
    <>
      {<h1>Product with id {id} ok!!!!</h1>}
      <NavLink to={`..${searchState}`} relative="path" className="back-button">
        &larr;{" "}
        <span>
          Back to{" "}
          {searchState == null
            ? "Back to all Vans"
            : "Back to" + " " + extractedValue}
        </span>
      </NavLink>
      {product && (
        <>
          <div className="container">
            <div className="single-product">
              <div className="row">
                <div className="col-6">
                  <div className="product-image">
                    <div className="product-image-main">
                      <img
                        src={product.images[0]}
                        alt=""
                        id="product-main-image"
                      />
                    </div>
                    <div className="product-image-slider">
                      {product.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt=""
                          className="image-list"
                          onClick={() => changeMainImage(image)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="breadcrumb">
                    <span>
                      <a href="#">Home</a>
                    </span>
                    <span>
                      <a href="#">Product</a>
                    </span>
                    <span className="active">T-shirt</span>
                  </div>

                  <div className="product-detail">
                    <div className="product-title">
                      <h2>{product.title}</h2>
                    </div>
                    <div className="product-rating">
                      <span>
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span className="review">(47 Review)</span>
                    </div>
                    <br />
                    <hr />
                    <div className="product-price">
                      <span className="sale-price">${product.price}</span>
                      <span className="offer-price">
                        $
                        {Math.floor(
                          product.price -
                            (product.price * product.discountPercentage) / 100
                        )}
                      </span>
                    </div>

                    <div className="product-details">
                      <h3>Description</h3>
                      <p>{product.description}</p>
                    </div>

                    <span className="divider"></span>

                    <div className="product-btn-group">
                      <div className="button buy-now">
                        <i className="bx bxs-zap"></i> Buy Now
                      </div>

                      <div
                        className="button add-cart"
                        onClick={() => updateCart(product)}
                      >
                        <i className="bx bxs-cart"></i> Add to Cart
                      </div>

                      <div className="button heart">
                        <i className="bx bxs-heart"></i> Add to Wishlist
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NavLink
            end
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to={`/host/vans/${product.id}`}
          >
            Detiails
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="photos"
          >
            Photos
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="pricing"
          >
            Pricing
          </NavLink>
          <Outlet context={{ product }} />
        </>
      )}
    </>
  );
}
