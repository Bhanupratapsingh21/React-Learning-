import { useState } from 'react'

function App() {
  const [Color,setColor] = useState("olive")
  return(
    <div className='w-full h-screen duration-200' style={{backgroundColor:Color}} 
    >
      <div className='fixed flex flex=wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='fixed flex flex=wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("red")} className='outlline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}} >Red</button>
          <button onClick={() => setColor("green")} className='outlline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}} >Green</button>
          <button onClick={() => setColor("blue")} className='outlline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}} >Blue</button>
          <button onClick={() => setColor("purple")} className='outlline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "purple"}} >Purple</button>
          <button onClick={() => setColor("Yellow")} className='outlline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "Yellow"}} >Yellow</button>
          <button onClick={() => setColor("brown")} className='outlline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "Brown"}} >Brown</button>
        </div>
      </div>
    </div>
  )
}

export default App