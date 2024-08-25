import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  let [color, setColor] = useState("pink")
  // const green = () =>{
  //   setColor("green")
  // }
  return (
    <>
      <div className='w-full h-screen m-auto
      ' style={{backgroundColor: color}}>
        <div className="absolute bottom-12 flex flex-wrap justify-center  inset-x-0 px-2">
        <div className="flex flex-wrap justyfy-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button className='outline-none px-2 bg-green-500 text-black rounded-full shadow-sm text-semibold'  onClick={()=>setColor("green")}>green</button>  
      <button className='outline-none px-2 bg-violet-600 text-black rounded-full shadow-sm text-semibold' onClick={() => setColor("black")}>black</button>  
      <button className='outline-none px-2 bg-red-500 text-black rounded-full shadow-sm text-semibold' onClick={() => setColor("red")}>red</button>  
      <button className='outline-none px-2 bg-green-300 text-black rounded-full shadow-sm text-semibold' onClick={()=> setColor("grey")}>grey</button>  
      <button className='outline-none px-2 text-black rounded-full shadow-sm text-semibold'onClick={()=> setColor("olive")}>green</button>  
      </div>
      </div>
      </div>
    </>
  )
}

export default App
