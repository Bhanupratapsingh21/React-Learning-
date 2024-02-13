import { useState } from 'react'

function App() {
  const [showbtn,setshowbtn] = useState(false)
  const [todos ,settodos] = useState([
    {
    tittle : "hey",
    desc : "iam good"
    },
    {
    tittle : "hey",
    desc : "iam good"
    },
    {
    tittle : "hey",
    desc : "iam good"
    }
])

  const changeconditan = ()=>{
    setshowbtn(!showbtn)
  }

  const Todo =({todo})=>{
    return(
      <div>
        <h1>{todo.tittle}</h1>
        <h2>{todo.desc}</h2>
      </div>
    )
  }

  return (
    <>
      {showbtn ? <button>Hello True</button> : ""}
      <br></br>
      {!showbtn && <button>Hello True</button>}
      <br></br>
      <button onClick={changeconditan}>SWAP</button>

      {
        todos.map((todo , index)=>{
          return (
          <Todo key={index} todo={todo} />
          )
        })
      }
      
    </>
  )
}

export default App
