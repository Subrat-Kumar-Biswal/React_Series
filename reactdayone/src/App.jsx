import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
  
  let x = setCount(count+1)
  return (
    <>
   
    {/* <button onClick={setCount(count+1)}></button> */}
     <h1>hello world value= {count}</h1>
     <button onClick={x}>555</button>
    </>
  )
} 

export default App
