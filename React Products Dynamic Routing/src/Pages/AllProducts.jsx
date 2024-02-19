import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function AllProducts() {

  const [data,setData] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])

  async function fetchData(){
    try {
      let res = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`);
    let finalRes = await res.json();
    setData(finalRes);
    
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <div>All Products</div>
      <div data-testid = "products-wrapper">
        {data.map((item)=>{
          return <div key = {item.id}>
            <Link to={`products/${item.id}`}>
              <p  data-testid = "product_name">{item.name}</p>
              <p  data-testid = "product_price">{item.price}</p>
            </Link>
          </div>
        })}
      </div>
    </div>
  )
}
