import Chai from "./chai"
function App() {
  const username = "chai"
  // {} expresion hai so yh sirf return type things k liye hi chalega kyuki woh aage jake evaluated expresion hai or woh obj hai aage jakar so isliye nhi work karega
  return (
    // <> </> warpped to export only one 
    <>
      <Chai/>
      
      <h1>Hello Bhai Chai React {username} </h1>
    </>
  )
}


export default App
