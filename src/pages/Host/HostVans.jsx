import React, { useEffect, useState } from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom/dist";
import { getVans } from "../../api";
export default function HostVans() {
  const [vans, setVans] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const typeFilter = searchParam.get("category");
  console.log(typeFilter);
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data.products);
        console.log("data is: " + data);
      } catch (err) {
        console.error("Error fetching vans:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  let vanList = null;
  if (vans.length > 0) {
    const filteredVans =
      typeFilter != null
        ? vans.filter((van) => {
            const cleanTypeFilter = typeFilter.replace(/"/g, "");
            console.log("van.category:", van.category);
            console.log("typeFilter:", cleanTypeFilter);
            return van.category == cleanTypeFilter;
          })
        : vans;
    console.log("filteredVans:" + filteredVans);
    vanList = filteredVans.map((van, index) => (
      <div
        className="product"
        data-aos="zoom-out"
        data-aos-duration="2000"
        key={index}
      >
        {console.log("in mappppppppppppppppppppppppppppp" + van.id)}
        <img
          src={van.images[0]}
          alt={`Product ${index + 1}`}
          onClick={() => redirectToProductDetails(van.id)}
        />
        <div className="product-info">
          <h2
            className="product-name"
            onClick={() => redirectToProductDetails(van.id)}
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
          <Link
            to={`/host/vans/${van.id}`}
            className="add-to-cart"
            state={{ search: `?${searchParam.toString()}` }}
          >
            Add to Cart
          </Link>
        </div>
      </div>
    ));
  }
  console.log(vanList);
  const redirectToProductDetails = (productId) => {
    // Redirect to the product details page using the productId
    console.log("Redirecting to product details:", productId);
  };

  const addToCart = (id) => {
    // Add the product with the given id to the cart
    console.log("Adding to cart:", id);
  };
  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];
  function generateNewParamString(key, value) {
    const sp = new URLSearchParams(searchParam);
    if (value == null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  }
  if (loading) {
    return (
      <div className="loader-container">
        <div class="loader"></div>
        <br />
        <h1>Loading....</h1>
      </div>
    );
  }
  if (error) {
    return <h1>There was an error loading the vans: {error}</h1>;
  }

  return (
    <div>
      <h1>Vans page goes here 🚐</h1>
      <nav className="filter-nav">
        {categories.map((category) => {
          return (
            <NavLink
              className="category-link"
              // onClick={() => setSearchParam(`?category=${category}`)}
              to={generateNewParamString("category", category)}
            >
              {category}
            </NavLink>
          );
        })}

        <Link to=".">Clear</Link>
      </nav>
      <div className="products-container">{vanList}</div>
    </div>
  );
}
