import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails({ products }) {
  const { id } = useParams();

  const selectedProduct = products.find(product => product.id === parseInt(id));
  console.log("fsa")
  console.log(products)
  console.log(id)
  
  return (
    <div data-testid="product-details">
      <div>
        {selectedProduct && (
          <>
            <h2 data-testid="product_name">{selectedProduct.name}</h2>
            <p data-testid="product_price">{selectedProduct.price}</p>
            {/* Add other product details here */}
          </>
        )}
      </div>
    </div>
  );
}
