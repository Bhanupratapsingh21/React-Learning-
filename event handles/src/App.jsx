import React, { useState } from "react"
function App() {
  const [form ,setform]= useState({
    name : "",
    email :""
  })
  function onclickf (){
    alert("Hello Alert")
  }
  function onmouseoverf (){
    alert("red here")
  }

  function handlechange(e){
   setform((pravState => ({
    ...pravState, [e.target.name] : e.target.value
  })));
  // set is async so it takes a little time to run 
   console.log(form)
  }

  return (
    <>
  
      <div>
        <button onClick={onclickf}>Hello-bro</button>
      </div>
  
        <input type="text" name="name" value={form.name} onChange={handlechange}  /> 
        <input type="text" name="email" value={form.email} onChange={handlechange}  />   
  
    </>
  )
}

export default App
