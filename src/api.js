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
