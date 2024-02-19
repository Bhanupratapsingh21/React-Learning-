import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
  let {id} = useParams();
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    fetchData();
  },[id]);

  async function fetchData(){
    try {
      let res = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`);
      let finalres = await res.json();
      setProducts(finalres);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div data-testid = "product-details" >
      <div>
      {/* show product details here */}
      <p  data-testid = "product_name">{products.name}</p>
      <p  data-testid = "product_price">{products.price}</p>
      </div>
    </div>
  )
}
