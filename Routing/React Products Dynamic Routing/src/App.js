import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`);
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("error fetching products", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <AllRoutes products={products} />
    </div>
  );
}

export default App;