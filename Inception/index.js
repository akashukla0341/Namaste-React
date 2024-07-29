import React from 'react'
import ReactDOM from 'react-dom/client'

// USING JAVASCRIPT

// const h1 = document.createElement("h1")
// h1.innerText = "Hello from js"
// const root = document.querySelector("#root")
// root.appendChild(h1)

// USING REACT


// const h1 = React.createElement("h1",{id:"heading"},"Hello From React")
const h1 = <h1 id='heading' className='heading'>Hello react from  jsx</h1>
console.log(h1)
const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(h1)