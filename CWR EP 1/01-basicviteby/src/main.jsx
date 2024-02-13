import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function hamarafuntion (){
    return(
        <div>
            <h2>hello hamara fun</h2>
        </div>
    )
}
const anotherElement = (
    <a href="https" target="blank" >Visit Google</a>
)
const anothersert2 = " chai or react" 
const reactelement = React.createElement(
    'a',{
        href:"https.google.com",
        target : "blank"
    },
    "click to goggle",
    anothersert2
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
     //<>hamarafuntion</>
    // anotherElement 
   reactelement
    )
