import React from 'react';

export default function AllProducts({ products }) {
  console.log("hello")
  console.log(products)
  return (
    <div>
      <div>All Products</div>
      <div data-testid="products-wrapper">
        {products.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            {/* Add other product details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}
