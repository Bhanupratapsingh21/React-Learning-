import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Componets/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {name :"bhanu"}
  let arr = [1,5,4,7]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-3'>Tailwind Test</h1>
      <Card  btntext = "click bsdk " />
      <Card username="bhanu"/>
    </>
  ) // two default wala or tailwind useing componets how to create a componets how to update values by {} or passing in 
  // funtion or pass it he like obj wala
}

export default App
