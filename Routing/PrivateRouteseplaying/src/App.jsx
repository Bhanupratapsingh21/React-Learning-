import { useState } from 'react'
import './App.css'
import AllRoutes from './Routes/AllRoutes'

function App() {

  const handleSumbit = () => {
    fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "email": "eve.holt@reqres.in",
          "password": "pistol"
      })
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then((res) => {
        if (res.token) {
            console.log(res);
        }
    })
    .catch((error) => {
        console.error('Error fetching or parsing response:', error);
    });
}

handleSumbit(); // Call the function

  return (
    <>
      <AllRoutes/>
    </>
  )
}

export default App
