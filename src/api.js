export async function getVans() {
  const res = await fetch('https://dummyjson.com/products?limit=100');
 
  if (!res.ok) {
    throw {
      message: 'Something went wrong',
      statusText: res.statusText,
      status: res.status,
    };
  }
  let data = await res.json();
  console.log("data is array: " + Array.isArray(data));
  console.log("data is: ", data);
  
  return data;
}
export async function getCart(retrievedData) {
  // console.log("cart is: ", retrievedData);
  
    fetch(`https://dummyjson.com/carts/user/${retrievedData.id}`)
      .then(res => res.json())
      .then(data => {
        const jsonString = JSON.stringify(data.carts[0]);

            // Store the JSON string in localStorage under the key "userData" (you can use any key you prefer)
            localStorage.setItem("cart", jsonString);
        // localStorage.setItem('cart',); // Update the cartProductList state with fetched data
      });
  
  }
 
  
  

export async function updateCart(product) {
  try {
    // Fetch the existing cart data from local storage
    const existingCart = localStorage.getItem("cart");
    const existingCartData = existingCart ? JSON.parse(existingCart) : { products: [] };

    // Check if the new product already exists in the cart
    const existingProductIndex = existingCartData.products.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // If the product already exists, update its quantity
      existingCartData.products[existingProductIndex].quantity += 1;
    } else {
      // If the product is new, add it to the cart
      existingCartData.products.push({
        id: product.id,
        title: product.title,
        price: product.price,
        discountPercentage: product.discountPercentage,
        discountedPrice: (product.price * (100 - product.discountPercentage)) / 100,
        total: ((product.price * (100 - product.discountPercentage)) / 100) * 1,
        quantity: 1,
      });
    }

    // Save the updated cart data back to local storage
    localStorage.setItem("cart", JSON.stringify(existingCartData));

    console.log("Added to cart successfully.");
  } catch (error) {
    console.error("Error updating the cart:", error);
  }
}
// Function to remove a product from the cart
export function removeProductFromCart(productId) {
  try {
    // Fetch the existing cart data from local storage
    const existingCart = localStorage.getItem("cart");
    const existingCartData = existingCart ? JSON.parse(existingCart) : { products: [] };

    // Check if the product exists in the cart
    const existingProductIndex = existingCartData.products.findIndex(
      (item) => item.id === productId
    );

    if (existingProductIndex !== -1) {
      // If the product exists, remove it from the cart
      existingCartData.products.splice(existingProductIndex, 1);

      // Save the updated cart data back to local storage
      localStorage.setItem("cart", JSON.stringify(existingCartData));

      console.log("Product removed from cart successfully.");
    } else {
      console.log("Product not found in the cart.");
    }
  } catch (error) {
    console.error("Error removing product from the cart:", error);
  }
}