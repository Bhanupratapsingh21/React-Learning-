import React, { useState, useEffect } from 'react';

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <div className="products-wrapper">
        {products.map(product => (
          <div key={product.id}>
            <h3 className="name">{product.name}</h3>
            <div className="brand">{product.brand}</div>
            <div className="price">{product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
