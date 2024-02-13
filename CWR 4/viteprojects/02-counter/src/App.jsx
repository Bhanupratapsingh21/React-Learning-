import { useState } from 'react'

function App() {

  let [counter,setCounter] = useState(0)

  const addValue = ()=>{
    setCounter(counter+1)
   // setCounter((prevcounter)=>prevcounter+1)
   // setCounter((prevcounter)=>prevcounter+1)
   // setCounter((prevcounter)=>prevcounter+1)
   // setCounter((prevcounter)=>prevcounter+1)
  }

  const removevalue = ()=>{
    if(counter > 0){
      setCounter(counter-1)
    }
  }


  return (
    <>
     <h1>Counter Value : {counter} </h1>
     <button onClick={addValue}>Add Value</button>
     <br/>
     <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
