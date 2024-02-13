import { useState , useCallback , useEffect , useRef } from 'react'
function App() {
  const [length, setlength] = useState(8);
  const [numallow, setnumallow] = useState(false);
  const [charallow, setcharallow] = useState(false);
  const [password,setpassword]= useState("")
  
  // ref hook
  const passwordref = useRef(null)
  
  
  
  
  // so some times we have to call a funtion many time with the depandecies like button checkbox etc. so
  // we use callback
  const passwordgenrator = useCallback(()=>{
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numallow) str += "0123456789"
    if(charallow) str += "!@#$%^&*()+-={}[]~`"
    
    for(let i = 1; i <= length ; i++){
      let char = Math.floor(Math.random()* str.length)
      password += str.charAt(char)
    }

    setpassword(password)

  } , [length , numallow,charallow,setpassword])

  const copypasswordtoclip = useCallback(()=>{
    passwordref.current?.select()
    // for select in range passwordref.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordgenrator()
  },[length,numallow,charallow,passwordgenrator])

  return (
    <>
      <div className='w-full max-w-30 mx-auto text-center shadow-md rounded-lg px-10 py-5 my-8  text-orange-500 bg-gray-800'>
       <h1 className='mg-top-4 text-white text-4xl text-center my-4 '>Password-Genrator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordref}
            />
            <button
            className='bg-gray-600 text-white text-xl text-center px-2 pb-2 py-2'
            onClick={copypasswordtoclip}
            >Copy</button>

        </div>
        <div className="flex flex-wrap sm:flex-no-wrap gap-x-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" >
            <div className='flex items-center gap-x-1'>
              <input 
              type="range"
              min={6}
              max={99}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{
                {setlength(e.target.value)}
              }}
              />
              <label>Length : {length}</label>
            </div>
            <div className='flex itmes-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={numallow}
              id="numberInput"
              onChange={()=>{
                setnumallow((prev)=>!prev)
              }}
               />
               <label htmlFor='numberInput'>Number</label>
            </div>
            <div className='flex itmes-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={numallow}
              id="characterInput"
              onChange={()=>{
                setcharallow((prev)=>!prev)
              }}
               />
               <label htmlFor='characterInput'>Characters</label>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
